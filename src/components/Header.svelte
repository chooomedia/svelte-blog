<script lang="ts">
	import { theme, toggleTheme } from '../stores/theme';
	import Logo from './Logo.svelte';
</script>

<header
	class="
      sticky top-0 left-0 right-0 z-50 
      backdrop-blur-md bg-white/70 dark:bg-surface-900/90 
      border-b border-gray-200 dark:border-surface-800
      transition-all duration-300"
	itemscope
	itemtype="https://schema.org/WPHeader"
>
	<div class="w-full max-w-[1080px] mx-auto px-4 h-24 flex items-center justify-between">
		<!-- Logo -->
		<a
			href="/"
			class="w-24 transition-transform duration-300 hover:scale-105"
			aria-label="Home"
			itemscope
			itemtype="https://schema.org/Organization"
		>
			<Logo />
		</a>

		<!-- Navigation -->
		<nav class="hidden md:flex items-center gap-8" aria-label="Main navigation">
			{#each [{ href: '/', label: 'Home' }, { href: '/posts', label: 'Posts' }, { href: '/blog', label: 'Blog' }] as item}
				<a href={item.href} class="header__btn">
					{item.label}
					<span
						class="absolute inset-x-0 bottom-0 h-[2px] bg-primary-500 dark:bg-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
					/>
				</a>
			{/each}
		</nav>

		<!-- Theme Toggle Button -->
		<button
			on:click={toggleTheme}
			class="w-14 h-14 flex items-center justify-center rounded-full bg-surface-100/50 dark:bg-surface-800 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
			aria-label="Toggle theme"
		>
			<svg
				class="w-8 h-8 text-gray-800 dark:text-gray-200"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				viewBox="0 0 24 24"
			>
				<!-- Sun Icon (Light Mode) -->
				<circle
					class="dark:hidden"
					stroke-linecap="round"
					stroke-linejoin="round"
					fill="none"
					cx="12"
					cy="12"
					r="4"
				/><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path
					d="m17.66 17.66 1.41 1.41"
				/><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path
					d="m19.07 4.93-1.41 1.41"
				/>
				<!-- Moon Icon (Dark Mode) -->
				<path
					class="hidden dark:block"
					stroke-linecap="round"
					stroke-linejoin="round"
					fill="none"
					d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"
				/>
			</svg>
		</button>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
		>
			<div class="w-6 h-[2px] bg-gray-800 dark:bg-gray-200 mb-1" />
			<div class="w-6 h-[2px] bg-gray-800 dark:bg-gray-200 mb-1" />
			<div class="w-6 h-[2px] bg-gray-800 dark:bg-gray-200" />
		</button>
	</div>
</header>
