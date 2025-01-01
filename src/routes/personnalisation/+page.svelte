<script>
	import { formuler, obtPersonne, obtPronom } from "../../components/conjugaison.svelte";
	import personnalisation from "../../states/personnalisation.svelte";
</script>

{JSON.stringify(obtPersonne(personnalisation))}
{formuler("pouvoir", personnalisation)}
<br>
<input type="number" bind:value={personnalisation.type}>
<input type="number" bind:value={personnalisation.respect}>
<input type="number" bind:value={personnalisation.nombre}>
<select bind:value={personnalisation.genre}>
	<option>f</option>
	<option>i</option>
	<option>m</option>
</select>
