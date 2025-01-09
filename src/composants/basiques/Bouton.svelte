<script lang="ts">
	import type { Snippet } from "svelte";
let {
		children,
		clic,
		désactivé,
		style,
	}: {
		children?: Snippet;
		clic?: () => void;
		désactivé?: boolean;
		style?: string
	} = $props();
</script>

<button disabled={désactivé} style={style} onclick={clic}>{@render children?.()}</button>

<style>
	button {
		background-color: var(--accent-color-1);
		color: white;
		padding: 0.25rem 0.5rem;
		border: none;
	}
	button:not(:disabled):hover {
		background-color: var(--hover-accent-color-1);
	}

	button:disabled {
		opacity: 50%;
		cursor: wait;
	}
</style>
