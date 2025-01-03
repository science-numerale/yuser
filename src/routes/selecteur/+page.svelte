<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";

	let divCool: HTMLDivElement = $state();
	let nombre = $state(1000);

	onMount(() => {
		let observer = new IntersectionObserver(() => {
			nombre += 1000;
		});
		observer.observe(divCool);
	});

	let maison = Math.floor(Math.random() * 200);
	let pages = {
		"Maison": "/",
		"Connexion": "/connexion"
	}

	let positions = {};
	for (const i of Object.keys(pages)) {
		positions[i] = Math.floor(Math.random() * 200);
	}
</script>

<nav>
	<ul>
		{#each Array(nombre) as _, i}
			<li>
				<a href={`${base}/page?n=${i}`}>Page n°{i}</a>
			</li>
			{#each Object.entries(positions) as [page, pos]}
				{#if i === pos}
					<li>
						<a href={base + pages[page]}>{page}</a>
					</li>
				{/if}
			{/each}
		{/each}
	</ul>
</nav>
<div
	bind:this={divCool}
	style="position: absolute; bottom: 0; height: 1000dvh; width: 100%;"
></div>
