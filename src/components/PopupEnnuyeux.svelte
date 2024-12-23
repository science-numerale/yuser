<script lang="ts">
	import type { Snippet } from "svelte";
	import Popup from "./Popup.svelte";
	import type { PopupControls } from "./Popup";

	let {
		children,
		popup = $bindable(),
	}: { children: Snippet; popup: PopupControls } = $props();

	let dialogue: PopupControls = $state();
	let dialogueConfirmation: PopupControls = $state();
	let timer = $state({ v: 0 });
	let beauTimer = $derived(timer.v.toFixed(2).toString()); // Sinon on a le bug du 0.1 + 0.2
	let fauxTimer = $derived((timer.v + 1).toFixed(2).toString());
	let intervale: number;
	let random: { v: boolean } = $state({ v: false });

	function jeVeuxFermer() {
		random.v = Math.random() < 0.5;
		timer.v = 0;
		clearInterval(intervale);
		intervale = setInterval(() => {
			timer.v += 0.01;
		}, 10);

		dialogueConfirmation.ouvrir();
	}
	function fermer() {
		dialogueConfirmation.fermer();
	}

	// TODO : wtf c'est quoi ça en bas
	function fermerTout() {
		popup.fermer();
	}

	popup = {
		async ouvrir() {
			dialogue.ouvrir();
		},
		fermer() {
			dialogueConfirmation.fermer();
			dialogue.fermer();
		},
	};
</script>

<Popup bind:popup={dialogue}>
	{@render children()}
	<br />
	<span onclick={jeVeuxFermer}
		><abbr title="Ne Pas Laisser Ce Popup Ouvert">NPLCPO</abbr></span
	>
</Popup>

<Popup bind:popup={dialogueConfirmation}>
	Êtes-vous sûr de vouloir fermer ce popup ainsi que celui sur lequel vous avez
	cliqué il y a {beauTimer} secondes
	{@render fauxBouton(random.v)}
	<button onclick={fermerTout}>Autant que {beauTimer} = {beauTimer}</button>
	{@render fauxBouton(!random.v)}
</Popup>

{#snippet fauxBouton(affiché: boolean)}
	{#if affiché}
		<button onclick={fermer}>Autant que {fauxTimer} = {beauTimer}</button>
	{/if}
{/snippet}
