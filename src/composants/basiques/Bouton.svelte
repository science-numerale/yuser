<script lang="ts">
	import type { Snippet } from "svelte";
	import { attendre } from "../../states/attente.svelte";

	// TODO : Enlever style
	let {
		children,
		clic,
		désactivé,
		attente = true,
		style = "primaire",
	}: {
		children?: Snippet;
		clic?: () => void;
		désactivé?: boolean;
		attente?: boolean;
		style?: "primaire" | "secondaire" | "texte";
	} = $props();

	let faire = $derived(attente ? () => attendre(500).then(clic) : clic);
</script>

{#if style === "texte"}
	<span role="button" tabindex="0" onkeydown={()=>{}} onclick={faire}>{@render children?.()}</span>
{:else}
	<button disabled={désactivé} class={style} onclick={faire}>{@render children?.()}</button>
{/if}

<style>
	button {
		color: white;
		padding: 0.25rem 0.5rem;
		border: none;
	}
	button.primaire {
		background-color: var(--accent-color-1);
	}

	button:not(:disabled):hover {
		background-color: var(--hover-accent-color-1);
	}

	button:disabled {
		opacity: 50%;
		cursor: wait;
	}
</style>
