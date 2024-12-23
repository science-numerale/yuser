<script lang="ts">
	import type { Snippet } from "svelte";
	import type { PopupControls } from "./Popup.ts";

	let {
		children,
		popup = $bindable(),
	}: {
		children: Snippet;
		popup: PopupControls;
	} = $props();

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			event.preventDefault(); // Prevent the default action (closing the dialog)
		}
	}

	let dialogue: HTMLDialogElement | undefined = $state();

	popup = {
		async ouvrir() {
			dialogue.showModal();
			return new Promise((resolve) => {
				dialogue.addEventListener("close", () => resolve());
			});
		},
		fermer() {
			dialogue.close();
		},
	};
</script>

<dialog bind:this={dialogue} onkeydowncapture={handleKeydown}>
	{@render children()}
</dialog>
