import { config } from '$lib/cannacoding.config';
import { Post } from '../../types/posts';
import fetchAllPosts from '../../utils/fetchAllposts';

export async function GET() {
	try {
		const posts = await fetchAllPosts(); // Dynamisch alle Artikel abrufen
		console.log('Geladene Posts:', posts.length);

		if (!posts.length) {
			console.error('Keine Posts gefunden!');
			return new Response('Keine Artikel verfügbar', { status: 404 });
		}

		return new Response(generateRSS(posts), { headers: { 'Content-Type': 'application/xml' } });
	} catch (error) {
		console.error('RSS-Feed Fehler:', error);
		return new Response('RSS-Feed konnte nicht generiert werden', { status: 500 });
	}
}

function generateRSS(posts: Post[]): string {
	return `
        <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
            <channel>
                <title>${config.appName}</title>
                <description>${config.appDescription}</description>
                <link>${config.appUrl}</link>
                <atom:link href="${config.appUrl}/rss.xml" rel="self" type="application/rss+xml"/>
                <language>de-DE</language>
                <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
                ${posts
									.map((post) => {
										const pubDate = new Date(post.date);
										const validDate = isNaN(pubDate.getTime())
											? ''
											: `<pubDate>${pubDate.toUTCString()}</pubDate>`;
										const imageTag = post.better_featured_image?.source_url
											? `<media:content url="${post.better_featured_image.source_url}" medium="image" />`
											: '';

										return `
                        <item>
                            <title><![CDATA[${post.title}]]></title>
                            <description><![CDATA[${post.excerpt}]]></description>
                            <link>${config.appUrl}/${post.slug}</link>
                            <guid isPermaLink="true">${config.appUrl}/${post.slug}</guid>
                            ${validDate}
                            ${imageTag}
                        </item>
                        `;
									})
									.join('')}
            </channel>
        </rss>
    `.trim();
}
