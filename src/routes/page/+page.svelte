<script lang="ts">
	import { page } from "$app/state";

	let nom = `la page n°${page.url.searchParams.get("n")}`
</script>

<h1>Bienvenue sur {nom}</h1>
<p>Malheureusement, {nom} n'existe pas encore</p>
