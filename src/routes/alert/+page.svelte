<script lang="ts">
	import { onMount } from "svelte";

	let nombre = $state(20);

	onMount(() => {
		alert("! VOUS AVEZ ÉTÉ INFECTÉ PAR LES MÉCHANTS !");
	});

	function AJOUTER() {
		nombre += 10;
	}
</script>

{#each Array(nombre).fill(null) as _}
	<h1
		style="position: absolute; top: calc({Math.random()}*100dvh);	left: calc({Math.random()}*100dvw); color: hsl({Math.random() *
			360},100%,50%);"
	>
		INFECTÉ
	</h1>
{/each}

<dialog open>
	<h1>VOTRE ORDINATEUR À ÉTÉ INFECTÉ !!!</h1>
	<button onclick={AJOUTER} class="bigredbutton">Réparer MAINTENANT !!!*</button
	>
</dialog>

<svelte:body />

<style>
	:global(*) {
		border: solid lime;
	}

	:global(body) {
		background: red;
	}

	.bigredbutton {
		background: red;
		border: lime;
		font-size: xx-large;
		animation: scaleUp 0.5s ease-out infinite;
	}
	dialog {
		animation: scaleUpDeux 3s ease-in-out infinite;
	}
	@keyframes scaleUp {
		0% {
			transform: scale(1); /* Initial scale */
		}
		100% {
			transform: scale(3); /* Final scale */
			margin-left: 20rem;
		}
	}
	@keyframes scaleUpDeux {
		0% {
			transform: scale(1) translateY(50dvh); /* Initial scale */
		}
		100% {
			transform: scale(2); /* Final scale */
			margin-left: 20rem;
		}
	}
</style>
