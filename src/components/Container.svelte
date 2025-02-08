<script lang="ts">
	// export let $$restProps: any = {};
	export let fillViewport: boolean = false;

	const classes = () => {
		const classList = [`container${$$props.class ? ' ' + $$props.class : ''}`];

		if (fillViewport) {
			classList.push('container--fill-viewport');
		}

		return classList.join(' ');
	};
</script>

<div {...$$props} class={classes()}>
	<slot />
</div>
