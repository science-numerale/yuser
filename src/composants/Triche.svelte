<script lang="ts">
	import { _tricheStockée } from "../states/triche.svelte";

	let dialogue: HTMLDialogElement;
	let position = 0;
	let touches = [
		"ArrowUp",
		"ArrowUp",
		"ArrowDown",
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowLeft",
		"ArrowRight",
		"b",
		"a",
	];

	function intercepter(e: KeyboardEvent) {
		if (e.key === touches[position]) {
			position++;

			if (position === touches.length) {
				_tricheStockée.activée = !_tricheStockée.activée;
				position = 0;
			}
		} else {
			position = 0;
		}
	}

	$effect(() => {
		if (_tricheStockée.activée) {
			dialogue.show();
		} else {
			dialogue.close();
		}
	});
</script>

<svelte:window onkeydown={intercepter} />

<dialog class="cheat" bind:this={dialogue}>
	Mode triche activé !!!
	<ul>
		<input type="checkbox" bind:checked={_tricheStockée.pasDeTutoriels} />
		Pas de tutoriels
		<input type="checkbox" bind:checked={_tricheStockée.pasDeCaptchas} />
		Pas de captchas
		<input type="checkbox" bind:checked={_tricheStockée.pasDeDelais} />
		Pas de delais
		<input type="checkbox" bind:checked={_tricheStockée.boutonsCachés} />
		Boutons cachés
		<input type="checkbox" bind:checked={_tricheStockée.sélecteurOrdonné} />
		Sélecteur ordonné
	</ul>
</dialog>

<style>
	.cheat {
		position: fixed;
		bottom: 0;
		z-index: 99999;
	}
</style>
