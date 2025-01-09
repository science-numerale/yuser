<script lang="ts">
	import Bouton from "../../composants/basiques/Bouton.svelte";
	import { poss } from "../../composants/francais.svelte";
	import OrdreAleatoire from "../../composants/OrdreAleatoire.svelte";
	import Popup from "../../composants/Popup.svelte";

	let { infos = $bindable() }: { infos: string[] } = $props();

	let popupAvertissement = $state(false);
	let premièreFois = $state(true);

	// Donc infos != faits ???
	let faits = [
		"Il existe un certain nombre de crêpes cuisinées à certaines période de l'année dans certaines régions du globe.",
		"Chaque jour, au moins treize touches de clavier sont frappées sans but lucratif.",
		"Si vous ouvrez les yeux dans une pièce sombre, la couleur que vous voyez s’appelle eigengrau.",
		"Dans presque toutes les publicités, l’heure affichée sur la montre est 10h10.",
		"Le seul État des États-Unis à avoir son nom sur une rangée du clavier qwerty est l’Alaska.",
		"La craie est très comestible, et certains peuvent même aimer son goût.",
		"Vous ne pouvez pas vous lécher le coude. Essayez-le si vous ne nous faites pas confiance.",
		"En moyenne, un Américain regarde 8 maisons avant d’en acheter une.",
		"Environ 16 millions de personnes dans la population actuelle sont des descendants directs de Genghis Khan.",
		"Un Américain passe environ deux jours et demi à la recherche d’objets perdus.",
		"Vous avez environ 13,8% de chances de mourir le jour de votre anniversaire.",
		"L’un des ingrédients du Coca Cola était la cocaïne, retirée de la recette en 1929.",
		"Au Royaume-Uni, il est légal de tuer un Écossais dans la ville de York s’il porte un arc et des flèches.",
		"Chaque année, plus de personnes meurent par une noix de coco qui tombe d’un arbre que par des attaques de requins.",
		"Il n’y a qu’un seul panneau STOP à Paris",
		"Un crayon basique peut écrire jusqu’à 45 000 mots",
		"Lorsqu’une phrase comporte toutes les lettres de l’alphabet, c’est un pangramme",
		"18 millions de tonnes d’eau tombent sur Terre à chaque seconde.",
		"Chaque jour 13 % de la population américaine mange de la pizza.",
		"Le corps contient en moyenne 0.2 mg d’or.",
		"Dans une coupe de champagne, 1 045 014 bulles se forment.",
		"Il est impossible de fredonner en se bouchant le nez.",
		"Le cri d'un canard n'a pas d'écho.",
		"Le plus grand flocon de neige jamais observé mesurait 38cm de diamètre.",
		"Les Américains ont échafaudé près de 700 plans pour tuer Fidel Castro (sans succès).",
		"Une personne passe en moyenne 6 mois de sa vie assise devant un feu rouge",
		"A Châteauneuf-du-Pape, les OVNIs sont interdits de survol, d'atterissage et de décollage.",
		"Dans la commune de Sainte-Gemmes-sur-Loire, le stationnement est gratuit pour les rennes du père Noël.",
		"Dans le monde, il y a moins de flamants rose en chair et en os qu'en plastique.",
		"50% de l'ADN humain est similaire à celui d'une banane",
		"La Russie a une plus grande surface que Pluton",
		"Certaines tortues peuvent respirer par l'anus",
		"Les accidents liés aux distributeurs de boissons sont deux fois plus nombreux que ceux liés aux attaques de requins au États-Unis",
		"Si on creuse un trou à travers le noyau terrestre et qu'on laisse tomber un livre, il arriverait en 42 minutes de l'autre côté de la Terre.",
		"Mario casse les blocs avec sa main, pas avec sa tête (si, si, c'est vrai).",
		"Il pleut des diamants sur Saturne et Jupiter",
		"Entre sa date de découverte et sa date de déclassification, Pluton n'a même pas fait un tour complet du soleil",
		"La turritopsis nutricula est une méduse immortelle (jusqu'au jour où elle se fait dévorer)",
		"A l’origine, les carottes étaient violettes",
		"Il existe des parapluies pour chaussure.",
		"Il existe une cuillère dotée d'une caméra pour prendre ds selfies en mangeant.",
		"La pierre de compagnie, dotée d'un câble USB et livrée dans une boîte percée de trous d'aérations, a fait gagner des millions à son inventeur.",
		"Fnac (la chaîne de magasins) signifie 'Fédération Nationale d'Achats des Cadres'.",
		"Les lapins, les souris, les cochons d'Inde, les rats et les chevaux ne peuvent pas vomir.",
		"Une enclume flotte dans du mercure liquide.",
	];

	function ajouterInfo() {
		infos.unshift(faits[Math.floor(Math.random() * faits.length)]);
	}
</script>

<Bouton
	clic={() => {
		if (premièreFois) {
			popupAvertissement = true;
		} else {
			ajouterInfo();
		}
	}}
>
	Obtenir une information inutile
</Bouton>

<Popup bind:ouvert={popupAvertissement}>
	<p>
		Attention ! La validé de ces informations n'est pas garantie, ou du moins
		dans {poss("s", "f")} définition de la vérité. Nous déclinons toute responsabilité
		en cas de problème quelquonque.
	</p>

	<OrdreAleatoire
		éléments={[
			infoPuisFermer,
			fermerPuisInfo,
			fermerPuisInfoEtDésactiver,
			afficherInfo,
			afficherInfoEtDésactiver,
			fermerPopup,
			fermerPuisInfoEtDésactiver,
		]}
	/>
</Popup>

{#snippet infoPuisFermer()}
	<Bouton
		clic={() => {
			ajouterInfo();
			popupAvertissement = false;
		}}
	>
		Afficher l'information quand même puis fermer ce popup.
	</Bouton>
	<br />
{/snippet}
{#snippet fermerPuisInfo()}
	<Bouton
		clic={() => {
			popupAvertissement = false;
			ajouterInfo();
		}}
	>
		Fermer ce popup puis afficher l'information quand même.
	</Bouton>
	<br />
{/snippet}
{#snippet fermerPuisInfoEtDésactiver()}
	<Bouton
		clic={() => {
			popupAvertissement = false;
			ajouterInfo();
			premièreFois = false;
		}}
	>
		Fermer ce popup puis afficher l'information quand même puis désactiver cet
		avertissement.
	</Bouton>
	<br />
{/snippet}
{#snippet afficherInfo()}
	<Bouton
		clic={() => {
			ajouterInfo();
		}}
	>
		Afficher l'information quand même.
	</Bouton>
	<br />
{/snippet}
{#snippet afficherInfoEtDésactiver()}
	<Bouton
		clic={() => {
			ajouterInfo();
			premièreFois = false;
		}}
	>
		Afficher l'information quand même puis désactiver cet avertissement.
	</Bouton>
	<br />
{/snippet}
{#snippet fermerPopup()}
	<Bouton
		clic={() => {
			popupAvertissement = false;
		}}
	>
		Fermer ce popup
	</Bouton>
	<br />
{/snippet}
