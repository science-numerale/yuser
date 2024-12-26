<script lang="ts">
	import triche from "../states/triche.svelte";

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
				triche.active = !triche.active;
				position = 0;
			}
		} else {
			position = 0;
		}
	}

	$effect(() => {
		if (triche.active) {
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
		<li>
			<input type="checkbox" bind:checked={triche.pasDeTutoriels} /> Pas de tutoriels
		</li>
	</ul>
</dialog>

<style>
	.cheat {
		position: fixed;
		bottom: 0;
		z-index: 99999;
	}
</style>
