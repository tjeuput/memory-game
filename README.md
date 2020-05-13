# memory-game

Better algo to shuffle Js Array
================================
// original reference
cons arrayCards = []

arrayCards.sort(function() {
  return .5 - Math.random();
});

Problems with this:
Here are results after 10,000 iterations on how many times each number in your array hits index [0] 
(I can give the other results too): 1 = 29.19%, 2 = 29.53%, 3 = 20.06%, 4 = 11.91%, 5 = 5.99%, 6 = 3.32% 

It's fine if you need to randomize relatively small array and not dealing with cryptographic things.
Ref:https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

ES6
===
function shuffleCard(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];

	}
	
	return array
}
