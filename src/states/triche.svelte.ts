import localStorageState from "./storage.svelte";

let def = {
	pasDeTutoriels: false,
	pasDeCaptchas: false,
	pasDeDelais: false,
	boutonsCachés: false,
	sélecteurOrdonné: false
};

export let _tricheStockée = localStorageState("cheats", Object.assign({}, { activée: false }, def))


export default function triche() {
	let { activée, ...params } = _tricheStockée
	if (activée) {
		return params
	}
	return def
}
