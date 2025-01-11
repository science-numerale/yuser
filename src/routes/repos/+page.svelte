<script lang="ts">
	import Patate from "./components/patate.svelte";
	import Liberté from "./components/liberté.svelte";
	import Clavier from "./components/clavier.svelte";

	let elems = [
		Patate,
		Liberté,
		Clavier,
	]

	let SubPage = elems[Math.floor(Math.random() * elems.length)];
</script>
<SubPage/>
