<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import triche from "../../states/triche.svelte";

	let divCool: HTMLDivElement = $state();
	let nombre = $state(1000);

	onMount(() => {
		let observer = new IntersectionObserver(() => {
			nombre += 1000;
		});
		observer.observe(divCool);
	});

	// Pas de code source car sinon le site ajoute "base"
	let pages = {
		Maison: "/",
		Connexion: "/connexion",
		"À propos": "/apropos",
		"Sélecteur de page": "/selecteur",
		"Repos (page zen)": "/repos",
		"Simulateur de trump": "/simulateur-trump",
	};

	let positions = {};
	for (const i of Object.keys(pages)) {
		positions[i] = Math.floor(Math.random() * 100);
	}
</script>

<svelte:head>
	<title>Sélecteur de page</title>
</svelte:head>

<input
	onkeydown={(e) => {
		e.preventDefault();
		alert("La recherche n'est pas encore disponible");
	}}
	value={"Rechercher ici..."}
/>

<nav>
	<ul>
		{#each Array(nombre) as _, i}
			{#each Object.entries(positions) as [page, pos]}
				{#if i === (triche().sélecteurOrdonné ? 0 : pos)}
					<li style="list-style: none;">
						<a href={base + pages[page]}>{page}</a>
					</li>
				{/if}
			{/each}
			<li>
				<a href={`${base}/page?n=${i}`}>Page n°{i}</a>
			</li>
		{/each}
	</ul>
</nav>
<div
	bind:this={divCool}
	style="position: absolute; bottom: 0; height: 1000dvh;"
></div>
