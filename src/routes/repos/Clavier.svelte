<script lang="ts">
	let text = $state("");
	let maj = $state(false);
	function ajouter(c) {
		text += c;
	}
</script>

{#if text == "Merlin l'enchanteur"}
	<img
		src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fonceuponatime%2Fimages%2Fa%2Fac%2FMerlin_l%27Enchanteur_(Disney)_Higitus_Figitus_danse_livres.gif%2Frevision%2Flatest%2Fscale-to-width-down%2F640%3Fcb%3D20150512114452%26path-prefix%3Dfr&f=1&nofb=1&ipt=2139c1e6fa8f0a80cb15bc5d23250b8b5ac2392b5c5db597cc75b82769c462fe&ipo=images"
		alt="Merlin l'enchanteur dans Disney, scène de la danse des livres"
	/>
{:else if text == "Ce site est super" || text == "Ce site est génial"}
	<img
		src="https://static-cse.canva.com/blob/1146728/Designsanstitre.png"
		alt="I love you!"
	/>
{:else if text == "C'est nul" || text == "Ce site est nul"}
	<img
		src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FviGCwLxupyoaLsa6hrnu1gYrB0B.jpg&f=1&nofb=1&ipt=196f890f464a0b55c931868c80bb88ea2d667700bd32758855754891793168b6&ipo=images"
		alt="I hate you"
	/>
{:else if text == "666"}
	<p><a href="/page?n=666">page</a></p>
{:else if text == "Windows" || text == "Linux" || text == "Macos"}
	<div class="container">
		<div><strong>Linux</strong></div>
		<div><strong>Windows</strong></div>
		<div>Open Source</div>
		<div>Closed Source</div>
		<div>Gratuit</div>
		<div>Entre 150€ et 320€</div>
		<div>Logiciels gratuits</div>
		<div>Logiciels payants</div>
		<div>Distributions Live CD/USB</div>
		<div>NON</div>
		<div>Sécurisé</div>
		<div>Non sécurisé</div>
		<div>RIEN</div>
		<div>Virus, chevaux de Troie, ...</div>
		<div>Besoins matériels faibles</div>
		<div>Besoins matériels très élevés</div>
		<div>100% customisable</div>
		<div>Non customisable</div>
	</div>
{:else}
	<div class="main">
		<h1>Entrez un texte : <span class="mdp">{text}</span></h1>

		<div class="clavier">
			{#each maj ? "1234567890" : "&é\"'(-è_çà" as char}
				<button class="un" onclick={() => ajouter(char)}>{char}</button>
			{/each}
			<button
				class="un"
				onclick={() => (text = text.substring(0, text.length - 1))}>⌫</button
			>
			<br />

			{#each maj ? "azertyuiop" : "AZERTYUIOP" as char}
				<button class="deux" onclick={() => ajouter(char)}>{char}</button>
			{/each}
			<br />

			{#each maj ? "qsdfghjklm" : "QSDFGHJKLM" as char}
				<button class="trois" onclick={() => ajouter(char)}>{char}</button>
			{/each}
			<br />

			{#each maj ? "wxcvbn" : "WXCVBN" as char}
				<button class="quatre" onclick={() => ajouter(char)}>{char}</button>
			{/each}
			<button class="espace" onclick={() => ajouter(" ")}>az</button>
			<button class="quatre" onclick={() => (maj = !maj)}>⇑</button>
		</div>
	</div>
{/if}

<style>
	div.clavier {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	div.main {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: black;
	}
	button.un {
		width: 8.5%;
	}
	button.deux {
		width: 9%;
	}
	button.trois {
		width: 9%;
	}
	button.quatre {
		width: 9%;
	}
	button.espace {
		width: 30%;
		color: #202323;
	}
	button.espace:hover {
		color: #3a3e3f;
	}
	button {
		font-size: 50px;
		margin: 2px;
		background-color: #202323;
	}
	button:hover {
		background-color: #3a3e3f;
	}
	h1 {
		color: #3a3e3f;
	}
	.mdp {
		color: white;
	}
	img {
		position: fixed;
		top: 0;
		left: 0;
		min-width: 100%;
		min-height: 100%;
	}
	.container {
		display: grid;
		grid-template-columns: auto auto;
		background-color: white;
		padding: 10px;
	}
	.container > div {
		background-color: white;
		border: 1px solid black;
		padding: 10px;
		font-size: 30px;
		text-align: center;
	}
</style>
