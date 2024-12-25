<script lang="ts">
	import type { Snippet } from "svelte";
	import type { PopupControls } from "./Popup.ts";

	let {
		children,
		popup = $bindable(),
	}: {
		children: Snippet;
		popup?: PopupControls;
	} = $props();

	let ouvert = $state(false);
	let resolution = ()=>{}

	popup = {
		async ouvrir() {
			ouvert = true;
			return new Promise((resolve) => {
				resolution = resolve
			});
		},
		fermer() {
			ouvert = false;
			resolution()
		},
	};
</script>

{#if ouvert}
	<div class="cacheur"></div>
	<div class="contenu">
		{@render children()}
	</div>
{/if}

<style>
	.contenu {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 999;

		background: white;
		border: solid black;
		padding: 1rem;
	}
	.cacheur {
		content: "";
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;

		background: black;
		opacity: 10%;
	}
</style>
