<script lang="ts">
	import { formuler } from "../../components/francais"
	import { setPersonne, setGenre } from "../../components/francais";
</script>

<button onclick="{() => setPersonne(1)}">1 sg</button>
<button onclick="{() => setPersonne(2)}">2 sg</button>
<button onclick="{() => setPersonne(3)}">3 sg</button>
<button onclick="{() => setPersonne(4)}">1 pl</button>
<button onclick="{() => setPersonne(5)}">2 pl</button>
<button onclick="{() => setPersonne(6)}">3 pl</button>
<br/>
<button onclick="{() => setGenre("m")}">masculin</button>
<button onclick="{() => setGenre("f")}">féminin</button>
<button onclick="{() => setGenre("i")}">indéfini</button>
<br/>
<p>{formuler("$v/avoir/présent/interrogatif/r .")}</p>
<!-- Il faut actualiser la page -->