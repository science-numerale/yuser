<script lang="ts">
    import Bouton from "../../composants/basiques/Bouton.svelte";

</script>
<Bouton></Bouton>
<Bouton clic={()=>alert("Actif !")}>Activé</Bouton>
<Bouton désactivé={true} clic={()=>alert("ça marche pas.")}>Désactivé</Bouton>
