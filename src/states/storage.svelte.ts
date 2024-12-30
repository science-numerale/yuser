export default function localStorageState<T>(key: string, def: T): T {
	let stated = $state(JSON.parse(localStorage.getItem(key) || JSON.stringify(def)))

	$effect.root(() => {
		$effect(() => {
			localStorage.setItem(key, JSON.stringify(stated))
		})
	})

	return stated
}
