<script>
import Popup from "./Popup.svelte";

let { dialogue: dialogue = $bindable(), children } = $props()
</script>

<Popup bind:dialog={dialogue}>
	{@render children()}
</Popup>
