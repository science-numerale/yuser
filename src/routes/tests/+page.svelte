<script>
	import Popup from "../../components/Popup.svelte";
	let ouvert = $state(false)
</script>
<input type="checkbox" bind:checked={ouvert}>
<Popup bind:ouvert lorsOuverture={()=>alert("Ouvert")} lorsFermeture={()=>alert("Fermé")}>test <button onclick={()=>{ouvert=false}}>Fermer</button></Popup>
