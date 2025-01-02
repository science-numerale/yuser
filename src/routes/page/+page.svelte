<script lang="ts">
	import { page } from "$app/state";
    import { redirect } from "@sveltejs/kit";

	let param = page.url.searchParams.get("n"); // Malheureusement on doit utiliser les searchParams parceque les sites statiques ne permettent pas d'utiliser des paramètres dans les noms de pages...
	let nom = param ? `la page n°${param}` : "la page mystère";
</script>

{#if param == "666"}
<h1>Repentez-vous, pêcheurs !</h1>
<img src="https://jesusway4you.com/wp-content/uploads/2020/05/the_hell.jpg" alt="">
{:else}
	<h1>Bienvenue sur {nom}</h1>
	<p>Malheureusement, {nom} n'existe pas encore</p>
{/if}
