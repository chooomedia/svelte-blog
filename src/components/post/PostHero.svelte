<script lang="ts">
	import { fade } from 'svelte/transition';
	import Container from '../Container.svelte';
	import Space from '../Space.svelte';
	import CalendarIcon from '../icons/CalendarIcon.svelte';
	import StopwatchIcon from '../icons/StopwatchIcon.svelte';

	export let post: any;
	export let categories: any[];

	let categoryId: string = post.categories[0];

	const getCategoryName = (id: string) => {
		const category = categories.find((cat) => cat.id === parseInt(id));
		return category ? category.name : '';
	};
</script>

<div
	class="post-hero -mt-[200px] pt-[200px] transition-all duration-300"
	in:fade={{ duration: 300 }}
>
	<Container
		class="
            flex flex-col gap-6 
            md:gap-10 
            lg:flex-row-reverse lg:gap-10 
            xl:gap-[100px]
            transition-all duration-300
        "
	>
		<!-- Featured Image -->
		<div class="flex-shrink-0 lg:flex-[3_1_0%] lg:w-[600px] lg:max-w-full">
			<img
				src={post.featured_media}
				alt={post.title}
				loading="lazy"
				class="
                    w-full 
                    h-[240px] sm:h-[440px] 
                    object-cover 
                    rounded-2xl 
                    border-[1px]
                    border-primary-700
                    transition-transform duration-300
                    hover:scale-[1.03]
                    shadow-lg
                "
			/>
		</div>

		<!-- Post Details -->
		<div class="flex-[2_1_0%]">
			<p class="text-sm text-primary-500 mb-2 uppercase tracking-wide">
				{getCategoryName(categoryId)}
			</p>

			<h1
				class="
                    text-5xl font-bold 
                    text-primary-500
                    mt-4 mb-6
                    transition-colors duration-300
                "
			>
				{@html post.title}
			</h1>

			<p class="mb-5 text-gray-600 dark:text-gray-400">
				by {post.author}
			</p>

			<Space gap={30}>
				<Space gap={4}>
					<CalendarIcon class="text-primary-500" />
					<p class="text-sm text-gray-600 dark:text-gray-400">
						{post.date}
					</p>
				</Space>
				<Space gap={4}>
					<StopwatchIcon class="text-primary-500" />
					<p class="text-sm text-gray-600 dark:text-gray-400">
						{post.reading_time} min Lesezeit
					</p>
				</Space>
			</Space>
		</div>
	</Container>
</div>
