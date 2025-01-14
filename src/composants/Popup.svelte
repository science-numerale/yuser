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
	<div class="espace">
		<div class="contenu">
			{@render children()}
		</div>
	</div>
{/if}

<style>
	.espace {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		min-height: 100dvh;
		z-index: 999;

		background: rgba(0, 0, 0, 0.1);
		overflow: auto;

		display: grid;
		place-items: center;
		/*display: flex;*/
		/*justify-content: center;*/
		/*align-items: center;*/
	}
	.contenu {
		position: relative;
		overflow-x: clip;

		/*top: 50%;*/
		/*left: 50%;*/
		/*transform: translate(-50%, -50%);*/

		width: max-content;
		max-width: 90dvw;


		background: white;
		border: solid black;
		padding: 1rem;
	}
	/*.cacheur {*/
	/*	content: "";*/
	/*	position: fixed;*/
	/*	top: 0;*/
	/*	bottom: 0;*/
	/*	left: 0;*/
	/*	right: 0;*/
	/*	z-index: 999;*/
	/**/
	/*	background: black;*/
	/*	opacity: 10%;*/
	/*}*/
</style>
