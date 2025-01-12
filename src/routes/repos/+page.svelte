<script lang="ts">
	import Clavier from "./Clavier.svelte";
	import Humour from "./Humour.svelte";
	import Libre from "./Libre.svelte";
	import Patate from "./Patate.svelte";
	import Yenterprise from "./Yenterprise.svelte";
	import Jeu from "./Jeu.svelte";

	// TODO : Faire un peu plus proprement, jsp si une liste de composant c'est super...
	let elems = [Patate, Libre, Clavier, Yenterprise, Humour, Jeu];

	let SubPage = elems[Math.floor(Math.random() * elems.length)];
</script>

<SubPage />
