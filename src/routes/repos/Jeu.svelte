<script lang="ts">
	let position = $state({x: 100, y: 0});
	let direction = $state({down: false, up: false});
	let objets = $state([]);
	let speed=$state(5);
	// TODO: stocker le meilleur score
	let score = $state(0);
	let game_over=$state(false);
	function onKeyDown(e) {
		switch (e.key) {
			case "ArrowDown":	direction.down = true; break;
			case "ArrowUp": direction.up = true; break;
		}
	}
	function onKeyUp(e) {
		switch (e.key) {
			case "ArrowDown":	direction.down = false; break;
			case "ArrowUp": direction.up = false; break;
		}
	}
	function update() {
		if (game_over) {setTimeout(update, 1); return score }
		if (direction.down && position.y<window.innerHeight-50) {
			position.y += 5;
		}
		if (direction.up && position.y>0) {
			position.y -= 5;
		}
		for (let i=0; i<objets.length; i++) {
			if (objets[i].x > window.innerWidth+50) {
				objets.splice(i, 1);
				score += 1;
				i-=1
			} else {
				objets[i].x += speed;

				let wtop=position.y;
				let wbottom=position.y+50;
				let wleft=position.x;
				let wright=position.x+50;

				let otop=objets[i].y;
				let obottom=objets[i].y+50;
				let oleft=window.innerWidth-objets[i].x-50;
				let oright=window.innerWidth-objets[i].x;

				let h=false;
				let v=false;

				if (((wtop > otop) && (wtop < obottom)) || ((otop > wtop) && (otop < wbottom))) {
					v=true;
				}
				if (((wright < oright) && (wright > oleft)) || ((oright < wright) && (oright > wleft))) {
					h=true;
				}

				if (h && v) {
					game_over=true;
				}
			}
		}
		setTimeout(update, 1);
	}
	function add_ob() {
		objets.push({x: 0, y: Math.floor(Math.random()*window.innerHeight)})
		setTimeout(add_ob, Math.floor(Math.random()*300));
	}
	add_ob()
	update()
</script>

{#if game_over}
<h1>Game Over !</h1>
<h2>Score: {score}</h2>
<button onclick={() => {game_over=false; objets=[]; score=0}}>rejouer</button>
{:else}
<div class="game">
<h1>{position.x} {position.y}</h1>
<h1>{objets.length}</h1>
<h1>{score}</h1>
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww3.nd.edu%2F~ljordan%2Flinux%2Fimages%2Ftuxwhitebg.jpg&f=1&nofb=1&ipt=82e9c2c669df3b3198f68402d7d17830b11aec84ee12bae4f15a6e16f5c7be04&ipo=images" alt="Tux" class="tux"/>

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fwindows-11%2Flogo-windows-11-icon-512.png&f=1&nofb=1&ipt=30fd6dbbc43d95d8d1a7fa1663c6bf5caaa9b4fcfa049f6af7d82ce62713ef1b&ipo=images" style="--x: {position.x}px; --y: {position.y}px" class="windows" alt="Windows"/>

{#each objets as objet}
<p class="ob" style="--x: {objet.x}px; --y: {objet.y}px;">Linux</p>
{/each}

</div>
{/if}

<style>
img.tux {
	position: absolute;
	right: 0;
	top: 0;
	width: 60%;
	margin: 0;
}
div.game {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	margin: 0;
}
img.windows {
	width: 50px;
	height: 50px;
	position: absolute;
	top: var(--y);
	left: var(--x);
}
p.ob {
	width: 50px;
	height: 50px;
	color: white;
	background-color: black;
	position: absolute;
	top: var(--y);
	right: var(--x);
	margin: 0;
}
</style>

<svelte:window onkeydown={onKeyDown} onkeyup={onKeyUp} />
