document.addEventListener('DOMContentLoaded', () => {

//card options

let cardArray = [

{
	name: 'cat1',
	img: 'images/cat1.jpg'
},

{
	name: 'cat2',
	img: 'images/cat2.jpg'
},

{
	name: 'cat3',
	img: 'images/cat3.jpg'
},

{
	name: 'cat6',
	img: 'images/cat6.jpg'
},

{
	name: 'cat5',
	img: 'images/cat5.jpg'
},

{
	name: 'cat7',
	img: 'images/cat7.jpg'
},

{
	name: 'cat1',
	img: 'images/cat1.jpg'
},

{
	name: 'cat2',
	img: 'images/cat2.jpg'
},

{
	name: 'cat3',
	img: 'images/cat3.jpg'
},

{
	name: 'cat6',
	img: 'images/cat6.jpg'
},

{
	name: 'cat5',
	img: 'images/cat5.jpg'
},

{
	name: 'cat7',
	img: 'images/cat7.jpg'
}



]

//randomize card function
function shuffleCard(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];

	}
	
	return array
}

cardArray = shuffleCard(cardArray)
cardArray.sort()


const grid = document.querySelector('.grid')
const gpic = document.querySelector('.picture')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create board
//whats the different between let, char, var
function createBoard(){
	for(let i = 0; i < cardArray.length; i++){
		var card = document.createElement('img')
		card.setAttribute('src', 'images/end of.jpg')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	}
}

createBoard()

//showing all picture
function allPicture(){
	for(let i = 0; i < cardArray.length; i++){
		var card = document.createElement('img')
		card.src = cardArray[i].img
		gpic.appendChild(card)	
		
	} 
}

allPicture()

//check for match
function checkForMatch(){
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]
	if(cardsChosen[0] === cardsChosen[1]){
		alert('You found a match')
		cards[optionOneId].setAttribute('src', 'images/white.png')
		cards[optionTwoId].setAttribute('src', 'images/white.png')
		cardsWon.push(cardsChosen)
	} else {
		cards[optionOneId].setAttribute('src', 'images/end of.jpg')
		cards[optionTwoId].setAttribute('src', 'images/end of.jpg')
		alert('Sorry, try again')
	}
	cardsChosen = []
	cardsChosenId = []
	resultDisplay.textContent = cardsWon.length
	if(cardsWon.length === cardArray.length/2){
		resultDisplay.textContent = "Congratulation"
	}

}

//flip card
function flipCard() {
	var cardId = this.getAttribute('data-id')
	console.log(cardId)
	cardsChosen.push(cardArray[cardId].name)
	console.log(cardsChosen)
	cardsChosenId.push(cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if(cardsChosen.length === 2){
		setTimeout(checkForMatch, 500)
	}
}



})