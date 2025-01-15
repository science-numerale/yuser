<script lang="ts">
	import type { Snippet } from "svelte";
	import triche from "../states/triche.svelte";
	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

{#if triche().boutonsCachés}
	<div class="hidden">
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
