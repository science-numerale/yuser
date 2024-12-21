<script lang="ts">
  import type { Snippet } from "svelte";
	import type { PopupControls } from "./Popup";
	import Popup from "./Popup.svelte";
	import PopupEnnuyeux from "./PopupEnnuyeux.svelte";

	let {
		children,
		popup = $bindable(),
		info,
		memorisation,
	}: {
		children: Snippet
		popup: PopupControls;
		info: String;
		memorisation: String;
	} = $props();

	let entree = $state("Entrez le texte ici...");
	let popup_erreur: PopupControls = $state();

	function je_veux_fermer() {
		if (entree === memorisation) {
			popup.fermer();
		} else {
			entree = "Entrez le texte EXACT ici..."
			popup_erreur.ouvrir()
		}
	}
</script>


<div style="width: fit-content; height: fit-content; display: inline-block;" class={true ? "lui" : ""}>
	{@render children()}
</div>
<style>
.lui {
	outline: red solid 10px;
}
</style>

<Popup bind:popup>
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
</Popup>

<PopupEnnuyeux bind:popup={popup_erreur}>
	Veuillez entrer correctement la phrase
</PopupEnnuyeux>
