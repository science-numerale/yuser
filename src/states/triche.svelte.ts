import localStorageState from "./storage.svelte";

let def = { active: false, pasDeTutoriels: false };

let stated = localStorageState("cheats", def)

export default stated
