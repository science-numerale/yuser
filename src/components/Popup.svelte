<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		children,
		ouvert = $bindable(false),
	}: {
		children: Snippet;
		ouvert?: boolean;
	} = $props();

	//let precedendemmentOuvert = $state.snapshot(ouvert)
	//
	//$effect(()=>{
	//	if (!precedendemmentOuvert && ouvert) {
	//		precedendemmentOuvert = $state.snapshot(ouvert)
	//		lorsOuverture()
	//	} else if (precedendemmentOuvert && !ouvert) {
	//		precedendemmentOuvert = $state.snapshot(ouvert)
	//		lorsFermeture()
	//	}
	//})
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
