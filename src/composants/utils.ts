export function mélanger<T>(arr: T[]): T[] {
	// ChatGPT
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
	}
	return arr;
}

export function listeStrVersDisctStr(arr: string[]) {
  let dict = {};
  arr.forEach(item => {
    dict[item] = item;
  });
  return dict;
}
