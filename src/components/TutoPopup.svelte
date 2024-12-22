<script lang="ts">
	import type { Snippet } from "svelte";
	import type { PopupControls } from "./Popup";
	import Popup from "./Popup.svelte";
	import PopupEnnuyeux from "./PopupEnnuyeux.svelte";
    import Hidden from "./Hidden.svelte";

	let {
		children,
		popup = $bindable(),
		info,
		memorisation,
	}: {
		children: Snippet;
		popup: PopupControls;
		info: string;
		memorisation: string;
	} = $props();

	let entree = $state("Entrez le texte ici...");
	// Varier son vocabulaire !
	let infobulle: PopupControls = $state();
	let popup_erreur: PopupControls = $state();

	// TODO : mettre le 'ouvert' directement dans PopupControls, réactif et tout
	let ouvert = $state(false);

	function je_veux_fermer() {
		if (entree === memorisation) {
			popup.fermer();
		} else {
			entree = "Entrez le texte EXACT ici...";
			popup_erreur.ouvrir();
		}
	}

	popup = {
		async ouvrir() {
			ouvert = true;
			entree = "Entrez le texte ici...";
			await infobulle.ouvrir();
		},
		fermer() {
			ouvert = false;
			popup_erreur.fermer();
			infobulle.fermer();
		},
	};
</script>

<div
	style="width: fit-content; height: fit-content; display: inline-block;"
	class={ouvert ? "lui" : ""}
>
	{@render children()}
</div>

<Popup bind:popup={infobulle}>
	<h1>Info utile : {info}</h1>
	<p>
		Pour être sûr d'avoir bien compris, veuillez recopier cette phrase : "{memorisation}"
	</p>
	<input
		style="caret-color: transparent;"
		bind:value={entree}
		onpaste={(e) => e.preventDefault()}
	/>
	<button onclick={je_veux_fermer}>Fermer cette information utile</button>

	<Hidden>
		<button class="hidden" onclick={()=>{entree = memorisation}}>Remplir</button>
	</Hidden>
</Popup>

<PopupEnnuyeux bind:popup={popup_erreur}>
	Veuillez entrer correctement la phrase
</PopupEnnuyeux>

<style>
	.lui {
		outline: red solid 10px;
		z-index: 10;
		position: relative;
	}
</style>
