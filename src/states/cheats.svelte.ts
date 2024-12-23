type Cheats = {
	enabled: boolean
	noTutorials: boolean
};

let def: Cheats = { enabled: false, noTutorials: false };

let cheats = $state(JSON.parse(window?.localStorage.getItem("cheats") || JSON.stringify(def)))

$effect.root(() => {
	$effect(() => {
		localStorage.setItem("cheats", JSON.stringify(cheats))
	})
})

export default cheats
