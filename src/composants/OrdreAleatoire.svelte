<script lang="ts">
	import { onMount, type Snippet } from "svelte";

	function mélanger<T>(arr: T[]): T[] {
		// ChatGPT
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
		}
		return arr;
	}

	let { éléments }: { éléments: Snippet<[number]>[] } = $props();

	console.log(éléments);
	éléments = mélanger(éléments);
</script>

{#each éléments as élément, i}
	{@render élément(i)}
{/each}
