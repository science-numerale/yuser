<script lang="ts">
let text = $state("");
let maj = $state(false);
function ajouter(c) {
	text += c;
}
</script>

{#if (text=="Merlin l'enchanteur")}
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fonceuponatime%2Fimages%2Fa%2Fac%2FMerlin_l%27Enchanteur_(Disney)_Higitus_Figitus_danse_livres.gif%2Frevision%2Flatest%2Fscale-to-width-down%2F640%3Fcb%3D20150512114452%26path-prefix%3Dfr&f=1&nofb=1&ipt=2139c1e6fa8f0a80cb15bc5d23250b8b5ac2392b5c5db597cc75b82769c462fe&ipo=images" alt="Merlin l'enchanteur dans Disney, scène de la danse des livres"/>
{:else}
<div class="main">
<h1>Entrez un texte : <span class="mdp">{text}</span></h1>

<div class="clavier">
{#each maj? "1234567890": "&é\"'(-è_çà" as char}
<button class="un" onclick={() => ajouter(char)}>{char}</button>
{/each}
<button class="un" onclick={() => text = text.substring(0, text.length - 1)}>⌫</button>
<br/>

{#each maj? "azertyuiop": "AZERTYUIOP" as char}
<button class="deux" onclick={() => ajouter(char)}>{char}</button>
{/each}
<br/>

{#each maj? "qsdfghjklm": "QSDFGHJKLM" as char}
<button class="trois" onclick={() => ajouter(char)}>{char}</button>
{/each}
<br/>

{#each maj? "wxcvbn": "WXCVBN" as char}
<button class="quatre" onclick={() => ajouter(char)}>{char}</button>
{/each}
<button class="espace" onclick={() => ajouter(" ")}>az</button>
<button class="quatre" onclick={() => maj=!maj}>⇑</button>
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
	color:#3a3e3f;
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
</style>
