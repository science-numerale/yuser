<script>
	import { base } from "$app/paths";
</script>

<svelte:head>
	<title>À propos de {Math.random() > 0.75 ? "vous" : "nous"}</title>
</svelte:head>

<h1>Qui sommes-nous ?</h1>
<p>
	Qui sommes-nous ? Une question à laquelle Paul Gauguin aurait bien aimé pouvoir répondre... Et c'est en ces temps troublés que 
	la réponse est la plus complexe à apporter : comment se définir ? Sur cet Internet si vaste, si froid, si inhumain et qui pourtant
</p>
<h1>Pourquoi faisons-nous ça ?</h1>
<a href="{base}/alerte">ATTENTION: ne pas cliquer.</a>
