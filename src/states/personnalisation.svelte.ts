import localStorageState from "./storage.svelte";

export type Personnalisation = {
	type: 1 | 2 | 3,
	nombre: number,
	respect: 0 | 1 // Niveau de respect
	genre: "f" | "i" | "m"
}

let def: Personnalisation = {
	type: 2,
	nombre: 1,
	respect: 1,
	genre: "i"
};

let personnalisation = localStorageState("personnalisation", def)

export default personnalisation
