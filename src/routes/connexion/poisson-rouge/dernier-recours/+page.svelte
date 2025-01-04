<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import {formuler} from "../../../../components/francais"
	import Popup from "../../../../components/Popup.svelte";

	let fem = ""//ajouterMajuscule(possessif({nombre:"s", genre: "f"}))
	let masc = ""//ajouterMajuscule(possessif({nombre:"s", genre: "m"}))

	let option1 = $state(`${masc} nom`);
	let réponse1 = $state("");
	let option2 = $state(`${masc} code de carte bancaire`);
	let réponse2 = $state("");

	let étape = $state(1);
	let popup = $state(false);

	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let lettreAléatoire = () =>
		alphabet[Math.floor(Math.random() * alphabet.length)];

	let clé = Math.floor(Math.random() * 15);
	let identifiant =
		lettreAléatoire() +
		lettreAléatoire() +
		alphabet[clé + 9] +
		lettreAléatoire() +
		alphabet[clé] +
		alphabet[clé + 3];
</script>

<p>
	Pour retrouver //chantier\\ identifiant, {formuler("$v/avoir/présent/affirmatif/m ")} besoin de fournir deux information spécifiques,
	au choix
</p>
<ul>
	<li>
		<span>Information n°1 : </span>
		<select bind:value={option1}>
			<option>{masc} nom</option>
			<option>{masc} prénom</option>
			<option>{fem} date de naissance</option>
			<option>{masc} adresse e-mail</option>
			<option>{masc} sexe</option>
			<option>{fem} nationalité</option>
		</select>
		<br />
		<span>Saisir {option1.toLowerCase()} ici : </span>
		<input bind:value={réponse1} type="text" />
	</li>
	<li>
		<span>Information n°2 : </span>
		<select bind:value={option2}>
			<option>{masc} code de carte bancaire</option>
			<option>{masc} numéro de sécurité sociale</option>
			<option>{masc} mot de passe Paypal</option>
			<option>Le code d'accès de ton immeuble</option>
			<option>{masc} empreinte génétique complète</option>
			<option>Le code d'accès aux armes nucléaires</option>
		</select>
		<br />
		<span>Saisir {option2.toLowerCase()} ici : </span>
		<input bind:value={réponse2} type="text" />
	</li>
</ul>

<button
	onclick={() => {
		popup = true;
	}}
	disabled={!(
		réponse1.length > 2 &&
		réponse1[0] === réponse1[0].toUpperCase() &&
		réponse2.length > 10
	)}
>
	Générer {masc.toLowerCase()} indentifiant temporaire
</button>

<Popup bind:ouvert={popup}>
	<ul>
		{@render aFaire(1, "Publier les informations sur X")}
		{@render aFaire(2, "Désactiver les protections sur le compte bancaire")}
		{@render aFaire(3, "Obtenir l'identifiant", () =>
			alert(`L'identifiant n'est pas sdjruv, mais c'est ${identifiant}`),
		)}
		{@render aFaire(4, "Tenter de se connecter à nouveau", () =>
			goto(`${base}/connexion`),
		)}
	</ul>
</Popup>

{#snippet aFaire(pos: number, texte: string, apres?: () => void)}
	<li>
		<button
			onclick={() => {
				étape = pos + 1;
				apres?.();
			}}
			disabled={étape !== pos}
			style="{étape < pos ? 'cursor: not-allowed' : ''};"
		>
			{#if étape > pos}
				<s>{pos} - {texte}</s>
			{:else}
				{pos} - {texte}
			{/if}
		</button>
	</li>
{/snippet}
