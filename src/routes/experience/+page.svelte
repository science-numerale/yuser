<script lang="ts">
	import { onMount } from "svelte";
	import triche from "../../states/triche.svelte";
	import TutoPopup from "./TutoPopup.svelte";
	import InfoUtiles from "./InfoUtiles.svelte";
	import { conj } from "../../composants/francais.svelte";
    import Bouton from "../../composants/basiques/Bouton.svelte";

	let tuto1: boolean = $state(false);
	let tuto2: boolean = $state(false);
	let tuto3: boolean = $state(false);

	let infos = $state([]);

	if (!(triche().pasDeTutoriels)) {
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

<svelte:head>
	<title>Expérience</title>
</svelte:head>

<TutoPopup
	bind:ouvert={tuto1}
	info="Ce bouton est cliquable"
	memorisation="{conj("pouvoir", "présent", "affirmatif", true)} cliquer sur le bouton auquel le popup fait référence, c'est-à-dire celui dont l'encadrement est rouge"
>
	<InfoUtiles bind:infos />
</TutoPopup>

<TutoPopup
	bind:ouvert={tuto2}
	info="Ce bouton est cliquable"
	memorisation="{conj("pouvoir", "présent", "affirmatif", true)} cliquer sur le bouton auquel le popup fait référence, c'est-à-dire celui dont l'encadrement est rouge, et qui n'affiche pas le nombre {Math.random().toString()}"
>
	<Bouton clic={() => alert("Arrête de poser des questions, toi, là !")}>
		Savoir en quoi consiste l'expérience
	</Bouton>
</TutoPopup>

<TutoPopup
	bind:ouvert={tuto3}
	info="Ce bouton n'est pas cliquable"
	memorisation="{conj("comprendre", "présent", "affirmatif", true)} que les développeurs n'aient pas eu le temps de coder cette fonctionnalité"
>
	<Bouton désactivé>
		Désactiver les informations utiles
	</Bouton>
</TutoPopup>

{#each infos as info}
	<p>{info}</p>
{/each}
