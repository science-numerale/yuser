<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { formuler } from "../components/conjugaison.svelte";
	import PopupEnnuyeux from "../components/PopupEnnuyeux.svelte";
	import personnalisation from "../states/personnalisation.svelte";

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
	<span role="none" onclick={confirmer}>démarer</span> l'expérience !!!
</button>

<p>
	Ce site est une suite du site <a href="https://userinyerface.com/">
		User Inyerface
	</a>
</p>

<p>
	{formuler("pouvoir", personnalisation, true)} y faire plein de chose ! Il est conseillé
	tout de même de se connecter pour débloquer des fonctionnalités supplémentaires.
	{formuler("pouvoir", personnalisation, true)} retrouver tout ça sur le
	<a href={`${base}/selecteur`}>séleteur de page</a>.
</p>

<span class="small"
	><input type="checkbox" bind:checked={nePas} />Afficher "ne pas"</span
>

<PopupEnnuyeux bind:ouvert={popup}>
	Voulez-vous <span role="none" onclick={démarrer} style="cursor: pointer;">
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
	input {
		transform: scale(0.5);
	}
</style>
