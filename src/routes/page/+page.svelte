<script lang="ts">
	import { page } from "$app/state";

	let param = page.url.searchParams.get("n")
	let nom = param ? `la page n°${param}` : "la page mystère"
</script>

<h1>Bienvenue sur {nom}</h1>
<p>Malheureusement, {nom} n'existe pas encore</p>
