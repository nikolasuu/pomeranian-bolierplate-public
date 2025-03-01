export function formatTime(time) {
  const timeInSeconds = Math.floor(time / 1000);
  const timeInMinutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.round(timeInSeconds % 60)
    .toString()
    .padStart(2, '0');
  //console.log(time, timeInSeconds, timeInMinutes, seconds);
  return `${timeInMinutes}:${seconds}`;
}

export function getAlphabet(limit) {
  const startASCII = 65;
  //Litera pierwsza alfabetu A
  const endASCII = 90;
  //Litera  ostatnia alfabetu Z
  let maxSize = endASCII - startASCII + 1;
  maxSize = limit > 0 && limit <= maxSize ? limit : maxSize;

  return Array(maxSize)
    .fill(0)
    .map((_, index) => index + startASCII)
    .map((characterCode) => String.fromCharCode(characterCode));
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
