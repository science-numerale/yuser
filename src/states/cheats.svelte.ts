import localStorageState from "./storage.svelte";

type Cheats = {
	enabled: boolean
	pasDeTutoriels: boolean
};

let def: Cheats = { enabled: false, pasDeTutoriels: false };

//let cheats = $state(JSON.parse(window?.localStorage.getItem("cheats") || JSON.stringify(def)))
//
//$effect.root(() => {
//	$effect(() => {
//		localStorage.setItem("cheats", JSON.stringify(cheats))
//	})
//})

let stated = localStorageState("cheats", def)

export default stated
