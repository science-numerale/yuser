import type { Personnalisation } from "../states/personnalisation.svelte"
import personnalisation from "../states/personnalisation.svelte";

type Personne = {
	type: 1 | 2 | 3,
	nombre: "s" | "p",
}

let verbesNormaux = {
	"avoir": {
		"présent": {
			s: {
				1: "^ai",
				2: "as",
				3: "a"
			},
			p: {
				1: "avons",
				2: "avez",
				3: "ont"
			}
		}
	},
	"pouvoir": {
		"présent": {
			s: {
				1: "peux",
				2: "peux",
				3: "peut"
			},
			p: {
				1: "pouvons",
				2: "pouvez",
				3: "peuvent"
			}
		},
	},
	"comprendre": {
		"présent": {
			s: {
				1: "comprends",
				2: "comprends",
				3: "comprend"
			},
			p: {
				1: "comprenons",
				2: "comprenez",
				3: "comprennent"
			}
		}
	},
	"rechercher": {
		"présent": {
			s: {
				1: "recherche",
				2: "recherches",
				3: "recherche"
			},
			p: {
				1: "recherchons",
				2: "recherchez",
				3: "recherchent"
			}
		}
	}
} satisfies Record<string, {
	[key in "présent"]?: { // Pas d'impératif, ça marche pas à toutes les personnes
		s: {
			1: string,
			2: string,
			3: string
		},
		p: {
			1: string,
			2: string,
			3: string
		}
	}
}>;

function obtPronom(type: "sujet", personne: Personne, genre: "f" | "i" | "m"): string
function obtPronom(type: "COD" | "COI", personne: Personne, genre: "f" | "i" | "m", réfléchit: boolean): string

function obtPronom(type: "sujet" | "COD" | "COI", personne: Personne, genre: "f" | "i" | "m" = "i", réfléchit: boolean = false) {
	switch (type) {
		// === Pronoms sujets ===
		case "sujet":
			switch (personne.nombre) {
				case "s":
					switch (personne.type) {
						case 1:
							return "je"
						case 2:
							return "tu"
						case 3:
							switch (genre) {
								case "f":
									return "elle"
								case "i":
									return "on"
								case "m":
									return "il"
							}
					}
				case "p":
					switch (personne.type) {
						case 1:
							return "nous"
						case 2:
							return "vous"
						case 3:
							switch (genre) {
								case "f":
									return "elles"
								case "i":
									return "ils"
								case "m":
									return "ils"
							}
					}
			}

		// === Pronoms COD ===
		case "COD":
			switch (personne.nombre) {
				case "s":
					switch (personne.type) {
						case 1:
							return "me"
						case 2:
							return "te"
						case 3:
							if (réfléchit) {
								return "se"
							} else {
								switch (genre) {
									case "f":
										return "la"
									case "i":
										return "le"
									case "m":
										return "le"
								}
							}
					}
				case "p":
					switch (personne.type) {
						case 1:
							return "nous"
						case 2:
							return "vous"
						case 3:
							if (réfléchit) {
								return "se"
							} else {
								return "les"
							}
					}
			}

		// === Pronoms COI ===
		case "COI":
			switch (personne.nombre) {
				case "s":
					switch (personne.type) {
						case 1:
							return "me"
						case 2:
							return "te"
						case 3:
							if (réfléchit) {
								return "se"
							} else {
								return "lui"
							}
					}
				case "p":
					switch (personne.type) {
						case 1:
							return "nous"
						case 2:
							return "vous"
						case 3:
							if (réfléchit) {
								return "se"
							} else {
								return "leur"
							}
					}
			}
	}
}

function obtPossessif(personne: Personne, objet: { nombre: "s" | "p", genre: "f" | "m" }) {
	switch (objet.nombre) {
		case "s":
			switch (personne.nombre) {
				case "s":
					switch (objet.genre) {
						case "f":
							switch (personne.type) {
								case 1:
									return "ma"
								case 2:
									return "ta"
								case 3:
									return "sa"
							}
						case "m":
							switch (personne.type) {
								case 1:
									return "mon"
								case 2:
									return "ton"
								case 3:
									return "son"
							}
					}
				case "p":
					switch (personne.type) {
						case 1:
							return "notre"
						case 2:
							return "votre"
						case 3:
							return "leur"
					}
			}
		case "p":
			switch (personne.nombre) {
				case "s":
					switch (personne.type) {
						case 1:
							return "mes"
						case 2:
							return "tes"
						case 3:
							return "ses"
					}
				case "p":
					switch (personne.type) {
						case 1:
							return "nos"
						case 2:
							return "vos"
						case 3:
							return "leurs"
					}
			}
	}
}

function obtPersonne(personnalisation: Personnalisation): Personne {
	return {
		type: personnalisation.type,
		nombre: personnalisation.nombre > 1 ? "p" : (personnalisation.type === 2 && personnalisation.respect > 0 ? "p" : "s"),
	}
}

function conjuguer(verbe: keyof typeof verbesNormaux, personne: Personne) {
	return verbesNormaux[verbe]["présent"][personne.nombre][personne.type]
}

export function ajouterMajuscule(text: string) {
	if (text.length > 0) {
		return text.charAt(0).toUpperCase() + text.slice(1)
	} else {
		return text
	}
}




export function COD(réfléchit: boolean = true) {
	return obtPronom("COD", obtPersonne(personnalisation), personnalisation.genre, réfléchit)
}
export function COI(réfléchit: boolean = true) {
	return obtPronom("COI", obtPersonne(personnalisation), personnalisation.genre, réfléchit)
}
export function possessif(obj: { nombre: "s" | "p", genre: "f" | "m" }) {
	return obtPossessif(obtPersonne(personnalisation), obj)
}
export function formuler(verbe: keyof typeof verbesNormaux, majuscule: boolean = false, intention: "affirmatif" | "iterrogatif" = "affirmatif") {
	let s = obtPronom("sujet", obtPersonne(personnalisation), personnalisation.genre)
	let v = conjuguer(verbe, obtPersonne(personnalisation))
	let res = ""
	switch (intention) {
		case "affirmatif":
			res = `${s} ${v}`
			break;
		case "iterrogatif":
			res = `${v}-${s}`
			break;
	}

	res = res.replaceAll("e ^", "'")
	res = res.replaceAll("^", "")

	if (majuscule) {
		res = ajouterMajuscule(res)
	}
	return res
}
