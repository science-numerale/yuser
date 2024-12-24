<script lang="ts">
	import { base } from "$app/paths";
	import { page } from "$app/state";

	const pages = {
		Maison: base + "/",
	};
</script>

<header>
	<nav>
		<ul>
			{#each Object.entries(pages) as [n, a]}
				<li aria-current={page.url.pathname === a ? "page" : undefined}>
					<a href={a}>{n}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
