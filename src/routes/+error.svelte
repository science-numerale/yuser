<script>
  import { page } from '$app/stores';
</script>

{#if $page.url.pathname.includes("gouvernement")}
	<h1>Erreur "pas de gouvernement" : c'est la sauce</h1>
{:else}
	<h1>Erreur {$page.status} : c'est la sauce</h1>
{/if}
