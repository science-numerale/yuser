<script lang="ts">
	import type { Snippet } from "svelte";
	import { attendre } from "../../states/attente.svelte";

	// TODO : Enlever style
	let {
		children,
		clic,
		désactivé,
		saut = true,
		attente = true,
		style = "primaire",
	}: {
		children?: Snippet;
		clic?: () => void;
		désactivé?: boolean;
		saut?: boolean;
		attente?: boolean;
		style?: "primaire" | "secondaire" | "texte";
	} = $props();

	let faire = $derived(
		désactivé ? () => {} : attente ? () => attendre(500).then(clic) : clic,
	);
</script>

{#if style === "texte"}
	<span role="button" tabindex="0" onkeydown={() => {}} onclick={faire}
		>{@render children?.()}</span
	>
{:else}
	<div style="display: inline-block;" class={[{ désactivé, saut }]}>
		<button disabled={désactivé} class={style} onclick={faire}
			>{@render children?.()}</button
		>
	</div>
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
	}

	.désactivé {
		cursor: wait;
	}
	.désactivé.saut:hover {
		--trans: -125%;
	}
	.désactivé > * {
		transform: translateY(var(--trans));
		pointer-events: none;
		/*left: var(--trans);*/
	}
</style>
