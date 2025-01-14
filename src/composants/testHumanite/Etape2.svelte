<script lang="ts">
	let {
		validé = $bindable(),
	}: {
		validé: boolean;
	} = $props();

	let c = $state("Un ver");

	$effect(() => {
		validé = c === "";
	});

	let options = [
		{
			url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Worm_heraldic.svg",
			label: "Un ver",
		},
		{
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Drinkware.jpg/411px-Drinkware.jpg",
			label: "Un verre",
		},
		{
			url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Color_icon_green.svg",
			label: "",
		},
		{
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Grote_Markt_in_Antwerpen.jpg/800px-Grote_Markt_in_Antwerpen.jpg",
			label: "Anvers",
		},
		{
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Panneau_direction_Minster_Yard_York_1.jpg/800px-Panneau_direction_Minster_Yard_York_1.jpg",
			label: "Vers",
		},
		{
			url: "https://i.ytimg.com/vi/Jwhu2ObFoAo/maxresdefault.jpg",
			label: "Un vers",
		},
	];
</script>

<h1>Trouver l'intru</h1>
<div>
	<div style="display: flex; flex-wrap: wrap;">
		{#each options as option}
			<div>
				<input type="radio" name="vères" value={option.label} bind:group={c} />
				<figure>
					<img height="100" src={option.url} alt={option.label} />
					<figcaption>{option.label}</figcaption>
				</figure>
			</div>
		{/each}
	</div>
</div>
