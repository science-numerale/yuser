<script lang="ts">
	import "../../app.css";
	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>

<style>
div {
	position: fixed;
	top: 0;
	left: 0;
	margin: 0;
	background-color: white;
	width: 100%;
	height: 100%;
}
</style>

