<script lang="ts">
	import Popup from "./Popup.svelte";
	// Je compte sur l'enchanteur pour ajouter des messages...
	let messages = [
		"La patience est un élément clé du succès. - Bill Gates",
		"Tout vient à point à qui sait attendre.",
	];

	let message: string = $state();
	function MAJ() {
		message = messages[Math.floor(Math.random() * messages.length)];
	}
	MAJ();
	setInterval(MAJ, 2000);
</script>

<Popup ouvert={true}>
	<div style="text-align: center;">
		<h3>La machine pense...</h3>
		<img
			alt="sablier magique"
			height="50"
			src="https://yoprops.com/cdn/shop/files/Hourglass_1024x1024.gif?v=1714773616"
		/>
		<p>{message}</p>
	</div>
</Popup>
