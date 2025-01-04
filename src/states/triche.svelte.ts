import localStorageState from "./storage.svelte";

let def = { activée: false, pasDeTutoriels: false };

let triche = localStorageState("cheats", def)

export default triche
