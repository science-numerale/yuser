<script lang="ts">
	import { base } from "$app/paths";
import { onMount } from "svelte";

	let divCool: HTMLDivElement = $state();
	let nombre = $state(100);

	onMount(() => {
		let observer = new IntersectionObserver(() => {
			nombre += 300;
		});
		observer.observe(divCool);
	});

	let maison = Math.floor(Math.random()*200)
</script>

<nav>
	<ul>
		{#each Array(nombre).fill(null) as _, n}
			<li>
				<a href={`${base}/page${n}`}>Page n°{n}</a>
			</li>
			{#if n===maison}
				<li>
					<a href={`${base}/`}>Maison</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
<div bind:this={divCool}
	style="position: absolute; bottom: 0; height: 100dvh; width: 100%;"
></div>
