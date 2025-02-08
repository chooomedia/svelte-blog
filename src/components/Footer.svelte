<script>
	import FacebookIcon from './icons/FacebookIcon.svelte';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import TiktokIcon from './icons/TiktokIcon.svelte';
	import YoutubeIcon from './icons/YoutubeIcon.svelte';
	import TwitterIcon from './icons/TwitterIcon.svelte';
	import TwitchIcon from './icons/TwitchIcon.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer
	class="
		relative overflow-hidden 
		bg-gray-100 text-gray-800 
		dark:bg-surface-900 dark:text-gray-200 
		py-16 transition-all duration-300
	"
	role="contentinfo"
	itemscope
	itemtype="https://schema.org/WPFooter"
>
	<div
		class="
			absolute inset-0 
			bg-cover bg-center bg-repeat 
			opacity-70 dark:opacity-20
			pointer-events-none
		"
		style="
			background-image: url('https://cannachris.de/wp-content/uploads/2024/09/cannachris-marijuana-leaves-seamless.png');
            background-size: 640px;
		"
	/>
	<div
		class="
		absolute inset-0 pointer-events-none
		bg-gradient-to-b from-white/90 to-white 
		dark:from-surface-900 dark:to-black
		opacity-95 dark:opacity-80
	"
		style="
		mask-image: radial-gradient(circle at bottom, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 90%);
		-webkit-mask-image: radial-gradient(circle at bottom, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 90%);
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
	<div class="relative z-10 w-full max-w-[1080px] mx-auto px-6 md:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Kontakt & Aktivismus -->
			<div itemscope itemtype="https://schema.org/ContactPoint">
				<h2 class="text-4xl font-semibold mb-4">Kontakt & Aktivismus</h2>
				<nav role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
					<ul class="space-y-2">
						<li>
							<a href="/kontakt" class="flex items-center gap-2 hover:text-primary-500">
								📩 <span>Kontaktformular</span>
							</a>
						</li>
						<li>
							<a
								href="mailto:hi(at)cannachris.de"
								class="flex items-center gap-2 hover:text-primary-500"
							>
								📧 <span>E-Mail: hi(at)cannachris.de</span>
							</a>
						</li>
						<li>
							<a
								href="https://x.com/search?q=weedmob&src=typed_query"
								target="_blank"
								class="flex items-center gap-2 hover:text-primary-500"
							>
								🔗 <span>#WeedMob auf X</span>
							</a>
						</li>
						<li>
							<a
								href="https://hanfverband.de/"
								target="_blank"
								class="flex items-center gap-2 hover:text-primary-500"
							>
								🌿 <span>Deutscher Hanfverband</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<!-- DHV Mitgliedslogo -->
			<div class="flex justify-center items-center">
				<img
					src="https://cannachris.de/wp-content/uploads/2023/03/dhv_mitglieder_logo-removebg-preview-1.png"
					alt="DHV Mitglied"
					class="w-[125px]"
				/>
			</div>

			<!-- Über Mich -->
			<div itemscope itemtype="https://schema.org/AboutPage">
				<h2 class="text-4xl font-semibold mb-4">Über mich & Infos</h2>
				<nav role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
					<ul class="space-y-2">
						<li>
							<a
								href="https://cannachris.de/#aboutchris"
								class="flex items-center gap-2 hover:text-primary-500"
							>
								🌱 <span>Meine Geschichte</span>
							</a>
						</li>
						<li>
							<a href="/impressum" class="flex items-center gap-2 hover:text-primary-500">
								📜 <span>Impressum</span>
							</a>
						</li>
						<li>
							<a href="/datenschutz" class="flex items-center gap-2 hover:text-primary-500">
								🔒 <span>Datenschutz</span>
							</a>
						</li>
						<li>
							<a href="/blog" class="flex items-center gap-2 hover:text-primary-500">
								📰 <span>Blog</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>

		<!-- Social Media Links -->
		<nav aria-label="Social Media Links" class="mt-8">
			<ul class="flex flex-wrap justify-center gap-4">
				<li>
					<a
						href="https://www.instagram.com/c4nnachris/"
						class="bg-primary-500 p-2 rounded-full hover:bg-primary-400 transition-colors block"
						target="_blank"
						rel="noopener"
						aria-label="Folge mir auf Instagram"
						title="Folge auf Instagram"
					>
						<InstagramIcon className="text-surface-50 fill-primary-500 w-10 h-10" />
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/c4nnachris"
						class="bg-primary-500 p-2 rounded-full hover:bg-primary-400 transition-colors block"
						target="_blank"
						rel="noopener"
						aria-label="Folge mir auf Facebook"
						title="Folge auf Facebook"
					>
						<FacebookIcon className="text-surface-50 fill-primary-500 w-10 h-10" />
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/channel/UCD3wuH5mUzr5el3KNZM9fOw"
						class="bg-primary-500 p-2 rounded-full hover:bg-primary-400 transition-colors block"
						target="_blank"
						rel="noopener"
						aria-label="Folge mir auf YouTube"
						title="Folge auf YouTube"
					>
						<YoutubeIcon className="text-surface-50 fill-primary-500 w-10 h-10" />
					</a>
				</li>
				<li>
					<a
						href="https://x.com/chooom"
						class="bg-primary-500 p-2 rounded-full hover:bg-primary-400 transition-colors block"
						target="_blank"
						rel="noopener"
						aria-label="Folge mir auf X"
						title="Folge auf X"
					>
						<TwitterIcon className="text-surface-50 fill-transparent w-10 h-10" />
					</a>
				</li>
				<li>
					<a
						href="https://www.twitch.tv/cann4chris"
						class="bg-primary-500 p-2 rounded-full hover:bg-primary-400 transition-colors block"
						target="_blank"
						rel="noopener"
						aria-label="Folge mir auf Twitch"
						title="Folge auf Twitch"
					>
						<TwitchIcon className="text-surface-50 fill-primary-500 w-10 h-10" />
					</a>
				</li>
			</ul>
		</nav>

		<!-- Copyright Info -->
		<div
			class="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-sm flex flex-col md:flex-row justify-between items-center"
		>
			<p class="text-center md:text-left">
				© {currentYear} Cannachris
			</p>
			<p class="mt-2 md:mt-0 text-center md:text-right">Realized with 🌿 and 💚 by Gi</p>
		</div>
	</div>
</footer>
