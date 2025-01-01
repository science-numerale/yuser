<script lang="ts">
	import { page } from "$app/state";

	let param = page.url.searchParams.get("n"); // Malheureusement on doit utiliser les searchParams parceque les sites statiques ne permettent pas d'utiliser des paramètres dans les noms de pages...
	let nom = param ? `la page n°${param}` : "la page mystère";
</script>

<h1>Bienvenue sur {nom}</h1>
<p>
	Malheureusement, {nom} n'existe pas encore Peut-être recherchiez-vous
	<a href={`https://duck.com?q=${nom}`}>cela</a>...
</p>
