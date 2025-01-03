<script lang="ts">
	import type { Snippet } from "svelte";
	import Popup from "./Popup.svelte";
	import PopupEnnuyeux from "./PopupEnnuyeux.svelte";
	import Hidden from "./Hidden.svelte";

	let {
		children,
		ouvert = $bindable(),
		info,
		memorisation,
	}: {
		children: Snippet;
		ouvert?: boolean;
		info: string;
		memorisation: string;
	} = $props();

	let entree = $state("Entrer le texte ici...");
	// Varier son vocabulaire !
	let popupErreur: boolean = $state(false);

	// TODO : mettre le 'ouvert' directement dans PopupControls, réactif et tout

	function jeVeuxFermer() {
		if (entree === memorisation) {
			ouvert = false;
		} else {
			entree = "Entrer le texte EXACT ici...";
			popupErreur = true;
		}
	}
</script>

<div
	style="width: fit-content; height: fit-content; display: inline-block;"
	class={ouvert ? "lui" : ""}
>
	{@render children()}
</div>

<Popup bind:ouvert={ouvert}>
	<h1>Info utile : {info}</h1>
	<p>
		Pour être sûr d'avoir bien compris, il faut recopier cette phrase : "{memorisation}"
	</p>
	<input
		style="caret-color: transparent;"
		bind:value={entree}
		onpaste={(e) => e.preventDefault()}
	/>
	<button onclick={jeVeuxFermer}>Fermer cette information utile</button>

	<Hidden>
		<button
			class="hidden"
			onclick={() => {
				entree = memorisation;
			}}>Remplir</button
		>
	</Hidden>
</Popup>

<PopupEnnuyeux bind:ouvert={popupErreur}>
	Il faut entrer correctement la phrase
</PopupEnnuyeux>

<style>
	.lui {
		outline: red solid 10px;
		position: relative;
		z-index: 1;
	}
</style>
