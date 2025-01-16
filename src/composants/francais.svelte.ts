import type { Personnalisation } from "../states/personnalisation.svelte"
import personnalisation from "../states/personnalisation.svelte";

type Personne = {
	type: 1 | 2 | 3,
	nombre: "s" | "p",
}
type Genre = "f" | "i" | "m"

let conjugaison = {
	"être": {
		"présent": {
			"s": {
				1: "suis",
				2: "es",
				3: "est"
			},
			"p": {
				1: "sommes",
				2: "êtes",
				3: "sont"
			}
		},
		"impératif": {
			"s": {
				2: "sois"
			},
			"p": {
				1: "soyons",
				2: "soyez"
			}
		},
		"subjonctif": {
			"s": {
				1: "sois",
				2: "sois",
				3: "soit"
			},
			"p": {
				1: "soyons",
				2: "soyez",
				3: "soient"
			}
		}
	},
	"avoir": {
		"présent": {
			"s": {
				1: "ai",
				2: "as",
				3: "a"
			},
			"p": {
				1: "avons",
				2: "avez",
				3: "ont"
			}
		},
		"impératif": {
			"s": {
				2: "aie"
			},
			"p": {
				1: "ayons",
				2: "ayez"
			}
		},
		"subjonctif": {
			"s": {
				1: "aie",
				2: "aies",
				3: "ait"
			},
			"p": {
				1: "ayons",
				2: "ayez",
				3: "aient"
			}
		}
	},
	"parler": {
		"présent": {
			"s": {
				1: "parle",
				2: "parles",
				3: "parle"
			},
			"p": {
				1: "parlons",
				2: "parlez",
				3: "parlent"
			}
		},
		"impératif": {
			"s": {
				2: "parle"
			},
			"p": {
				1: "parlons",
				2: "parlez"
			}
		},
		"subjonctif": {
			"s": {
				1: "parle",
				2: "parles",
				3: "parle"
			},
			"p": {
				1: "parlions",
				2: "parliez",
				3: "parlent"
			}
		}
	},
	"pouvoir": {
		"présent": {
			"s": {
				1: "peux",
				2: "peux",
				3: "peut"
			},
			"p": {
				1: "pouvons",
				2: "pouvez",
				3: "peuvent"
			}
		},
		"subjonctif": {
			"s": {
				1: "puisse",
				2: "puisses",
				3: "puisse"
			},
			"p": {
				1: "puissions",
				2: "puissiez",
				3: "puissent"
			}
		}
	},
	"vouloir": {
		"présent": {
			"s": {
				1: "veux",
				2: "veux",
				3: "veut"
			},
			"p": {
				1: "voulons",
				2: "voulez",
				3: "veulent"
			}
		},
		"impératif": {
			"s": {
				2: "veuille"
			},
			"p": {
				1: "veuillons",
				2: "veuillez"
			}
		},
		"subjonctif": {
			"s": {
				1: "veuille",
				2: "veuilles",
				3: "veuille"
			},
			"p": {
				1: "veuillions",
				2: "veuilliez",
				3: "veuillent"
			}
		}
	},
	"rechercher": {
		"présent": {
			"s": {
				1: "recherche",
				2: "recherches",
				3: "recherche"
			},
			"p": {
				1: "recherchons",
				2: "recherchez",
				3: "recherchent"
			}
		},
		"impératif": {
			"s": {
				2: "recherche"
			},
			"p": {
				1: "recherchons",
				2: "recherchez"
			}
		},
		"subjonctif": {
			"s": {
				1: "recherche",
				2: "recherches",
				3: "recherche"
			},
			"p": {
				1: "recherchions",
				2: "recherchiez",
				3: "recherchent"
			}
		}
	},
	"comprendre": {
		"présent": {
			"s": {
				1: "comprends",
				2: "comprends",
				3: "comprend"
			},
			"p": {
				1: "comprenons",
				2: "comprenez",
				3: "comprenent"
			}
		},
		"impératif": {
			"s": {
				2: "comprends"
			},
			"p": {
				1: "comprenons",
				2: "comprenez"
			}
		},
		"subjonctif": {
			"s": {
				1: "comprenne",
				2: "comprennes",
				3: "comprenne"
			},
			"p": {
				1: "comprenions",
				2: "compreniez",
				3: "comprennent"
			}
		}
	},
	"devoir": {
		"présent": {
			"s": {
				1: "dois",
				2: "dois",
				3: "doit"
			},
			"p": {
				1: "devons",
				2: "devez",
				3: "doivent"
			}
		},
		"subjonctif": {
			"s": {
				1: "doive",
				2: "doives",
				3: "doive"
			},
			"p": {
				1: "dussions",
				2: "dussiez",
				3: "dussent"
			}
		}
	}
} satisfies Record<string, {
	[key in "présent" | "subjonctif" | "impératif"]?: { // Faire plus proprement pour l'impératif
		s: {
			1?: string,
			2: string,
			3?: string
		},
		p: {
			1: string,
			2: string,
			3?: string
		},
	}
}>;

