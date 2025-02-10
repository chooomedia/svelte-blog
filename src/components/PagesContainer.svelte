<script lang="ts">
	import type { Page } from '../types/pages';
	import Container from './Container.svelte';

	export let pages: Page[] = [];
	export let loading = false;
</script>

<Container>
	<slot />
</Container>
