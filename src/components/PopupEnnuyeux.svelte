<script lang="ts">
import type { Snippet } from "svelte";
import Popup from "./Popup.svelte";
let { dialogue = $bindable(), children }: { dialogue: HTMLDialogElement | undefined, children: Snippet } = $props()

let dialogue_confirmation: HTMLDialogElement | undefined = $state()
let timer = $state({v:0})
let beau_timer = $derived(timer.v.toFixed(2).toString()) // Sinon on a le bug du 0.1 + 0.2
let faux_timer = $derived((timer.v + 1).toFixed(2).toString())
let intervale: number;
let random: { v: boolean } = $state({ v: false});

function je_veux_fermer() {
	random.v = Math.random() < 0.5
	dialogue_confirmation?.showModal()
	timer.v = 0
	clearInterval(intervale)
	intervale = setInterval(()=>{timer.v += 0.01}, 10)
}
function fermer() {
	dialogue_confirmation?.close()
}
function fermer_tout() {
	fermer()
	dialogue?.close()
}
</script>

<Popup bind:dialogue>
	{@render children()}
	<br>
	<button onclick={je_veux_fermer}><abbr title="Ne Pas Laisser Ce Popup Ouvert">NPLCPO</abbr></button>
</Popup>

<Popup bind:dialogue={dialogue_confirmation}>
	Êtes-vous sûr de vouloir fermer ce popup ainsi que celui sur lequel vous avez cliqué il y a {beau_timer} secondes
	{@render faux_bouton(random.v)}
	<button onclick={fermer_tout}>Autant que {beau_timer} = {beau_timer}</button>
	{@render faux_bouton(!random.v)}
</Popup>

{#snippet faux_bouton(affiché: boolean)}
	{#if affiché}
		<button onclick={fermer}>Autant que {faux_timer} = {beau_timer}</button>
	{/if}
{/snippet}
