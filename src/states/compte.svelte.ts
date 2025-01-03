import localStorageState from "./storage.svelte"

let def = { connecté: false }

let compte = localStorageState("compte", def)

export default compte
