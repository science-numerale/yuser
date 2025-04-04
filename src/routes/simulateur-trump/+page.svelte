<script lang="ts">
	import Bouton from "../../composants/basiques/Bouton.svelte";
	import ChoixUnique from "../../composants/basiques/ChoixUnique.svelte";
	import { listeStrVersDisctStr } from "../../composants/utils";
	import { attendre } from "../../states/attente.svelte";

	// Toutes les taxes sont en pourcentage (moins rigoureux mais plus facile)
	interface Pays {
		détruit: boolean;
		taxes: {
			importation: number;
			exportation: number;
		};
	}
	const défaut = () => ({
		détruit: false,
		taxes: {
			importation: 30,
			exportation: 30,
		},
	});

	let pays: Record<string, Pays> = $state({
		Europe: défaut(),
		Châteauroux: défaut(),
		Suisse: défaut(),
		"Afrique du Sud": défaut(),
		"Afrique du Nord": défaut(),
		Russie: {
			détruit: false,
			taxes: {
				importation: 10,
				exportation: 10,
			},
		},
	});

	let paysActuel = $state(Object.keys(pays)[0]);

	alert(
		"Ce site est de l'humour, noir certes, mais il ne faut pas oublier la triste réalité. Lorsque vous utilisez ce site, vous êtes aussi utile à la société qu'un escargot qui bronze sur la plage. N'oubliez pas que T. est un problème qui à de réels effets sur la vie des populations.",
	);

	let bombe = $derived(
		pays[paysActuel].détruit || paysActuel === "Châteauroux",
	);
</script>

<h1>POV t'es trump :</h1>

<fieldset style="display: flex; flex-direction: column;">
	<legend>
		Options pour
		<ChoixUnique
			options={(() => {
				let options: Record<string, string> = {};
				for (const i of Object.keys(pays)) {
					options[i] = `${i}${pays[i].détruit ? " (détruit.e)" : ""}`;
				}
				return options;
			})()}
			style="select"
			bind:sélection={paysActuel}
		/>
	</legend>

	{#if paysActuel === "Suisse"}
		<h2><i>Joker neutralité</i></h2>
		<small>
			<a href="https://youtu.be/ezTymdoQ2xw">Documentaire sur la suisse</a>
		</small>
	{:else}
		<label>
			Taxes sur les importations :
			<input
				type="number"
				min={0}
				max={100}
				bind:value={pays[paysActuel].taxes.importation}
			/>%
		</label>
		<label>
			Taxes sur les exportations :
			<input
				type="number"
				min={0}
				max={100}
				bind:value={pays[paysActuel].taxes.exportation}
			/>%
		</label>

		{#if pays[paysActuel].détruit}
			<small>
				Note : les taxes ne peuvent pourront pas êtres payées par {paysActuel} car
				une bombe à déjà été envoyée.
			</small>
		{/if}

		<div
			style="display: inline-block; background: red; color: white; width: min-content; padding: 0.5rem; opacity: {bombe
				? '0.5'
				: '1'};"
		>
			<Bouton
				attente={false}
				désactivé={bombe}
				saut={false}
				style="texte"
				clic={() => {
					attendre(5000).then(() => {
						pays[paysActuel].détruit = true;
						alert(`C'est bon, ${paysActuel} est détruit.e`);
					});
				}}
			>
				Envoyer une bombe nucléaire
			</Bouton>
		</div>
	{/if}
</fieldset>

<br />

<Bouton
	clic={() => {
		window
			.open(
				"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701075949.jpg",
			)
			.focus();
	}}>Download Trump</Bouton
>
