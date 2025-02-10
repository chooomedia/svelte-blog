<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { theme, toggleTheme } from '../stores/theme';
	import Logo from './Logo.svelte';
	import Input from './Input.svelte';
	import SearchIcon from './icons/SearchIcon.svelte';
	import HamburgerIcon from './icons/HamburgerIcon.svelte';
	import Dropdown from './Dropdown.svelte';

	let isSearchActive = false;
	let isMobileMenuOpen = false;
</script>

<header
	class="
		sticky top-0 left-0 right-0 z-50
		backdrop-blur-md
		bg-surface-50/70 dark:bg-surface-900/90
		border-b border-surface-200 dark:border-surface-800
		transition-all duration-300
	"
	itemscope
	itemtype="https://schema.org/WPHeader"
>
	<div
		class="
        2xl:max-w-[1080px]
		mx-auto px-4
		h-24
		flex items-center justify-between"
	>
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

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex items-center gap-8" aria-label="Main navigation">
			{#each [{ href: '/', label: 'Home' }, { href: '/posts', label: 'Posts' }, { href: '/blog', label: 'Blog' }] as item}
				<a
					href={item.href}
					class="
						group relative
						text-surface-600 dark:text-surface-300
						hover:text-primary-500
						transition-colors duration-300
					"
				>
					{item.label}
					<span
						class="
						absolute inset-x-0 bottom-0 h-[2px]
						bg-primary-500 dark:bg-primary-300
						transform scale-x-0 group-hover:scale-x-100
						transition-transform duration-300
					"
					/>
				</a>
			{/each}
		</nav>

		<!-- Search & Theme Toggle Container -->
		<div class="flex items-center gap-4">
			<!-- Desktop Inline-Suche (keine zweite Suche mehr im Header) -->
			<div class="hidden md:flex items-center transition-all duration-300">
				<Input
					placeholder="Suche..."
					isExpanded={isSearchActive}
					icon={true}
					on:focus={() => (isSearchActive = true)}
					on:blur={() => (isSearchActive = false)}
					on:change={(e) => console.log(e.detail)}
				>
					<SearchIcon slot="icon" className="w-8 h-8 text-surface-600 dark:text-surface-300" />
				</Input>
			</div>

			<!-- Theme Toggle -->
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

			<!-- Mobile Search Dropdown -->
			<div class="md:hidden block">
				<Dropdown position="fullwidth">
					<button slot="icon" class="w-14 h-14 flex items-center justify-center">
						<SearchIcon className="w-8 h-8 text-surface-600 dark:text-surface-300" />
					</button>
					<div class="p-4 w-full">
						<Input placeholder="Suche..." isExpanded={true} icon={true}>
							<SearchIcon slot="icon" className="w-8 h-8 text-surface-600 dark:text-surface-300" />
						</Input>
					</div>
				</Dropdown>
			</div>

			<!-- Mobile Menü Dropdown -->
			<div class="lg:hidden flex">
				<Dropdown position="fullwidth">
					<button slot="icon" class="w-14 h-14 flex items-center justify-center">
						<HamburgerIcon className="w-8 h-8 text-surface-600 dark:text-surface-300" />
					</button>
					<nav>
						{#each [{ href: '/', label: 'Home' }, { href: '/posts', label: 'Posts' }, { href: '/blog', label: 'Blog' }] as item}
							<a
								href={item.href}
								class="
                                    block
                                    px-4
                                    py-3
                                    text-surface-600 dark:text-surface-300
                                    hover:bg-surface-100 dark:hover:bg-surface-800
                                    transition-colors duration-300
                                "
							>
								{item.label}
							</a>
						{/each}
					</nav>
				</Dropdown>
			</div>
		</div>
	</div>
</header>
