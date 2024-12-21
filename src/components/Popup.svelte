<script lang="ts">
let { dialogue = $bindable(), children } = $props()
</script>

<dialog bind:this={dialogue}>
	{@render children()}
</dialog>
