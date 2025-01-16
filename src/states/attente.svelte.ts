import triche from "./triche.svelte"

export let attentes = $state({ n: 0 })

export function attendre(durée?: number) {
	if (triche().pasDeDelais) {
		return new Promise<void>((r)=>r())
	} else {
		if (durée === undefined) {
			durée = 1 + Math.random() * 2
		}
		attentes.n += 1
		return new Promise<void>((r) => {
			setTimeout(() => {
				attentes.n -= 1
				r()
			}, durée)
		})
	}
}
