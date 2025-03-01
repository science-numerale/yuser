<script lang="ts">
	let position = $state({x: 100, y: 0});
	let direction = $state({down: false, up: false, right: false, left: false});
	let bugs = $state([]);
	let blue_screens = $state([]);
	let best = $state(0);	
	if (Number(localStorage.getItem("best"))) {
		best = Number(localStorage.getItem("best"))
	}
	let majs = $state([]);
	let score = $state(0);
	let game_over=$state(false);
	let tux = $state(window.innerWidth);
	function onKeyDown(e) {
		switch (e.key) {
			case "ArrowDown":	direction.down = true; break;
			case "ArrowUp": direction.up = true; break;
			case "ArrowRight": direction.right = true; break;
			case "ArrowLeft": direction.left = true; break;
		}
	}
	function onKeyUp(e) {
		switch (e.key) {
			case "ArrowDown":	direction.down = false; break;
			case "ArrowUp": direction.up = false; break;
			case "ArrowRight": direction.right = false; break;
			case "ArrowLeft": direction.left = false; break;
		}
	}
	function update() {
		if (game_over) {setTimeout(update, 1); return score }
		tux -= 0.5;
		if (position.x > tux) {game_over=true}
		if (direction.down && position.y<window.innerHeight-50) {
			position.y += 5;
		}
		if (direction.up && position.y>0) {
			position.y -= 5;
		}
		if (direction.right && position.x < window.innerWidth-100) {
			position.x += 5;
		}
		if (direction.left && position.x > 10) {
			position.x -= 5;
		}
		for (let i=0; i<bugs.length; i++) {
			if (bugs[i].x > window.innerWidth+50) {
				bugs.splice(i, 1);
				score += 1;
				i-=1
			} else {
				bugs[i].x += bugs[i].speed;

				let wtop=position.y;
				let wbottom=position.y+50;
				let wleft=position.x;
				let wright=position.x+50;

				let otop=bugs[i].y;
				let obottom=bugs[i].y+50;
				let oleft=window.innerWidth-bugs[i].x-50;
				let oright=window.innerWidth-bugs[i].x;

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
					if (score>best) {
						best=score;
						localStorage.setItem("best", best.toString());
					}
				}
			}
		}
		for (let i=0; i<blue_screens.length; i++) {
			if (blue_screens[i].y > window.innerHeight+100) {
				blue_screens.splice(i, 1);
				score += 1;
				i-=1
			} else {
				blue_screens[i].y += blue_screens[i].speed;

				let wtop=position.y;
				let wbottom=position.y+100;
				let wleft=position.x;
				let wright=position.x+100;

				let otop=blue_screens[i].y;
				let obottom=blue_screens[i].y+100;
				let oleft=blue_screens[i].x;
				let oright=blue_screens[i].x+100;

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
					if (score>best) {
						best=score;
						localStorage.setItem("best", best.toString());
					}
				}

			}
		}
		for (let i=0; i<majs.length; i++) {
			let wtop=position.y;
			let wbottom=position.y+50;
			let wleft=position.x;
			let wright=position.x+50;

			let otop=majs[i].y;
			let obottom=majs[i].y+10;
			let oleft=majs[i].x;
			let oright=majs[i].x+10;

			if (wleft<oleft && wright>oright && wtop<otop && wbottom>obottom) {
				majs.splice(i, 1);
				i -= 1;
				tux+=100;
				score += 10
			}
		}

		setTimeout(update, 1);
	}
	function add_bug() {
		bugs.push({x:(window.innerWidth-tux), y: Math.floor(Math.random()*window.innerHeight), speed: 3+Math.floor(Math.random()*2)})
		setTimeout(add_bug, Math.floor(Math.random()*300));
	}
	function add_bs() {
		blue_screens.push({y: -100, x: Math.floor(Math.random()*(tux)), speed: 2+Math.floor(Math.random()*3)})
		setTimeout(add_bs, Math.floor(1000+Math.random()*1000));
	}
	function add_maj() {
		majs.push({x: Math.floor(Math.random()*window.innerWidth), y: Math.floor(Math.random()*window.innerHeight)})
		setTimeout(add_maj, Math.floor(1000+Math.random()*1000));
	}
	add_maj()
	add_bs()
	add_bug()
	update()
</script>

{#if game_over}
<h1>Game Over !</h1>
<h2>Score: {score}</h2>
<h2>Meilleur score : {best}</h2>
<button onclick={() => {game_over=false; bugs=[]; blue_screens=[]; score=0; tux=window.innerWidth; majs=[]}}>rejouer</button>
{:else}
<div class="game">
<h1>{position.x} {position.y}</h1>
<h1>{bugs.length} {blue_screens.length}</h1>
<h1>{score} / {best}</h1>
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepngimg.com%2Fthumb%2Fandroid%2F69417-tux-kernel-distribution-linux-free-transparent-image-hq.png&f=1&nofb=1&ipt=a63c858c6d133b67a32d237cd6526ff5bf9d89aef400e3a767eab34a590c3f0d&ipo=images" alt="Tux" class="tux" style="--x: {tux}px"/>

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fwindows-11%2Flogo-windows-11-icon-512.png&f=1&nofb=1&ipt=30fd6dbbc43d95d8d1a7fa1663c6bf5caaa9b4fcfa049f6af7d82ce62713ef1b&ipo=images" style="--x: {position.x}px; --y: {position.y}px" class="windows" alt="Windows"/>

{#each bugs as objet}
<p class="ob" style="--x: {objet.x}px; --y: {objet.y}px;">BUG</p>
{/each}
{#each blue_screens as objet}
<p class="bs" style="--x: {objet.x}px; --y: {objet.y}px;">Windows ne répond plus</p>
{/each}
{#each majs as m}
<p class="maj" style="--x: {m.x}px; --y: {m.y}px;"> </p>
{/each}

</div>
{/if}

<style>
p.maj {
	position: absolute;
	width: 10px;
	height: 10px;
	top: var(--y);
	left: var(--x);
	background-color: green;
	margin: 0;
}
p.bs {
	position: absolute;
	width: 100px;
	height: 100px;
	top: var(--y);
	left: var(--x);
	background-color: blue;
	margin: 0;
}	
img.tux {
	position: absolute;
	left: var(--x);
	top: 0;
	height: 100%;
	margin: 0;
	background-color: black;
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
	font-size: 12px;
}
</style>

<svelte:window onkeydown={onKeyDown} onkeyup={onKeyUp} />
