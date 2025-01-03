<script>
	import { formuler } from "../../components/conjugaison.svelte";
	import personnalisation from "../../states/personnalisation.svelte";
</script>

{formuler("pouvoir")}
<br>
<input type="number" bind:value={personnalisation.type}>
<input type="number" bind:value={personnalisation.respect}>
<input type="number" bind:value={personnalisation.nombre}>
<select bind:value={personnalisation.genre}>
	<option>f</option>
	<option>i</option>
	<option>m</option>
</select>
