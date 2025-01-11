<script lang="ts">
	let blagues = [
		["Pourquoi faudrait-il mettre tous les crocos en prison ?", "Parce que les crocos dealent..."],
		["Que se passe-t-il quand deux poissons s'énervent ?", "Le thon monte."],
		["A quoi sert Internet Explorer ?", "A télécharger Google Chrome !"],
		["Pourquoi les geeks doivent-ils suivre une formation incendie ?", "A cause des pare-feux."],
		["Quand est-ce que Windows ne bug pas ?", "Quand l'ordinateur est éteint."],
		["T'as pris quoi comme résolution cette année ?", "1080p"],
		["De nos jours, le zip...", "...ça devient rar."],
		["Il y a 20 ans, John, alors enfant, rêvait d'être écrivain. Son souhait était d'écrire des choses qui allaient donner des émotions, faire pleurer, s'énerver et révolter ses lecteurs.", "Il a réussi ! Aujourd'hui il rédige les messages d'erreur pour Microsoft..."],
		["Un geek, n'a pas besoin de vaccin...", "...un anti-virus lui suffit."],
	];
	let blague = blagues[Math.floor(Math.random()*blagues.length)]
</script>

<div>
	<h1>{blague[0]}</h1>
	<h2>{blague[1]}</h2>
</div>

<style>
div {
	background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.1zoom.me%2Fb5251%2F132%2FDogs_Funny_Bulldog_Puppy_Bokeh_571468_1920x1080.jpg&f=1&nofb=1&ipt=e541750c98c35619ec679f99b33a21daa61dc065c8ee5c94f1a29b39b1ee32c8&ipo=images");
	-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
h1 {
	font-size: 50px;
	margin-left: 5%;
}
h2 {
	font-size: 30px;
	margin-left: 7%;
}
</style>
