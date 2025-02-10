<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import ChevronLeft from './icons/ChevronLeft.svelte';
	import ChevronRight from './icons/ChevronRight.svelte';

	let currentPageVal: string | number | null = '1';
	export let currentPage: number | string = 1;
	export let totalPages: number = 5;

	const getUrl = (currentPage: number) => {
		return `/page/${currentPage}`;
	};

	afterNavigate(() => {
		currentPageVal = currentPage;
	});
</script>

<nav
	class="
        w-full
        flex justify-center items-center
        mt-16 md:mt-24 mb-20
    "
	role="navigation"
	aria-label="Pagination"
	itemscope
	itemtype="https://schema.org/SiteNavigationElement"
>
	<div
		class="
        flex items-center
        gap-3
        bg-gray-100 dark:bg-surface-800/30
        backdrop-blur-sm
        rounded-full
        p-3
        shadow-md
    "
	>
		{#if Number(currentPageVal) > 1}
			<a
				href={getUrl(Number(currentPageVal) - 1)}
				class="
                    flex w-12 h-12
                    pt-[3px]
                    rounded-full
                    items-center
                    justify-center
                    hover:bg-gray-300 dark:hover:bg-gray-700
                    transition-colors
                    duration-300
                    group
                "
				aria-label="Previous page"
			>
				<ChevronLeft
					className="
                        w-8 h-8
                        text-gray-500 dark:text-gray-300 
                        group-hover:text-primary-500 
                        transition-colors 
                        duration-300
                    "
				/>
			</a>
		{/if}

		{#each { length: totalPages } as _, page}
			<a
				href={getUrl(page + 1)}
				class="
                    w-12 h-12
                    pt-[3px]
                    flex items-center
                    justify-center
                    rounded-full
                    text-lg
                    font-semibold
                    transition-all
                    duration-300
                    {page + 1 === Number(currentPageVal)
					? 'bg-primary-500 text-white scale-110 shadow-lg'
					: 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}
                "
				aria-label={`Go to page ${page + 1}`}
				aria-current={page + 1 === Number(currentPageVal) ? 'page' : undefined}
			>
				{page + 1}
			</a>
		{/each}

		{#if Number(currentPageVal) < totalPages}
			<a
				href={getUrl(Number(currentPageVal || 0) + 1)}
				class="
                    flex w-12 h-12
                    rounded-full
                    items-center
                    justify-center
                    hover:bg-gray-300 dark:hover:bg-gray-700
                    transition-colors
                    duration-300
                    group
                "
				aria-label="Next page"
			>
				<ChevronRight
					className="
                        w-8 h-8
                        text-gray-500 dark:text-gray-300 
                        group-hover:text-primary-500 
                        transition-colors 
                        duration-300
                    "
				/>
			</a>
		{/if}
	</div>
</nav>
