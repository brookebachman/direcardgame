let playerButton = document.getElementById('add-player');

playerButton.addEventListener('click', function (event) {
	numPlayers(myDeck);
});

const suits = {
	//I gave each suit a value to assist me in sorting the cards later
	HEARTS: 1,
	DIAMONDS: 2,
	CLUBS: 3,
	SPADES: 4,
};

let input = document.getElementById("number")


function numPlayers(myDeck) {
	//while loop while arrays are < 5 because we only want 5 cards per hand
	//loop over the cards array to load the cards
	//console.log(myDeck);
	let playerNum;
	var nums = /^\d+$/
	let allHands = {};
	if (input.value && nums.test(input.value)) {
		 playerNum = parseInt(input.value)
	} else {
		console.log("chose random")
	
 playerNum = Math.floor(Math.random() * 6) + 2; }
 let numPlayers = document.getElementById("num-players")
 numPlayers.innerHTML = `There are ${playerNum} players  |`
	//console.log(playerNum, 'playernum');
	for (let i = 1; i <= playerNum; i++) {
		let hand = [];

		for (let i = 0; i < 5; i++) {
			hand.push(myDeck.shift());

			sortHand(hand);
			
		}
		
		allHands['Player ' + i] = hand;
	}
	picturesOfHands(allHands);
	//console.log(allHands, 'all hands');
	winner(allHands)
	//using .shift takes away the item in an array and allows me to take cards out of the remaining deck so that each card is unique and there are no repeats
}
	


function winner(allHands) {
	let winnerh2 = document.getElementById("winner")
	let winner = 0;
	let winnerName = ""

	//now need to iterate over the hands and find the total of the value
	//I keep a current value and if the number I am iterating over
	//compare the values for the hands
	//Math.max chooses the larger number of the 2 you give it
	//return the winners
	for (const [key, hand] of Object.entries(allHands)){

		if (totalValues(hand) > winner) {
			winner =  totalValues(hand)
			winnerName = key
		
		}


	}
	winnerh2.innerHTML = `Congratulations ${winnerName} won with ${winner} points!    `
	console.log(winner, "winner value", winnerName)
	//return 
}

function totalValues(hand) {
	let total = 0;

	//iterate over the array of hashes which
	for (let i = 0; i < hand.length; i++) {
		total = total + hand[i].value
	}
	//i know the number values are at the beginning of the array
	//i am going to iterate over the array and skip 2 everytime and add those numbs to the sum
	//then return the sum
	// for (let i = 0; i < values.length; i++) {
	// 	total += values[i];
	// 	i = i + 2;
	// }
	return total
}

function card(value, name, suit) {
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function deck() {
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	this.suits = [suits.HEARTS, suits.DIAMONDS, suits.CLUBS, suits.SPADES];
	this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 15];
	var cards = [];

	for (var s = 0; s < this.suits.length; s++) {
		for (var n = 0; n < this.names.length; n++) {
			cards.push(new card(this.values[n], this.names[n], this.suits[s]));
		}
	}

	return shuffle(cards);
}

let myDeck = deck();

function shuffle(o) {
	for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function sortHand(hand) {
	// a player can have 5 cards
	//The Player should have a Hand that can hold 5 Cards from the Deck.
	// The Player's Hand should be sorted by suit and then by point value
	// The Player's Hand should be able to be totaled by point value.
	// console.log(p1Cards, "cards for sort hand")

	function compareCards(card1, card2) {
		let suit1 = card1.suit;
		let suit2 = card2.suit;
		let val1 = card1.value;
		let val2 = card2.value;

		if (suit1 === suit2) {
			return val1 - val2;
		} else {
			return suit1 - suit2;
		}
		//here I am first sorting by suit, if the suit is the same we want to sort by value
		hand.sort(compareCards);
	}
}
function picturesOfHands(allHands) {
	let players = document.getElementById('all-players');
	players.className = 'text';
	//here I want to add text so the player knows it is their hand, I need to do it outside of the for loop because that will address every card
	//console.log(allHands)
	for (const [playerNumber1, hand] of Object.entries(allHands)) {
		let playerNumber = document.createElement('h2');
		playerNumber.innerHTML = playerNumber1;
		players.appendChild(playerNumber);

		for (var i = 0; i < hand.length; i++) {
			let card = document.createElement('div');
			console.log(hand[i].value);
			let currentCard = hand[i]
				card.className = 'card';
				if (hand[i].suit == 2) {
					var ascii_char = '♦';
				} else if (hand[i].suit == 3) {
					var ascii_char = '♣';
				} else if (hand[i].suit == 4) {
					var ascii_char = '♠';
				} else {
					var ascii_char = '♥';
				}
				card.innerHTML = '' + hand[i].name + '' + ascii_char + '';
				players.appendChild(card);
			
		}
	}
}

// function drawACard() {
// 	//need to choose a random card
// 	//add that card to the players hand
// }
