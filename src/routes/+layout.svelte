<script lang="ts">
	import "../app.css";
	import { page } from "$app/state";
	import { base } from "$app/paths";
	import Triche from "../composants/Triche.svelte";
	import { conj } from "../composants/francais.svelte";
	import { attentes } from "../states/attente.svelte";
	import Attente from "../composants/Attente.svelte";
	import Bouton from "../composants/basiques/Bouton.svelte";
    import { goto } from "$app/navigation";

	let { children } = $props();
	let sélecteur = `${base}/selecteur`;
</script>

<div class="app">
	<Triche />
	<header>
		<h1>
			Yuser <a
				style="margin-left: 1rem;"
				href="https://github.com/science-numerale/yuser"
				target="_blank"
				><img
					height="20"
					alt="Logo de GitHub"
					src="{base}/github-mark-white.svg"
				/></a
			>
		</h1>
		<ul>
			<li>
				<Bouton
					clic={() => goto(sélecteur)}
					style="texte"
				>
					<span class="lien">Sélecteur de pages</span>
				</Bouton>
			</li>
			<li>
				<Bouton
					clic={() =>
						alert(
							conj("devoir", "présent", "affirmatif", true) +
								" aller sur le sélecteur de page",
						)}
					style="texte"
				>
					<span class="lien">Autres pages</span>
				</Bouton>
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

	{#if attentes.n > 0}
		<Attente />
	{/if}
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

	.lien {
		color: white;
		text-align: center;
		padding: 0.5rem 1rem;
		text-decoration: none;
	}
	.lien:hover {
		background: var(--hover-accent-color-1);
	}
</style>
