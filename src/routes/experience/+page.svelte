<script lang="ts">
	import { onMount } from "svelte";
	import TutoPopup from "../../components/TutoPopup.svelte";

	let tuto1: boolean = $state(false);
	let tuto2: boolean = $state(false);
	let tuto3: boolean = $state(false);

	let faits = [
		"Il existe un certain nombre de crêpes cuisinées à certaines période de l'année dans certaines régions du globe",
		"Chaque jour, au moins treize touches de clavier sont frappées sans but lucratif",
	];

	onMount(() => {
		tuto1 = true;
	});

	// TODO : Faire ça plus proprement
	$effect(() => {
		tuto2 = !tuto1;
	});
	$effect(() => {
		tuto3 = !tuto1 && !tuto2;
	});
</script>

<TutoPopup
	bind:ouvert={tuto1}
	info="Ce bouton est cliquable"
	memorisation="Je peux cliquer sur le bouton auquel le popup fait référence, c'est-à-dire celui dont l'encadrement est rouge"
>
	<button
		onclick={() => alert(faits[Math.floor(Math.random() * faits.length)])}
	>
		Obtenir une information inutile
	</button>
</TutoPopup>

<TutoPopup
	bind:ouvert={tuto2}
	info="Ce bouton est cliquable"
	memorisation="Je peux cliquer sur le bouton auquel le popup fait référence, c'est-à-dire celui dont l'encadrement est rouge, et qui n'affiche pas le nombre {Math.random().toString()}"
>
	<button onclick={() => alert("En rien pour le moment")}>
		Savoir en quoi consiste l'expérience
	</button>
</TutoPopup>

<TutoPopup
	bind:ouvert={tuto3}
	info="Ce bouton n'est pas cliquable"
	memorisation="Je comprends que les développeurs n'aient pas eu le temps de coder cette fonctionnalité"
>
	<button disabled style="cursor: wait;">
		Désactiver les informations utiles
	</button>
</TutoPopup>
