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
		"Les fourmis ne dorment jamais.",
		"Le plus long mot en français sans lettre répétée est « dermatoglyphique ».",
		"Il y a plus de combinaisons possibles de parties d’échecs que d’atomes dans l’univers observable.",
		"Les éléphants sont les seuls mammifères qui ne peuvent pas sauter.",
		"L’hippopotomonstrosesquipedaliophobie est la peur des mots longs.",
		"Les kangourous ne peuvent pas sauter en arrière.",
		"Les étoiles de mer n’ont pas de cerveau.",
		"L’œil d’une autruche est plus grand que son cerveau.",
		"Les paresseux prennent deux semaines pour digérer leur nourriture.",
		"Les grenouilles n’avalent pas, elles clignent des yeux pour pousser la nourriture dans leur gorge.",
		"Un groupe de corbeaux s’appelle un « meurtre ».",
		"Les escargots ont 14 000 dents.",
		"Les girafes ont la même quantité de vertèbres cervicales que les humains.",
		"Les requins ne dorment jamais, ils sont toujours en mouvement.",
		"La langue d’une baleine bleue peut peser autant qu’un éléphant.",
		"Les crocodiles ne peuvent pas tirer leur langue.",
		"Les dauphins roses d’Amazonie peuvent sauter hors de l’eau jusqu’à 6 mètres de hauteur.",
		"Les moustiques préfèrent piquer les personnes aux groupes sanguins O.",
		"Les papillons goûtent avec leurs pieds.",
		"Les hippopotames sécrètent un écran solaire naturel à partir de leur sueur.",
		"Les requins sont immunisés contre toutes les maladies connues pour l’homme.",
		"Les dauphins ont un accent selon leur région.",
		"Les chèvres ont des pupilles rectangulaires.",
		"Les hiboux peuvent tourner leur tête à 270 degrés.",
		"Les grenouilles n’ont pas de cloison nasale, elles respirent par la peau.",
		"Les ours polaires sont gauchers.",
		"Les girafes peuvent nettoyer leurs oreilles avec leur propre langue.",
		"En 2014, la définition la plus recherchée en France sur Google est celle de 'LOL'.",
		"Les cyberattaques chutent de 50% le jour de la fête nationale chinoise. Hum hum...",
		"Le premier nom de Google était BackRub (qui signifie 'massage de dos').",
		"Le site Amazon.com s’appelle ainsi car son fondateur, Jeff Bezos, voulait une appellation qui commence par un 'A' pour être en premier dans les listes alphabétiques",
		"Lors d'une averse, la vitesse de chute d'une goutte de pluie varie entre 500cm/s et 800cm/s (soit entre 18 km/h et 28 km/h).",
		"En 1972, une hotesse de l'air du nom de Vesna Vulovic a survécu a une chute de 10160 mètres.",
		"La Déclaration d'indépendance des Etats-Unis comme la Constitution américaine ont été écrites sur du papier de chanvre.",
		"Le chapitre 14, Section 1211 du Code Pénal Américain rend illégal pour les citoyens américains d'avoir tout contact avec des extraterrestres.",
		"La probabilité de mourir en tombant du lit est de 1 sur 2 millions.",
		"10% des revenus du gouvernement russe viennent de la vente de vodka.",
		"2% des coiffeurs Américains ont déjà été poursuivis en justice pour avoir raté une coupe.",
		"25% des os d'un humain se trouvent dans ses pieds.",
		"Seul un adolescent sur 100 arrive à siffler correctement.",
		"En France, il est interdit de s'embrasser sur des rails.",
		"Le parachute a été inventé plus de 100 ans avant l'avion.",
		"A Portland, la loi interdit aux hommes de chatouiller leur femme avec un plumeau.",
		"La priorité à droite existe en avion !",
		"Vous avez entre 75 000 et 110 000 cheveux sur la tête.",
		"En pètant continuellement pendant 6 ans et 9 mois, vous produirez assez de gaz pour créer l'énergie d'une bombe atomique.",
		"En moyenne 650 parisiens par an sont hospitalisés car ils ont glissé sur une crotte de chien.",
		"Il n'y a pas d'horloges dans les casinos à Las Vegas.",
		"D'après la loi dans l'Illinois, il est interdit de manger dans une forêt en feu et de pêcher en pyjama.",
		"L'apopathodiaphulatophobie est la peur d'être constipé.",
		"Dans le Kentucky, une personne est considérée comme sobre tant qu'elle n'est pas à terre.",
		"Un tyrosémiophile est une personne collectionnant les étiquettes de fromage.",
		"Quand Popeye a vu le jour en 1931, la consommation d'épinards a augmenté de 33% aux Etats Unis.",
		"Chaque année, 11.000 Américains se blessent en essayant des positions sexuelles bizarres.",
		"Au Texas il est illégal de boire plus de trois gorgées de bière sans s'asseoir.",
		"Charlie Chaplin a remporté le troisième prix d'un concours de sosie de Charlie Chaplin.",
		"Vous ne pouvez pas vous tuer en retenant votre souffle.",
		"Couché sur le dos et en élevant doucement les jambes, vous ne pouvez pas vous enfoncer dans des sables mouvants.",
		"En criant pendant environ 8 ans, 7 mois et 6 jours, vous produirez assez d'énergie pour chauffer une tasse de café.",
		"En Lettonie, il est possible de donner son âme en garantie d'un prêt bancaire.",
		"45% des Américains ne savent pas que le soleil est une étoile.",
		"A l'équateur, tout le monde pèse 1 % de moins. (du fait de la relativité)",
		"Il est estimé qu'à chaque instant, environ 0.7% de la population mondiale est saoule.",
		"Freud avait la phobie des fougères.",
		'"Breath" est une pièce de Samuel Beckett qui fut pour la premiere fois jouée en 1970. Elle dure 30 secondes, et ne possède ni dialogues, ni acteurs.',
		"Le colibri ne peut pas marcher, mais c'est le seul oiseau à pouvoir voler en marche arriere.",
		"La durée du plus long vol d'avion en papier est de 27,6 secondes.",
		"D'après la loi en Alaska, il est défendu de donner de l'alcool à un élan.",
		"L'os de la hanche est plus solide que le ciment.",
		"Au cours de la Seconde Guerre mondiale, la première bombe lancée sur Berlin par les Alliés a tué le seul éléphant dans le zoo de Berlin.",
		"Tous les citoyens du Kentucky sont obligés par la loi à prendre au moins un bain par an.",
		"La peau d'un humain pèse 2 fois plus que son cerveau.",
		"\"Le Petit Prince\" de Saint-Exupéry a été traduit en 180 langues et dialectes dont le toba, une langue amérindienne du nord de l'Argentine. C'est le premier livre à avoir été traduit dans cette langue après le Nouveau Testament.",
		"D'après la loi en Georgie, un poulet a interdiction de traverser la route.",
		"La chance de voir 3 chevreuils albinos en même temps est de 1 sur 79 milliards, pourtant un homme dans le Wisconsin a pris une photo de 3 chevreuils albinos dans un bois.",
		"On considère qu'un livre a bien été corrigé lorsqu'il contient moins de sept fautes.",
		"Vous brûlez plus de calories en dormant qu'en regardant la télévision.",
		"La probabilité d'être tué par la foudre est de 1 sur 2 millions.",
		"Dans l'espace, les astronautes ne peuvent pas pleurer, car il n'y a pas de gravité et les larmes ne peuvent pas couler.",
		"Les femmes célibataires de Floride risquent la prison si elles font du parachute le dimanche.",
		"Au Nouveau Mexique, plus de 10 000 personnes sont venues observer une chips sur laquelle on peut voir le visage du Christ.",
		"Sur les statues équestres, si le cheval a les deux membres avant levés, son cavalier est mort au combat. Si juste un membre est levé, le cavalier est mort suite à ses blessures. Si les quatre membres touchent terre, c'est une mort naturelle.",
		"Lorsque le taux de divorce augmente aux Etats-Unis, les magasins de jouets rapportent que leurs ventes sont également en hausse.",
		"Le briquet a été inventé avant les allumettes.",
		"Les chauves-souris tournent toujours à gauche en sortant d'une grotte.",
		"Dans les textes de loi en Indiana, les singes n'ont pas le droit de fumer.",
		"Vous avez plus de chance d'être frappé par la foudre que de gagner au loto.",
		"Selon les statistiques sur les suicides, le lundi est le jour le plus favorable.",
		"Le record de la partie de Monopoly la plus longue est de 1680 heures soit 70 jours.",
		"L'hexakosioihexekontahexaphobie est la phobie du nombre 666.",
		"Le Livre Guinness des Records détient le record d'être le livre le plus souvent volé dans les bibliothèques publiques aux Etats Unis.",
		"Il y a assez de fer dans un être humain pour faire un petit clou.",
		"American Airlines a économisé 40,000 $ en 1987 en supprimant une olive de chaque salade servie en première classe.",
		"Afin d'éviter les vols, les ampoules électriques du métro de New-York se vissent à l'envers.",
		"Vous avez 100 fois plus de chances de recevoir un oeuf d'autruche sur la tête que d'être attaqué par un requin.",
		"3 personnes par an meurent en testant une pile de 9V sur leur langue.",
		"Le jeu Pac-Man s'appelait auparavant Puck-man, mais le nom a été changé afin d'éviter que des petits comiques dans les salles d'arcade grattent la boucle du P pour en faire un F.",
		"En Angleterre, la minute de silence dure deux minutes.",
		"90% des billets de banque américain en circulation ont des traces de cocaïne.",
		"Plus de 10% de tout le sel récolté dans le monde chaque année est utilisé pour déglacer les routes Américaines.",
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
