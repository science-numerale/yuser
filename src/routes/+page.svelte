<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import Bouton from "../composants/basiques/Bouton.svelte";
	import { conj } from "../composants/francais.svelte";
	import Popup from "../composants/Popup.svelte";
	import PopupEnnuyeux from "../composants/PopupEnnuyeux.svelte";
	import TestHumanite from "../composants/TestHumanite.svelte";
	let nePas = $state(true);
	let popup: boolean = $state(false);

	function étape1() {
		if (!nePas) {
			popup = true;
		}
	}
	function étape2() {
		popup = false;
		testHumain = true;
	}

	let testHumain = $state(false);
	let humain = $state(false);
	$effect(() => {
		if (humain) {
			testHumain = false;
			goto(base + "/experience");
		}
	});
</script>

<svelte:head>
	<title>Page principale</title>
</svelte:head>

<Bouton>
	{#if nePas}
		<span class="hidden">Ne pas</span>
	{/if}
	<span role="none" onclick={étape1}>démarrer</span> l'expérience !!!
</Bouton>

<p>
	Ce site est une suite du site <a href="https://userinyerface.com/">
		User Inyerface
	</a>
</p>

<p>
	{conj("pouvoir", "présent", "affirmatif", true)} y faire plein de chose ! Il est
	conseillé tout de même de se connecter pour débloquer des fonctionnalités supplémentaires.
	{conj("pouvoir", "présent", "affirmatif", true)} retrouver tout ça sur le
	<a href={`${base}/selecteur`}>séleteur de page</a>.
</p>

<div class="small">
	<Bouton
		clic={() => {
			nePas = !nePas;
		}}
		style="
		{nePas ? 'background: white;' : ''}
		color: grey;
		border: 'none'
	"
		>{#if nePas}✔{:else}<span style="color: white">✘</span>{/if}</Bouton
	>
	Afficher "ne pas"
</div>

<PopupEnnuyeux bind:ouvert={popup}>
	{conj("vouloir", "présent", "interrogatif", true, false).toString()}
	<span role="none" onclick={étape2} style="cursor: pointer;"> démarrer </span>
	l'expérience ?
	<Bouton
		clic={() =>
			alert(conj("avoir", "présent", "affirmatif", true) + " le choix")}
		>Pas sûr</Bouton
	>
	<Bouton
		clic={() =>
			alert(
				conj("avoir", "présent", "affirmatif", true) +
					" le temps qu'il vous faut",
			)}
	>
		Laissez du temps...
	</Bouton>
</PopupEnnuyeux>

<Popup bind:ouvert={testHumain}>
	<TestHumanite bind:validé={humain} />
</Popup>

<style>
	.hidden {
		color: gray;
	}
	.small {
		transform: scale(50%);
		transform-origin: left;
		opacity: 50%;
	}
</style>
