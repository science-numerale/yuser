<script lang="ts">
	import "../app.css";
	import { page } from "$app/state";
	import { base } from "$app/paths";
	import Triche from "../components/Triche.svelte";
	import { conj } from "../components/francais.svelte";

	let { children } = $props();
	let sélecteur = `${base}/selecteur`;
</script>

<div class="app">
	<Triche />
	<header>
		<h1>Yuser</h1>
		<ul>
			<li>
				<a
					aria-current={page.url.pathname === sélecteur ? "page" : undefined}
					href={sélecteur}
				>
					Sélecteur de page
				</a>
			</li>
			<li>
				<a
					aria-current={page.url.pathname === sélecteur ? "page" : undefined}
					href={page.url.href}
					onclick={() =>
						alert(
							conj("devoir", "présent", "affirmatif", true) +
								" aller sur le sélecteur de page",
						)}
				>
					Autres pages
				</a>
			</li>
		</ul>
	</header>
	<!-- Absence volontaire des autres pages : l'utilisateur doit utiliser le sélecteur de page -->

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			Pied de page{#if Math.random() < 0.01}
				très rare{/if}
		</p>
	</footer>
</div>

<style>
	main,
	footer {
		margin: 1rem;
	}

	h1 {
		margin: 1rem;
	}

	header {
		background: #006600;
		color: white;
		overflow: hidden;
		padding: 1rem;
	}
	ul {
		display: flex;
		list-style-type: none;
		padding: 0;
	}

	li {
		float: left;
	}

	li > * {
		color: white;
		text-align: center;
		padding: 0.5rem 1rem;
		text-decoration: none;
	}
	li > *:hover {
		background: var(--hover-accent-color-1);
	}
</style>
