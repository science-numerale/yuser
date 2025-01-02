<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import PopupEnnuyeux from "../components/PopupEnnuyeux.svelte";

	let nePas = $state(true);
	let popup: boolean = $state(false);

	function confirmer() {
		if (!nePas) {
			popup = true;
		}
	}
	function toogle() {
		nePas = !nePas;
	}
	function demarrer() {
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
	Ce site est une suite du site <a href="https://userinyerface.com/"
		>User Inyerface</a
	>
</p>
<p>À faire :</p>
<ul>
	<li>Ajouter du CSS</li>
	<li>Définir le parcours utilisateur</li>
	<li>Créer les composants nécéssaires</li>
	<li>Assembler le tout</li>
</ul>

<p class="small">
	{#if nePas}
	<button onclick={toogle} style="
		background-color: white;
		border: 'none'
	">✔</button>
	{:else if !nePas}
	<button onclick={toogle} style="
		background-color: blue;
		border: 'none'
	"><span style="color: white">✘</span></button>
	{/if}
	Afficher "ne pas"
</p>


<PopupEnnuyeux bind:ouvert={popup}>
	Voulez-vous <span role="none" onclick={demarrer} style="cursor: pointer;">
		démarrer
	</span>
	l'expérience ?
	<button onclick={() => alert("Vous avez le choix")}>Pas sûr</button>
	<button onclick={() => alert("Vous avez le temps qu'il vous faut")}>
		Laissez moi du temps...
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
		font-size: small;
	}
</style>
