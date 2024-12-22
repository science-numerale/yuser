let cheats = $state(JSON.parse(localStorage.getItem("cheats") || JSON.stringify({ enabled: false })))

$effect.root(() => {
	$effect(() => {
		localStorage.setItem("cheats", JSON.stringify(cheats))
	})
})

export default cheats
