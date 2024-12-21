<script lang="ts">
	import { goto } from "$app/navigation";
    import type { PopupControls } from "../components/Popup";
	import Popup from "../components/Popup.svelte";
	import PopupEnnuyeux from "../components/PopupEnnuyeux.svelte";

	let ne_pas = $state(true);
	let popup: PopupControls = $state();

	function confirmer() {
		if (!ne_pas) {
			popup.ouvrir()
		}
	}
	function demarer() {
		popup.fermer()
		goto("/experience");
	}
</script>

<svelte:head>
	<title>Page principale</title>
</svelte:head>

<button class="fake-but">
	{#if ne_pas}
		<span class="hidden">Ne pas</span>
	{/if}
	<span role="none" onclick={confirmer}>démarer</span> l'expérience !!!
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
<span class="small"
	><input type="checkbox" bind:checked={ne_pas} />Afficher "ne pas"</span
>

<PopupEnnuyeux bind:popup>
	Voulez-vous <span role="none" onclick={demarer} style="cursor: pointer;">démarer</span> l'absence
	d'expérience ?
	<button onclick={() => popup.fermer()}>Oui</button>
	<button onclick={() => popup.fermer()}>Bien sûr</button>
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
