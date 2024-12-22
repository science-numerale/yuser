<script lang="ts">
	import type { Snippet } from "svelte";
    import { cheats } from "../states/cheats.svelte";
	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

{#if cheats.enabled}
	<div
		class="hidden"
	>
		{@render children()}
	</div>
{/if}

<style>
	.hidden {
		width: fit-content;
		height: fit-content;
		display: inline-block;
		opacity: 10%;
	}
</style>
