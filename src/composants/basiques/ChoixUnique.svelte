<script lang="ts">
	import type { Snippet } from "svelte";
	import { mélanger } from "../utils";

	let {
		sélection = $bindable(),
		options: options,
		style = "select",
		mélange = true,
	}: {
		sélection?: string;
		options: Record<string, Snippet | string>;
		style?: "select" | "radio";
		mélange?: boolean;
	} = $props();

	let clés = $derived(
		mélange ? mélanger(Object.keys(options)) : Object.keys(options),
	);

	// TODO : Le faire plus proprement
	let id = Math.random().toString();
</script>

{#if style === "select"}
	<select bind:value={sélection}>
		{#each clés as clé}
			{#if typeof options[clé] === "string"}
				<option value={clé}>{options[clé]}</option>
			{/if}
		{/each}
	</select>
{:else if style === "radio"}
	{#each clés as clé}
		1
		<input type="radio" value={clé} id={id + clé} bind:group={sélection} />
		{#if typeof options[clé] === "string"}
			Bonjour 2
			<label for={id + clé}>{options[clé]}</label>
		{:else}
			Bonjour
			<label for={id + clé}>{@render options[clé]()}</label>
		{/if}
	{/each}
{/if}
