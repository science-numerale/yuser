<script>
	import { base } from "$app/paths";
	import { conj, poss, réfléchi } from "../../../composants/francais.svelte";
</script>

<svelte:head>
	<title>Oubli d'identifiant</title>
</svelte:head>

<p>
	Donc {conj("avoir")} oublié {poss("s", "m")} identifiant...
	C'est embêtant ! Voici quelques conseils pour {réfléchi()} le rappeler :
</p>
<ul>
	<li>Essayer de se le remémorer</li>
	<li>Se souvenir du contexte dans lequel il a été choisis</li>
	<li>Se mettre dans la même situation que lorsque qu'on s'en souviens</li>
	<li>Demander à un proche s'il a une idée</li>
	<li>
		Tester la <a href={`${base}/connexion/poisson-rouge/dernier-recours`}>
			solution de dernier recours
		</a>
	</li>
</ul>
