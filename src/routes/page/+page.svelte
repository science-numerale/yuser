<script lang="ts">
	import { page } from "$app/state";
    import { conj } from "../../components/francais.svelte";

	let param = page.url.searchParams.get("n"); // Malheureusement on doit utiliser les searchParams parceque les sites statiques ne permettent pas d'utiliser des paramètres dans les noms de pages...
	let nom = param ? `la page n°${param}` : "la page mystère";
</script>

{#if param == "666"}
	<h1>Repentez-vous, pêcheurs !!!</h1>
	<img
		src="https://jesusway4you.com/wp-content/uploads/2020/05/the_hell.jpg"
		alt=""
	/>
	<!-- On a les droits ? -->
	<!-- Quels droits ? -->
{:else}
	<h1>Bienvenue sur {nom}</h1>
	<p>
		Malheureusement, {nom} n'existe pas encore ! {conj("rechercher", "impératif", "affirmatif", true)}
		peut-être <a href={`https://duck.com?q=${nom}`}>cela</a>...
	</p>
{/if}
