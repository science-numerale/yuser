<script lang="ts">
	import Patate from "./components/patate.svelte";
	import Liberté from "./components/liberté.svelte";
	import Clavier from "./components/clavier.svelte";
	import Yenterprise from "./components/yenterprise.svelte";
	import Humour from "./components/humour.svelte";

	let elems = [
		Patate,
		Liberté,
		Clavier,
		Yenterprise,
		Humour
	]

	let SubPage = elems[Math.floor(Math.random() * elems.length)];
</script>
<SubPage/>
