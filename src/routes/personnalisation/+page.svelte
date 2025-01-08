<script>
	import { conj } from "../../composants/francais.svelte";
	import personnalisation from "../../states/personnalisation.svelte";
</script>

<svelte:head>
	<title>Personnalisation</title>
</svelte:head>

<p>
	Attention ! Ceci est une page de test !
</p>
<p>
	Pouvoir : {conj("pouvoir")}
</p>

<span>Type (1 | 2 | 3) :</span>
<input
	type="number"
	min="1"
	max="3"
	step="1"
	bind:value={personnalisation.type}
/><br />
<span>Niveau de respect :</span>
<input type="number" step="1" bind:value={personnalisation.respect} /><br />
<span>Nombre :</span>
<input type="number" min="0" step="1" bind:value={personnalisation.nombre} /><br
/>
<span>Genre :</span>
<select bind:value={personnalisation.genre}>
	<option>f</option>
	<option>i</option>
	<option>m</option>
</select>
