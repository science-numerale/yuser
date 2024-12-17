<script lang="ts">
import { goto } from "$app/navigation";

let ne_pas = $state(true)

function demarer() {
	if (!ne_pas) {
		goto("/experience")
	}
}
</script>

<svelte:head>
	<title>Page principale</title>
</svelte:head>

<button class="fake-but">
	{#if ne_pas} <span class="hidden">Ne pas</span> {/if}
	<span role="none" onclick={demarer}>démarer</span> l'expérience !!!
</button>

<p>
	Ce site est une suite du site <a href="https://userinyerface.com/">User Inyerface</a>
</p>

<p>
	À faire :
</p>
<ul>
	<li>Ajouter du CSS</li>
	<li>Définir le parcours utilisateur</li>
	<li>Créer les composants nécéssaires</li>
	<li>Assembler le tout</li>
</ul>

<span class="small"><input type="checkbox" bind:checked={ne_pas}>Afficher "ne pas"</span>

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
