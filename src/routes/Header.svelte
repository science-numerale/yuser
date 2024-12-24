<script lang="ts">
	import { base } from "$app/paths";
	import { page } from "$app/state";

	let selecteur = `${base}/selecteur`
</script>

<header>
	<nav>
		<ul>
			<li aria-current={page.url.pathname === selecteur ? "page" : undefined}>
				<a href={selecteur}>Sélecteur de page</a>
			</li>
		</ul>
	</nav>
</header>
