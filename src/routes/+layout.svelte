<script lang="ts">
	import "../app.css";
	import { page } from "$app/state";
	import { base } from "$app/paths";
	import Triche from "../components/Triche.svelte";

	let { children } = $props();
	let selecteur = `${base}/selecteur`;
</script>

<div class="app">
	<Triche />
	<div style="margin: 1rem;">
		<a
			aria-current={page.url.pathname === selecteur ? "page" : undefined}
			href={selecteur}>Sélecteur de page</a
		>
	</div>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			Pied de page {#if Math.random() < 0.01}très rare{/if}
		</p>
	</footer>
</div>
