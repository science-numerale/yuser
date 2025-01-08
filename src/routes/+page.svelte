<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { conj } from "../composants/francais.svelte";
	import PopupEnnuyeux from "../composants/PopupEnnuyeux.svelte";
	let nePas = $state(true);
	let popup: boolean = $state(false);

	function confirmer() {
		if (!nePas) {
			popup = true;
		}
	}
	function démarrer() {
		popup = false;
		goto(base + "/experience");
	}
</script>

<svelte:head>
	<title>Page principale</title>
</svelte:head>

<button class="fake-but">
	{#if nePas}
		<span class="hidden">Ne pas</span>
	{/if}
	<span role="none" onclick={confirmer}>démarrer</span> l'expérience !!!
</button>

<p>
	Ce site est une suite du site <a href="https://userinyerface.com/">
		User Inyerface
	</a>
</p>

<p>
	{conj("pouvoir", "présent", "affirmatif", true)} y faire plein de chose ! Il est conseillé tout de même de se connecter pour 
	débloquer des fonctionnalités supplémentaires. {conj("pouvoir", "présent", "affirmatif", true)} retrouver tout ça sur le
	<a href={`${base}/selecteur`}>séleteur de page</a>.
</p>

<div class="small">
	<button
		onclick={() => {
			nePas = !nePas;
		}}
		style="
		{nePas ? 'background: white;' : ''}
		color: grey;
		border: 'none'
	"
		>{#if nePas}✔{:else}<span style="color: white">✘</span>{/if}</button
	>
	Afficher "ne pas"
</div>

<PopupEnnuyeux bind:ouvert={popup}>
	{conj("vouloir", "présent", "interrogatif", true, false).toString()} <span role="none" onclick={démarrer} style="cursor: pointer;">
		démarrer
	</span>
	l'expérience ?
	<button onclick={() => alert(conj("avoir", "présent", "affirmatif", true)+" le choix")}>Pas sûr</button>
	<button onclick={() => alert(conj("avoir", "présent", "affirmatif", true)+" le temps qu'il vous faut")}>
		Laissez  du temps...
	</button>
</PopupEnnuyeux>

<style>
	.fake-but {
		cursor: pointer;
	}
	.hidden {
		color: gray;
	}
	.small {
		transform: scale(50%);
		transform-origin: left;
		opacity: 50%;
	}
</style>
