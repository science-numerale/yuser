<script lang="ts">
let { dialogue = $bindable(), children } = $props()
function handleKeydown(event: KeyboardEvent) {
	if (event.key === 'Escape') {
		event.preventDefault();  // Prevent the default action (closing the dialog)
	}
}
</script>

<dialog bind:this={dialogue} onkeydowncapture={handleKeydown}>
	{@render children()}
</dialog>
