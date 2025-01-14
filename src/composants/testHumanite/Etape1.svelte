<script lang="ts">
	import { conj } from "../francais.svelte";

	let {
		validé = $bindable(),
	}: {
		validé: boolean;
	} = $props();

	let c = $state("Une gouttière");

	$effect(() => {
		validé = c === "Un humain";
	});
</script>

<h1>Qui {conj("être", "présent", "interrogatif")} ?</h1>
<select bind:value={c}>
	<!-- TODO : Ajouter OrdreAleatoire -->
	<option>Un poisson rouge</option>
	<option>Un Hurluberlu</option>
	<option>L'aquarium du poisson rouge</option>
	<option>Un tableau blanc</option>
	<option>Une gouttière</option>
	<option>Une montre</option>
	<option>Un pull</option>
	<option>Une idée</option>
	<option>Une toiture</option>
	<option>Un poteau</option>
	<option>Un humain</option>
	<option>Une patate</option>
	<option>Un captcha</option>
</select>
