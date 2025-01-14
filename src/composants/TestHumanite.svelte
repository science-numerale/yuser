<script lang="ts">
	import type { Snippet } from "svelte";
	import Bouton from "./basiques/Bouton.svelte";
	import { ajouterMajuscule, conj, mot } from "./francais.svelte";
	import Popup from "./Popup.svelte";
	import PopupEnnuyeux from "./PopupEnnuyeux.svelte";
	import Etape1 from "./testHumanite/Etape1.svelte";
	import Etape2 from "./testHumanite/Etape2.svelte";
	import { attendre } from "../states/attente.svelte";

	let {
		validé = $bindable(),
	}: {
		validé: boolean;
	} = $props();

	let popupRaté = $state(false);

	function rater() {
		étape = 0;
		popupRaté = true;
	}

	let étape = $state(0);

	let r1: boolean = $state();
	let r2: boolean = $state();
</script>

<Bouton
	clic={() => {
		attendre(2000).then(() => {
			étape = 1;
		});
	}}
>
	Passer le test d'humanité
</Bouton><br />

<!-- TODO : penser à modifier le "3" lors d'ajout d'étapes -->
<Bouton
	désactivé={étape < 3}
	clic={() => {
		validé = true;
	}}>Valider de test d'humanité</Bouton
>

<PopupEnnuyeux bind:ouvert={popupRaté}>
	Vous avez raté le test d'humanité
</PopupEnnuyeux>

{#snippet étapePopup(pos: number, contenu: Snippet, réeussie: boolean)}
	<Popup ouvert={étape === pos}>
		{@render contenu()}
		<Bouton
			clic={() => {
				if (réeussie) {
					attendre(2000).then(() => {
						étape = pos + 1;
					});
				} else {
					rater();
				}
			}}
		>
			Valider
		</Bouton>
	</Popup>
{/snippet}

<!-- Étape 1 -->

{#snippet e1()}
	<Etape1 bind:validé={r1} />
{/snippet}
{@render étapePopup(1, e1, r1)}

<!-- Étape 1 -->

{#snippet e2()}
	<Etape2 bind:validé={r2} />
{/snippet}
{@render étapePopup(2, e2, r2)}