function obtPronom(type: "sujet" | "COD" | "COI" | "réfléchi", personne: Personne, genre: "f" | "i" | "m" = "i") {
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
									return "iel"
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
									return "iels"
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
							switch (genre) {
								case "f":
									return "la"
								case "i":
									return "le"
								case "m":
									return "le"
							}
					}
				case "p":
					switch (personne.type) {
						case 1:
							return "nous"
						case 2:
							return "vous"
						case 3:
							return "les"
					}
			}

		case "COI":
			switch (personne.nombre) {
				case "s":
					switch (personne.type) {
						case 1:
							return "me"
						case 2:
							return "te"
						case 3:
							return "lui"
					}
				case "p":
					switch (personne.type) {
						case 1:
							return "nous"
						case 2:
							return "vous"
						case 3:
							return "leur"
					}
			}

		case "réfléchi":
			switch (personne.nombre) {
				case "s":
					switch (personne.type) {
						case 1:
							return "me"
						case 2:
							return "te"
						case 3:
							return "se"
					}
				case "p":
					switch (personne.type) {
						case 1:
							return "nous"
						case 2:
							return "vous"
						case 3:
							return "se"
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

function conjuguer(verbe: keyof typeof conjugaison, personne: Personne) {
	return conjugaison[verbe]["présent"][personne.nombre][personne.type]
}

export function ajouterMajuscule(text: string) {
	if (text.length > 0) {
		return text.charAt(0).toUpperCase() + text.slice(1)
	} else {
		return text
	}
}




export function COD() {
	return obtPronom("COD", obtPersonne(personnalisation), personnalisation.genre)
}
export function COI() {
	return obtPronom("COI", obtPersonne(personnalisation), personnalisation.genre)
}
export function réfléchi() {
	return obtPronom("réfléchi", obtPersonne(personnalisation), personnalisation.genre)
}
export function poss(nombre: "s" | "p", genre: "f" | "m") { // Posséssif
	return obtPossessif(obtPersonne(personnalisation), {nombre, genre})
}
export function conj(v: keyof typeof conjugaison, temps: "présent" | "subjonctif" | "impératif" = "présent", intention = "affirmatif", majuscule = false, réfléchi = false) { // Faire plus proprement le typage des temps
	return formuler(v, temps, obtPersonne(personnalisation), personnalisation.genre, intention, majuscule, réfléchi)
}

function formuler(v: keyof typeof conjugaison, temps: "présent" | "subjonctif" | "impératif", personne: Personne, genre: Genre, intention = "affirmatif", maj = false, ajouterRéfléchi = false) { // Faire plus proprement le typage des temps
	let résultat = "";
	let verbe = conjugaison[v][temps][personne.nombre][personne.type]
	let pronom = obtPronom("sujet", personne, genre);
	let pronomRéfléchi = "";
	if (ajouterRéfléchi) {
		pronomRéfléchi = obtPronom("réfléchi", personne, genre)
	}
	switch (intention) {
		case "affirmatif":
			switch (temps) {
				case "présent":
					résultat = `${pronom} ${pronomRéfléchi}${verbe}`;
					break
				case "impératif":
					if (verbe) {
						résultat = verbe
					} else {
						résultat = formuler(v, "subjonctif", personne, genre, "affirmatif", maj, ajouterRéfléchi)
					}
					break
				case "subjonctif":
					résultat = `que ${pronom} ${pronomRéfléchi} ${verbe}`
					break
			}
			break
		case "interrogatif":
			switch (temps) {
				case "présent":
					if (personne.type === 1 && personne.nombre === "s") {
						résultat = "est-ce que je " + pronomRéfléchi + verbe
					} else {
						if (["e", "i"].includes(pronom[0]) && !["d", "t"].includes(verbe[verbe.length - 1])) {
							résultat = `${pronomRéfléchi}${verbe}-t-${pronom}`
						} else {
							résultat = `${pronomRéfléchi}${verbe}-${pronom}`
						}
					}
					break
				// évidemment, pas d'interrogatif impératif...
			}
	}

	let résultats = résultat.split(" ");
	résultat = "";
	if (résultats.length == 0) { return résultat }
	for (let i = 0; i < résultats.length - 1; i++) {
		if ("aeiouy".includes(résultats[i][résultats[i].length - 1]) && "aeiouy".includes(résultats[i + 1][0])) {
			résultat += résultats[i].slice(0, résultats[i].length - 1) + "'"
		} else {
			résultat += résultats[i] + " "
		}
	}
	résultat += résultats[résultats.length - 1]

	if (maj) {
		résultat = ajouterMajuscule(résultat);
	}

	return résultat
}

// FIXME : Réparer ce b*rd*l de m***e

const mots = {
    "poisson": {
        "s": {
            "m": "poisson",
            "f": "poisson"
        },
        "p": {
            "m": "poissons",
            "f": "poissons"
        }
    },
    "rouge": {
        "s": {
            "m": "rouge",
            "f": "rouge"
        },
        "p": {
            "m": "rouges",
            "f": "rouges"
        }
    },
    "un": {
        "s": {
            "m": "un",
            "f": "une"
        },
        "p": {
            "m": "des",
            "f": "des"
        }
    }
}
export function mot(n: keyof typeof mots): string {
    return mots[n]
		[personnalisation.nombre > 1 ? "p" : "s"]
		[personnalisation.genre === "i" ? "m" : personnalisation.genre]
}
