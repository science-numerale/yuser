<script lang="ts">
	import type { Snippet } from "svelte";
	import Cache from "../../composants/Cache.svelte";
	import Popup from "../../composants/Popup.svelte";
	import PopupEnnuyeux from "../../composants/PopupEnnuyeux.svelte";
	import Bouton from "../../composants/basiques/Bouton.svelte";

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
	let popupErreur: boolean = $state(false);

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

<Popup bind:ouvert>
	<h1>Info utile : {info}</h1>
	<p>
		Pour être sûr d'avoir bien compris, il faut recopier cette phrase : "{memorisation}"
	</p>
	<input
		style="caret-color: transparent;"
		bind:value={entree}
		onpaste={(e) => e.preventDefault()}
	/>
	<Bouton clic={jeVeuxFermer}>Fermer cette information utile</Bouton>

	<Cache>
		<Bouton
			clic={() => {
				entree = memorisation;
			}}
		>
			Remplir
		</Bouton>
	</Cache>
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
