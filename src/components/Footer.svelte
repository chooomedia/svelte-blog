<script lang="ts">
	import { goto } from '$app/navigation';
	import FacebookIcon from './icons/FacebookIcon.svelte';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import YoutubeIcon from './icons/YoutubeIcon.svelte';
	import TwitterIcon from './icons/TwitterIcon.svelte';
	import TwitchIcon from './icons/TwitchIcon.svelte';
	import PoweredBy from './icons/PoweredBy.svelte';
	import DhvMember from './icons/DhvMember.svelte';

	const currentYear = new Date().getFullYear();

	// Social Media Links
	const socialLinks = [
		{ href: 'https://www.instagram.com/c4nnachris/', label: 'Instagram', icon: InstagramIcon },
		{ href: 'https://www.facebook.com/c4nnachris', label: 'Facebook', icon: FacebookIcon },
		{
			href: 'https://www.youtube.com/channel/UCD3wuH5mUzr5el3KNZM9fOw',
			label: 'YouTube',
			icon: YoutubeIcon
		},
		{ href: 'https://x.com/chooom', label: 'X (Twitter)', icon: TwitterIcon },
		{ href: 'https://www.twitch.tv/cann4chris', label: 'Twitch', icon: TwitchIcon }
	];

	// Interne & Externe Links mit den richtigen Attributen
	const footerLinks = [
		{ href: '/kontakt', label: 'Kontaktformular', icon: '📩', internal: true },
		{ href: 'mailto:hi@cannachris.de', label: 'E-Mail: hi@cannachris.de', icon: '📧' },
		{
			href: 'https://x.com/search?q=weedmob&src=typed_query',
			label: '#WeedMob auf X',
			icon: '🔗',
			external: true,
			rel: 'noopener'
		},
		{
			href: 'https://hanfverband.de/',
			label: 'Deutscher Hanfverband',
			icon: '🌿',
			external: true,
			rel: 'noopener nofollow'
		},
		{ href: '/aboutme', label: 'Meine Geschichte', icon: '📜', internal: true, rel: 'follow' },
		{ href: '/impressum', label: 'Impressum', icon: '📜', internal: true, rel: 'follow' },
		{
			href: '/datenschutzerklaerung',
			label: 'Datenschutz',
			icon: '🔒',
			internal: true,
			rel: 'follow'
		},
		{ href: '/blog', label: 'Blog', icon: '📰', internal: true, rel: 'follow' }
	];

	// Funktion für interne Navigation mit SvelteKit
	function navigateTo(path: string, event: Event) {
		goto(path);
	}
</script>

<footer
	class="relative overflow-hidden bg-gray-100 text-gray-800 dark:bg-surface-900 dark:text-gray-200 py-16 transition-all duration-300"
	itemscope
	itemtype="https://schema.org/WPFooter"
>
	<!-- Hintergrund beibehalten -->
	<div
		class="absolute inset-0 bg-cover bg-center bg-repeat opacity-70 dark:opacity-20 pointer-events-none"
		style="background-image: url('https://cannachris.de/wp-content/uploads/2024/09/cannachris-marijuana-leaves-seamless.png'); background-size: 640px;"
	/>
	<div
		class="
absolute inset-0 pointer-events-none
bg-gradient-to-b from-white/90 to-white
dark:from-surface-900 dark:to-black
opacity-95 dark:opacity-80
"
		style="
mask-image: radial-gradient(circle at bottom, rgba(255,255,255,0.9) 70%, rgba(255,255,255,0) 100%);
-webkit-mask-image: radial-gradient(circle at bottom, rgba(255,255,255,0.9) 70%, rgba(255,255,255,0) 100%);
"
	/>

	<div
		class="
    absolute inset-0 pointer-events-none
    bg-gradient-to-b from-white/90 via-white/60 to-white
    dark:from-surface-900 dark:via-surface-900 dark:to-surface-900/90
    opacity-80 dark:opacity-70
"
	/>

	<div class="relative z-10 w-full md:w-full 2xl:max-w-[1140px] mx-auto px-6 md:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Kontakt & Aktivismus -->
			<div itemscope itemtype="https://schema.org/ContactPoint">
				<h2 class="text-3xl font-semibold mb-4">Kontakt & Aktivismus</h2>
				<nav itemscope itemtype="https://schema.org/SiteNavigationElement">
					<ul class="space-y-2">
						{#each footerLinks.slice(0, 4) as link}
							<li>
								{#if link.internal}
									<a
										href={link.href}
										on:click={(event) => navigateTo(link.href, event)}
										class="flex items-center gap-2 hover:text-primary-500"
									>
										{link.icon} <span>{link.label}</span>
									</a>
								{:else}
									<a
										href={link.href}
										class="flex items-center gap-2 hover:text-primary-500"
										target="_blank"
										rel={link.rel || 'noopener noreferrer'}
									>
										{link.icon} <span>{link.label}</span>
									</a>
								{/if}
							</li>
						{/each}
					</ul>
				</nav>
			</div>

			<!-- DHV Mitgliedslogo mit fester Größe -->
			<div class="flex justify-center items-center">
				<DhvMember
					className="w-[150px] h-[150px] shrink-0"
					title="Cannachris ist Deutscher Hanfverband Mitglied"
				/>
			</div>

			<!-- Über Mich -->
			<div itemscope itemtype="https://schema.org/AboutPage">
				<h2 class="text-3xl font-semibold mb-4">Über mich & Infos</h2>
				<nav itemscope itemtype="https://schema.org/SiteNavigationElement">
					<ul class="space-y-2">
						{#each footerLinks.slice(4) as link}
							<li>
								{#if link.internal}
									<a
										href={link.href}
										on:click={(event) => navigateTo(link.href, event)}
										class="flex items-center gap-2 hover:text-primary-500"
									>
										{link.icon} <span>{link.label}</span>
									</a>
								{:else}
									<a
										href={link.href}
										class="flex items-center gap-2 hover:text-primary-500"
										target="_blank"
										rel={link.rel || 'noopener noreferrer'}
									>
										{link.icon} <span>{link.label}</span>
									</a>
								{/if}
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>

		<!-- Social Media Links -->
		<nav aria-label="Social Media Links" class="mt-8">
			<ul class="flex flex-wrap justify-center gap-4">
				{#each socialLinks as { href, label, icon }}
					<li>
						<a
							{href}
							class="bg-primary-500 p-3 rounded-full hover:bg-primary-400 transition-colors block"
							target="_blank"
							rel="noopener noreferrer"
							title={'Folge mir auf ' + label}
						>
							<svelte:component this={icon} className="text-surface-50 fill-transparent w-8 h-8" />
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Copyright Info -->
		<div
			class="mt-8 pt-8 border-t h-20 border-gray-300 dark:border-gray-700 text-sm flex flex-col md:flex-row justify-between items-center gap-2"
		>
			<p class="text-center md:text-left" aria-label="Copyright-Information">
				© {currentYear} Cannachris
			</p>
			<p
				class="flex items-center text-center md:text-right"
				aria-label="Erstellt mit Liebe von Cannachris"
			>
				<span aria-hidden="true">Realized with 🌿 and 💚 by</span>
				<PoweredBy className="w-10 h-10 ml-2" title="Powered by Cannachris" />
			</p>
		</div>
	</div>
</footer>
