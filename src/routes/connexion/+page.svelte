<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import {
		ajouterMajuscule,
		COD,
		formuler,
		possessif,
	} from "../../components/conjugaison.svelte";
	import compte from "../../states/compte.svelte";
	import personnalisation from "../../states/personnalisation.svelte";

	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let longueurInitiale = Math.floor(Math.random() * 10) + 1;
	let glisseur = $state(longueurInitiale);
	let longueur = $state(longueurInitiale);
	let mdpOublié = $state(false);

	let identifiant = $state({});
	for (let i = 0; i < 10; i++) {
		identifiant[i] = alphabet.charAt(
			Math.floor(Math.random() * alphabet.length),
		);
	}

	function seConnecter() {
		if (longueur === 6) {
			let clé = alphabet.indexOf(identifiant[4]);
			if (
				identifiant[2] === alphabet[clé + 9] &&
				identifiant[5] === alphabet[clé + 3]
			) {
				alert("Vous êtes connecté !");
				compte.connecté = true;
			}
		}
	}
</script>

<p>
	{formuler("avoir", true, "iterrogatif")} besoin de {COD(true)} connecter au site
	pour quelque raison ? Il ne faut plus hésiter ! {formuler("pouvoir", true)}
	{COD(true)} connecter dès maintenant sur cette page :
</p>

<ul>
	<li>
		<span>Longueur de l'identifiant : </span>
		<input
			type="range"
			bind:value={glisseur}
			min={0}
			max={10}
			onmouseup={() =>
				setTimeout(() => {
					longueur = glisseur;
				}, 1000)}
		/>
	</li>

	<li>
		<span>Identifiant ({longueur} lettres) : </span>
		{#each Array(longueur) as _, n}
			<br />
			<select bind:value={identifiant[n]}>
				{#each alphabet as lettre}
					<option>{lettre}</option>
				{/each}
			</select>
			<span>Majuscule : </span>
			<input type="checkbox" />
		{/each}
	</li>

	<li>
		<input bind:checked={mdpOublié} type="checkbox" />
		<span
			>{formuler("avoir", true)} oublié {possessif({ nombre: "p", genre: "m" })}
			identifiant tel {personnalisation.nombre > 1 ? "des" : "un"} poisson rouge</span
		>
	</li>
</ul>

{#if mdpOublié}
	<button onclick={() => goto(`${base}/connexion/poisson-rouge`)}>
		{ajouterMajuscule(COD())} connecter malgré l'oubli d'identifiant (parcours déconseillé)
	</button>
{:else}
	<button onclick={seConnecter}
		>{ajouterMajuscule(COD(true))} connecter maintenant</button
	>
{/if}
