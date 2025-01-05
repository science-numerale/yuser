<script>
	import { base } from "$app/paths";
	import { conj, poss } from "../../../components/francais";
</script>

<p>
	Donc {conj("avoir")} oublié {poss("s", "m")} identifiant...
	C'est embêtant ! Voici quelques conseils pour //chantier\\ le rappeler :
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
