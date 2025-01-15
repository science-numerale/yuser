<script lang="ts">
	import Popup from "./Popup.svelte";

	// Je compte sur l'enchanteur pour ajouter des messages...
	let messages = [
		"La patience est un élément clé du succès. - Bill Gates",
		"Tout vient à point à qui sait attendre.",
	];
</script>

<Popup ouvert={true}>
	<div style="text-align: center;">
		<h3>La machine pense...</h3>
		<img
			alt="sablier magique"
			height="50"
			src="https://yoprops.com/cdn/shop/files/Hourglass_1024x1024.gif?v=1714773616"
		/>
		<p>{messages[Math.floor(Math.random() * messages.length)]}</p>
	</div>
</Popup>
