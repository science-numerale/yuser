<script>
	import { page } from "$app/stores";
</script>

{#if $page.url.pathname.includes("gouv")}
	<h1>Erreur "pas de gouvernement" : c'est la sauce</h1>
	<img
		src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.francetvinfo.fr%2Fpictures%2F0RouEramwBS2mOLe0k5LSv5WCuc%2F1500x843%2F2020%2F09%2F22%2FphpTRPquJ.jpg&f=1&nofb=1&ipt=1bb2f6b68f484a40203ff2dbc6f19eb26f48bb4b4841108386f1ef3912da5616&ipo=images"
	/>
{:else}
	<h1>Erreur {$page.status} : c'est la sauce</h1>
	<p>
		Cher utilisateur, essaye de <a
			href="https://www.thoughtco.com/retourner-to-return-1370844">retourner</a
		>
		à <a href="http://la.org">la</a> <a href="https://page.net">page</a>
		<a href="/" style="color: black; text-decoration: none">précédente</a>.
	</p>
	<img
		src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meme-arsenal.com%2Fmemes%2F379d5a93503be81ae1a4faede1a8ca5d.jpg&f=1&nofb=1&ipt=bf70c1be785a6f5c4554a61caad4f0565ff5e3f8c4d5c0752481f47d525d4267&ipo=images"
	/>
{/if}
