import localStorageState from "./storage.svelte"

let def = { connecté: false }

let stated = localStorageState("compte", def)

export default stated
