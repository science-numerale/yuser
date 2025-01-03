import localStorageState from "./storage.svelte";

let def = { active: false, pasDeTutoriels: false };

let triche = localStorageState("cheats", def)

export default triche
