<script>
	export let gap = 10;
</script>

<div style="gap: {gap}px;" {...$$props} class={`space${$$props.class ? ` ${$$props.class}` : ''}`}>
	<slot />
</div>

<style>
	:global(.space) {
		display: flex;
		align-items: center;
	}
</style>
