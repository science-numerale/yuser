<script lang="ts">
	import "../app.css";
	import { page } from "$app/state";
	import { base } from "$app/paths";
	import Triche from "../components/Triche.svelte";

	let { children } = $props();
	let sélecteur = `${base}/selecteur`;
	let connexion = `${base}/connexion`;
	let apropos = `${base}/apropos`;
</script>

<div class="app">
	<Triche />
	<header>
		<h1>Yuser</h1>
		<ul>
			<li><a
				aria-current={page.url.pathname === sélecteur ? "page" : undefined}
				href={sélecteur}>Sélecteur de page
			</a></li>
			<li><a
				aria-current={page.url.pathname === connexion ? "page" : undefined}
				href={connexion}>Connexion
			</a></li>
			<li><a
				aria-current={page.url.pathname === apropos ? "page" : undefined}
				href={apropos}>A propos
			</a></li>
		</ul>
			
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			Pied de page{#if Math.random() < 0.01} très rare{/if}
		</p>
	</footer>
</div>

<style>
	h1 {
		color: white;
		background-color: green;
		padding: 2%;
		padding-bottom: 0.5%;
		margin: 0;
	}
	ul {
		list-style-type: none;
  		margin: 0;
  		padding: 0;
  		overflow: hidden;
  		background-color: green;
	}

	li {
  		float: left;
	}

	li a {
  		display: block;
  		color: white;
  		text-align: center;
  		padding: 15px;
  		text-decoration: none;
	}
	li a:hover {
		background-color: rgb(43, 43, 43);
	}
</style>
