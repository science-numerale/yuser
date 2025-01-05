import {getCookie, setCookie} from "./storage";

export function setPersonne(personne: 1|2|3|4|5|6) {
    setCookie("personne", personne, 10)
}
export function getPersonne(): number { // TODO: check if 1 ~ 6
    if (getCookie("personne")!="") { return Number(getCookie("personne")) }
    else { return 5 }
}
export function setGenre(genre: "m" | "f" | "i") {
    setCookie("genre", genre, 10)
}
export function getGenre(): "m"|"f"|"i" {
    let g = getCookie("genre");
    if (g=="m") {return "m"}
    if (g=="f") {return "f"}
    if (g=="i") {return "i"}
    return "m"
}

const conjug = {
    "être": {
        "présent": {
            1: "suis",
            2: "es",
            3: "est",
            4: "sommes",
            5: "êtes",
            6: "sont",
        },
        "impératif": {
            1: "",
            2: "sois",
            3: "",
            4: "soyons",
            5: "soyez",
            6: ""
        },
        "subjonctif": {
            1: "sois",
            2: "sois",
            3: "soit",
            4: "soyons",
            5: "soyez",
            6: "soient",
        }
    },
    "avoir": {
        "présent": {
            1: "ai",
            2: "as",
            3: "a",
            4: "avons",
            5: "avez",
            6: "ont",
        },
        "impératif": {
            1: "",
            2: "aie",
            3: "",
            4: "ayons",
            5: "ayez",
            6: ""
        },
        "subjonctif": {
            1: "aie",
            2: "aies",
            3: "ait",
            4: "ayons",
            5: "ayez",
            6: "aient",
        }
    },
    "parler": {
        "présent": {
            1: "parle",
            2: "parles",
            3: "parle",
            4: "parlons",
            5: "parlez",
            6: "parlent",
        },
        "impératif": {
            1: "",
            2: "parle",
            3: "",
            4: "parlons",
            5: "parlez",
            6: ""
        },
        "subjonctif": {
            1: "parle",
            2: "parles",
            3: "parle",
            4: "parlions",
            5: "parliez",
            6: "parlent",
        }
    },
    "pouvoir": {
        "présent": {
            1: "peux",
            2: "peux",
            3: "peut",
            4: "pouvons",
            5: "pouvez",
            6: "peuvent",
        },
        "impératif": {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: ""
        },
        "subjonctif": {
            1: "puisse",
            2: "puisses",
            3: "puisse",
            4: "puissions",
            5: "puissiez",
            6: "puissent",
        }
    },
    "vouloir": {
        "présent": {
            1: "veux",
            2: "veux",
            3: "veut",
            4: "voulons",
            5: "voulez",
            6: "veulent",
        },
        "impératif": {
            1: "",
            2: "",
            3: "",
            4: "veuillons",
            5: "veuillez",
            6: ""
        },
        "subjonctif": {
            1: "veuille",
            2: "veuilles",
            3: "veuille",
            4: "veuillions",
            5: "veuilliez",
            6: "veuillent",
        }
    },
    "rechercher": {
        "présent": {
            1: "recherche",
            2: "recherches",
            3: "recherche",
            4: "recherchons",
            5: "recherchez",
            6: "recherchent",
        },
        "impératif": {
            1: "",
            2: "recherche",
            3: "",
            4: "recherchons",
            5: "recherchez",
            6: ""
        },
        "subjonctif": {
            1: "recherche",
            2: "recherches",
            3: "recherche",
            4: "recherchions",
            5: "recherchiez",
            6: "recherchent",
        }
    },
    "comprendre": {
        "présent": {
            1: "comprends",
            2: "comprends",
            3: "comprend",
            4: "comprenons",
            5: "comprenez",
            6: "comprenent",
        },
        "impératif": {
            1: "",
            2: "comprends",
            3: "",
            4: "comprenons",
            5: "comprenez",
            6: ""
        },
        "subjonctif": {
            1: "comprenne",
            2: "comprennes",
            3: "comprenne",
            4: "comprenions",
            5: "compreniez",
            6: "comprennent",
        }
    },
    "devoir": {
        "présent": {
            1: "dois",
            2: "dois",
            3: "doit",
            4: "devons",
            5: "devez",
            6: "doivent",
        },
        "impératif": {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: ""
        },
        "subjonctif": {
            1: "doive",
            2: "doives",
            3: "doive",
            4: "dussions",
            5: "dussiez",
            6: "dussent",
        }
    },
}
const pronoms = {
    "sujet": {
        1: "je",
        2: "tu",
        3: {
            "m": "il",
            "f": "elle",
            "i": "iel",
        },
        4: "nous",
        5: "vous",
        6: {
            "m": "il",
            "f": "elle",
            "i": "iels"
        } 
    },
    "réfléchi": {
        1: "me",
        2: "te",
        3: "se",
        4: "nous",
        5: "vous",
        6: "se",
    },
}
const possesifs = {
    "s": {
        "m": {
            1: "mon",
            2: "ton",
            3: "son",
            4: "notre",
            5: "votre",
            6: "leur"
        },
        "f": {
            1: "ma",
            2: "ta",
            3: "sa",
            4: "notre",
            5: "votre",
            6: "leur",
        }
    },
    "p": {
        "m": {
            1: "mes",
            2: "tes",
            3: "ses",
            4: "nos",
            5: "vos",
            6: "leurs"
        },
        "f": {
            1: "mes",
            2: "tes",
            3: "ses",
            4: "nos",
            5: "vos",
            6: "leurs"
        },
    }
}
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

