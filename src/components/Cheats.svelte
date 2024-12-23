<script lang="ts">
	import cheats from "../states/cheats.svelte";

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
				cheats.enabled = !cheats.enabled;
				position = 0;
			}
		} else {
			position = 0;
		}
	}

	$effect(() => {
		if (cheats.enabled) {
			dialogue.show();
		} else {
			dialogue.close();
		}
	});
</script>

<svelte:window onkeydown={intercepter} />

<dialog class="cheat" bind:this={dialogue}>
	Cheat activés !!!
	<ul>
		<li>
			<input type="checkbox" bind:checked={cheats.pasDeTutoriels} /> Pas de tutoriels
		</li>
	</ul>
</dialog>

<style>
	.cheat {
		position: absolute;
		bottom: 0;
	}
</style>
