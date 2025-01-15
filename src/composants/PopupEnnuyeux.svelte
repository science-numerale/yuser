<script lang="ts">
	import type { Snippet } from "svelte";
	import Popup from "./Popup.svelte";
	import Bouton from "./basiques/Bouton.svelte";

	let {
		children,
		ouvert = $bindable(false),
	}: {
		children: Snippet;
		ouvert?: boolean;
	} = $props();

	let dialogueConfirmation = $state(false);
	$effect(() => {
		dialogueConfirmation = dialogueConfirmation && ouvert;
	});

	let timer = $state({ v: 0 });
	let beauTimer = $derived(timer.v.toFixed(2).toString()); // Sinon on a le bug du 0.1 + 0.2
	let fauxTimer = $derived((timer.v + 1).toFixed(2).toString());
	let intervale: number;
	let random: boolean = $state(false);

	function ouvirConfirmation() {
		random = Math.random() < 0.5;
		timer.v = 0;
		clearInterval(intervale);
		intervale = setInterval(() => {
			timer.v += 0.01;
		}, 10);

		dialogueConfirmation = true;
	}
</script>

<Popup bind:ouvert>
	{@render children()}
	<br />
	<Bouton clic={ouvirConfirmation} style="texte">
		<abbr title="Ne Pas Laisser Ce Popup Ouvert">NPLCPO</abbr>
	</Bouton>
</Popup>

<Popup bind:ouvert={dialogueConfirmation}>
	Êtes-vous sûr de vouloir fermer ce popup ainsi que celui sur lequel vous avez
	cliqué il y a {beauTimer} secondes
	{@render fauxBouton(random)}
	<Bouton
		clic={() => {
			ouvert = false;
		}}>Autant que {beauTimer} = {beauTimer}</Bouton
	>
	{@render fauxBouton(!random)}
</Popup>

{#snippet fauxBouton(affiché: boolean)}
	{#if affiché}
		<Bouton
			clic={() => {
				dialogueConfirmation = false;
			}}>Autant que {fauxTimer} = {beauTimer}</Bouton
		>
	{/if}
{/snippet}
