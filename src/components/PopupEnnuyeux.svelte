<script lang="ts">
	import type { Snippet } from "svelte";
	import Popup from "./Popup.svelte";
	import type { PopupControls } from "./Popup";

	let {
		children,
		popup = $bindable(),
	}: { children: Snippet; popup: PopupControls } = $props();

	let dialogue: PopupControls = $state();
	let dialogue_confirmation: PopupControls = $state();
	let timer = $state({ v: 0 });
	let beau_timer = $derived(timer.v.toFixed(2).toString()); // Sinon on a le bug du 0.1 + 0.2
	let faux_timer = $derived((timer.v + 1).toFixed(2).toString());
	let intervale: number;
	let random: { v: boolean } = $state({ v: false });

	function je_veux_fermer() {
		random.v = Math.random() < 0.5;
		timer.v = 0;
		clearInterval(intervale);
		intervale = setInterval(() => {
			timer.v += 0.01;
		}, 10);

		dialogue_confirmation.ouvrir();
	}
	function fermer() {
		dialogue_confirmation.fermer();
	}
	function fermer_tout() {
		popup.fermer()
	}

	popup = {
		async ouvrir() {
			dialogue.ouvrir();
		},
		fermer() {
			dialogue_confirmation.fermer();
			dialogue.fermer();
		},
	};
</script>

<Popup bind:popup={dialogue}>
	{@render children()}
	<br />
	<span onclick={je_veux_fermer}
		><abbr title="Ne Pas Laisser Ce Popup Ouvert">NPLCPO</abbr></span
	>
</Popup>

<Popup bind:popup={dialogue_confirmation}>
	Êtes-vous sûr de vouloir fermer ce popup ainsi que celui sur lequel vous avez
	cliqué il y a {beau_timer} secondes
	{@render faux_bouton(random.v)}
	<button onclick={fermer_tout}>Autant que {beau_timer} = {beau_timer}</button>
	{@render faux_bouton(!random.v)}
</Popup>

{#snippet faux_bouton(affiché: boolean)}
	{#if affiché}
		<button onclick={fermer}>Autant que {faux_timer} = {beau_timer}</button>
	{/if}
{/snippet}