export function conj(v: keyof typeof conjug, temps = "présent", intention = "affirmatif", maj = false, r = false) {
    let output = "";
    let verbe = conjug[v][temps][getPersonne()]
    let pronom = "";
    if ([3, 6].includes(getPersonne())) {
        pronom = pronoms.sujet[getPersonne()][getGenre()]
    } else {
        pronom = pronoms.sujet[getPersonne()]
    }
    let reflechi = "";
    if (r) {
        reflechi = pronoms.réfléchi[getPersonne()] + " "
    }
    switch (intention) {
        case "affirmatif":
            switch (temps) {
                case "présent":
                    output=pronom + " " + reflechi + verbe;
                    break
                case "impératif":
                    if (verbe=="") {
                        output = conj(v, "subjonctif", "affirmatif", maj, r)
                    } else {
                        output = verbe
                    }
                    break
                case "subjonctif":
                    output="que " + pronom + " " + reflechi  + verbe
                    break
            }
            break
        case "interrogatif":
            switch (temps) {
                case "présent":
                    if (getPersonne()==1) {
                        output="est-ce que je " + reflechi + verbe
                    } else {
                        if (["e", "i"].includes(pronom[0]) && !["d", "t"].includes(verbe[verbe.length-1])) {
                            output = reflechi + verbe + "-t-" + pronom
                        } else {
                            output = reflechi + verbe + "-" + pronom
                        }
                    }
                    break
                    // évidemment, pas d'interrogatif impératif...
            }
    }
    let outputs = output.split(" ");
    output = "";
    if (outputs.length==0) {return output}
    for (let i=0; i<outputs.length-1; i++) {
        if ("aeiouy".includes(outputs[i][outputs[i].length-1]) && "aeiouy".includes(outputs[i+1][0])) {
            output += outputs[i].slice(0, outputs[i].length-1) + "'"
        } else {
            output += outputs[i] + " "
        }
    }
    output += outputs[outputs.length-1]
    if (maj) {
        output = output.charAt(0).toUpperCase() + output.slice(1);
    }
    return output
}
export function poss(nb: "s" | "p", g: "f" | "m"): string {
    return possesifs[nb][g][getPersonne()]
}
export function COD() {
    return pronoms.réfléchi[getPersonne()]
}
export function mot(n: keyof typeof mots): string {
    let nb = "";
    if ([1,2,3].includes(getPersonne())) {
        nb = "s"
    } else {
        nb = "p"
    }
    let g = getGenre();
    if (g=="i") {g = "m"}
    return mots[n][nb][g]
}
