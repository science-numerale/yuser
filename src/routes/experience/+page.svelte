<script lang="ts">
	import { onMount } from "svelte";
	import triche from "../../states/triche.svelte";
	import { formuler, possessif } from "../../components/conjugaison.svelte";
	import TutoPopup from "./TutoPopup.svelte";
	import InfoUtiles from "./InfoUtiles.svelte";

	let tuto1: boolean = $state(false);
	let tuto2: boolean = $state(false);
	let tuto3: boolean = $state(false);

	let infos = $state([]);

	if (!(triche.activée && triche.pasDeTutoriels)) {
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
	}
</script>

<TutoPopup
	bind:ouvert={tuto1}
	info="Ce bouton est cliquable"
	memorisation="{formuler(
		'pouvoir',
		true,
	)} cliquer sur le bouton auquel le popup fait référence, c'est-à-dire celui dont l'encadrement est rouge"
>
	<InfoUtiles bind:infos />
</TutoPopup>

<TutoPopup
	bind:ouvert={tuto2}
	info="Ce bouton est cliquable"
	memorisation="{formuler(
		'pouvoir',
		true,
	)} cliquer sur le bouton auquel le popup fait référence, c'est-à-dire celui dont l'encadrement est rouge, et qui n'affiche pas le nombre {Math.random().toString()}"
>
	<button onclick={() => alert("Arrête de poser des questions, toi, là !")}>
		Savoir en quoi consiste l'expérience
	</button>
</TutoPopup>

<TutoPopup
	bind:ouvert={tuto3}
	info="Ce bouton n'est pas cliquable"
	memorisation="{formuler(
		'comprendre',
		true,
	)} que les développeurs n'aient pas eu le temps de coder cette fonctionnalité"
>
	<button disabled style="cursor: wait;">
		Désactiver les informations utiles
	</button>
</TutoPopup>

{#each infos as info}
	<p>{info}</p>
{/each}
