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

function numPlayers(myDeck) {
	//while loop while arrays are < 5 because we only want 5 cards per hand
	//loop over the cards array to load the cards
	//console.log(myDeck);
	let allHands = {};
	let playerNum = Math.floor(Math.random() * 6) + 2;
	//console.log(playerNum, 'playernum');
	for (let i = 1; i <= playerNum; i++) {
		let hand = [];

		for (let i = 0; i < 5; i++) {
			hand.push(myDeck.shift());

			sortHand(hand);
		}
		picturesOfHands(allHands);
		allHands['Player ' + i] = hand;
	}
	//console.log(allHands, 'all hands');

	//using .shift takes away the item in an array and allows me to take cards out of the remaining deck so that each card is unique and there are no repeats

	winner(allHands);
}

function winner(allHands) {
	let winner = 0;
	let current = 0;
	//now need to iterate over the hands and find the total of the value
	//I keep a current value and if the number I am iterating over
	//compare the values for the hands
	//Math.max chooses the larger number of the 2 you give it
	//return the winners
	for (let i = 0; i < allHands.length; i++) {
		if (totalValues(allHands[i]) > totalValues(allHands[i + 1])) {
			current = totalValues(allHands[i]);
		} else {
			winner = Math.max(current, winner);
		}
	}

	//console.log(Math.max(current, winner));
}

function totalValues(hand) {
	let total = 0;
	let values = [];
	//iterate over the array of hashes which
	for (let i = 0; i < hand.length; i++) {
		for (const [key, value] of Object.entries(hand[i])) {
			//total += value
			values.push(value);
		}
	}

	//i know the number values are at the beginning of the array
	//i am going to iterate over the array and skip 2 everytime and add those numbs to the sum
	//then return the sum
	for (let i = 0; i < values.length; i++) {
		total += values[i];
		i = i + 2;
	}
	return total;
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
	let yourHand = document.createElement('h2');
	let hand1 = document.getElementById('hand');
	hand1.className = 'text';
	hand1.appendChild(yourHand);
	//here I want to add text so the player knows it is their hand, I need to do it outside of the for loop because that will address every card
	//console.log(allHands)
	for (const [key, values] of Object.entries(allHands)) {
		//console.log(`${key}: ${value}`);
		yourHand.innerHTML = key;
		let card = document.createElement('div');
		//here we are iterating over one hand
		//console.log(key)

		for (var i = 0; i < values.length; i++) {
			console.log(typeof values[i]);
			for (const [key2, value2] of Object.entries(values[i])) {
				console.log(`${key2}`);
				card.className = 'card';
				if (key2.suit == 2) {
					var ascii_char = '♦';
				} else if (key2.suit == 3) {
					var ascii_char = '♣';
				} else if (key2.suit == 4) {
					var ascii_char = '♠';
				} else {
					var ascii_char = '♥';
				}
				for (let i = 0; i < key2.length; i++) {
					console.log(key2[i].name);
					card.innerHTML = '' + key2[i].name + '' + ascii_char + '';
				}

				hand1.appendChild(card);
			}
		}
	}
}

// function drawACard() {
// 	//need to choose a random card
// 	//add that card to the players hand
// }
