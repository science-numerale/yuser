<script>
import Popup from "./Popup.svelte";

let { dialogue: dialogue = $bindable(), children } = $props()
let dialogue: HTMLDialogElement | undefined = $state()
</script>

<Popup bind:dialog={dialogue}>
	{@render children()}
	<button>Ne pas laisser le popup ouvert</button>
</Popup>

<Popup bind:dialog={dialogue}>
	{@render children()}
	<button>Ne pas laisser le popup ouvert</button>
</Popup>
