import localStorageState from "./storage.svelte";

type ParamsTriche = {
	active: boolean
	pasDeTutoriels: boolean
};

let def: ParamsTriche = { active: false, pasDeTutoriels: false };

let stated = localStorageState("cheats", def)

export default stated
