<script lang="ts">
	import { page } from '$app/stores';

	const pages = {
		"Maison": "/",
	}
</script>

<header>
	<nav>
		<ul>
			{#each Object.entries(pages) as [ n, a ] }
				<li aria-current={$page.url.pathname === a ? 'page' : undefined}>
					<a href={a}>{n}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
