<script lang="ts">
	import { onMount } from "svelte";

	let d1: HTMLDialogElement;
	let d2: HTMLDialogElement;

	onMount(() => {
		d1.show();
		d2.showModal()
	});
</script>

<dialog style="width: 50dvw; z-index: 9999; position: fixed;" bind:this={d1}>D1 <button>test</button></dialog>
<dialog style="height: 50dvh; z-index: 0;" bind:this={d2}>D2 <button>test</button></dialog>
