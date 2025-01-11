<script lang="ts">
function keydown(e) {
	alert(e.key)
}
</script>

<svelte:window onkeydown={keydown}/>
