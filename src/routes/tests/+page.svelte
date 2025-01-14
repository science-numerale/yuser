<script lang="ts">
    import Bouton from "../../composants/basiques/Bouton.svelte";
import TestHumanite from "../../composants/TestHumanite.svelte";
    import { attendre } from "../../states/attente.svelte";
</script>

<TestHumanite validé={false} />

<Bouton clic={()=>attendre(10000)}>Attendre</Bouton>
