<script>
let { dialog = $bindable(), children } = $props()
</script>

<dialog bind:this={dialog}>
	{@render children()}
</dialog>
