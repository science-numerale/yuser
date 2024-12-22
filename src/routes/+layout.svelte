<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
    import Cheats from '../components/Cheats.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Cheats />
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			Pied de page {#if Math.random() < 0.01}très rare{/if}
		</p>
	</footer>
</div>
