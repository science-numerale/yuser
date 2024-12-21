<script lang="ts">
	import type { Snippet } from "svelte";
	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<div
	class="hidden"
>
	{@render children()}
</div>

<style>
	.hidden {
		width: fit-content;
		height: fit-content;
		display: inline-block;
		opacity: 10%;
	}
	.hidden:hover {
		opacity: 100%;
	}
</style>
