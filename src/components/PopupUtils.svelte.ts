export function lorsFermeture(ouvert: boolean, faire: ()=>void) {
	let precedendemmentOuvert = $state.snapshot(ouvert)

	$effect.root(()=>{
		$effect(()=>{
			if (precedendemmentOuvert && !ouvert) {
				precedendemmentOuvert = $state.snapshot(ouvert)
				faire()
			}
		})
	})
}
