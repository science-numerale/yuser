<script lang="ts">
	import { onMount } from "svelte";
	import Popup from "../../components/Popup.svelte";

	let nombre = $state(20);
	let erreur = $state(true);

	onMount(() => {
		alert(
			"! FLASH DE LUMIÈRE IMMINANTS ! (cette page est une blague au passage)",
		);
		erreur = true;
	});

	function CLIC() {
		document.documentElement.requestFullscreen();
		nombre += 10;
	}

	$effect(() => {
		if (!erreur) {
			setTimeout(() => {
				erreur = true;
			}, Math.random() * 10000);
		}
	});
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
	<h1>//chantier\\ ORDINATEUR À ÉTÉ INFECTÉ !!!</h1>
	<p>Appeler le <code>08 90 10 10 00</code></p>
	<button onclick={CLIC} class="bigredbutton">Réparer MAINTENANT !!!*</button>
	<br />
	<small>
		*nous nous réservons le droit de faire le bien par quelque moyen jugé
		adéquat par notre chef qualité. En échange, nous vous offrons la
		responsabilité de vos données.
	</small><br />
</dialog>

<Popup bind:ouvert={erreur}
	>Erreur <button
		onclick={() => {
			erreur = false;
			CLIC();
		}}>Ok</button
	></Popup
>

<style>
	/*:global(*) {*/
	/*	border: solid lime;*/
	/*}*/
	/*:global(body) {*/
	/*	background: red;*/
	/*}*/
	/*Ce code provoque des bugs*/

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
		50% {
			transform: scale(2); /* Final scale */
			margin-left: 20rem;
		}
		100% {
			transform: scale(1) translateY(50dvh); /* Initial scale */
		}
	}
</style>
