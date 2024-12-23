<script lang="ts">
	import { onMount } from "svelte";
	import TutoPopup from "../../components/TutoPopup.svelte";
	import type { PopupControls } from "../../components/Popup";

	let tuto1: PopupControls;
	let tuto2: PopupControls;
	let tuto3: PopupControls;

	let faits = [
		"Il existe un certain nombre de crêpes cuisinées à certaines période de l'année dans certaines régions du globe",
		"Chaque jour, au moins treize touches de clavier sont frapées sans but lucratif",
	];

	onMount(() => {
		tuto1.ouvrir().then(() => tuto2.ouvrir().then(() => tuto3.ouvrir()));
	});
</script>

<TutoPopup
	bind:popup={tuto1}
	info="Ce bouton est cliquable"
	memorisation="Je peux cliquer sur le bouton auquel le popup fait référence, c'est à dire celui dont l'encadrement est rouge"
>
	<button onclick={() => alert(faits[Math.floor(Math.random() * faits.length)])}
		>Obtenir une information inutile</button
	>
</TutoPopup>

<TutoPopup
	bind:popup={tuto2}
	info="Ce bouton est cliquable"
	memorisation="Je peux cliquer sur le bouton auquel le popup fait référence, c'est à dire celui dont l'encadrement est rouge, et qui n'affiche pas le nombre {Math.random().toString()}"
>
	<button onclick={() => alert("En rien pour le moment")}
		>Savoir en quoi consiste l'expérience</button
	>
</TutoPopup>

<TutoPopup
	bind:popup={tuto3}
	info="Ce bouton n'est pas cliquable"
	memorisation="Je comprends que les dévelopeurs n'aient pas eu le temps de coder cette fonctionnalité"
>
	<button disabled style="cursor: wait;"
		>Désactiver les informations utiles</button
	>
</TutoPopup>
