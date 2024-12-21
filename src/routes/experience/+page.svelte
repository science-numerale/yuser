<script lang="ts">
	import { onMount } from "svelte";
	import TutoPopup from "../../components/TutoPopup.svelte";
	import type { PopupControls } from "../../components/Popup";

	let tuto1: PopupControls;

	onMount(() => tuto1.ouvrir());
</script>

<button onclick={() => tuto1.ouvrir()}>Afficher</button>
<TutoPopup bind:popup={tuto1} info="Ce bouton est cliquable" memorisation="Je peux cliquer sur le bouton auquel le popup fait référence, c'est à dire celui dont l'encadrement est rouge">
	<h1>Bonjour 1</h1>
</TutoPopup>
