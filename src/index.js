let playerButton = document.getElementById("add-player")

playerButton.addEventListener("click", function(event){
	numPlayers(myDeck)
})

function numPlayers(myDeck){
	//while loop while arrays are < 5 
	//loop over the cards array
	console.log(myDeck)
	 let playerNum = Math.floor(Math.random() * 6) + 2 
	 let p1Cards = [];
	 let p2Cards = [];
	 i = 0;
	 while (i < 5){
			p1Cards.push(myDeck[i])
			p2Cards.push(myDeck[i + 1])
			i += 1
	 }
	 console.log(p1Cards)
	 console.log(p2Cards)
	 let allHands = []
	 allHands.push(p1Cards,p2Cards)
	 
	winner(allHands)

}

function winner(allHands){
	//now need to iterate over the hands and find the total of the value
	//compare the values for the hands/
	//return the winners
	console.log(allHands)
	totalValues(allHands[0])
}

function totalValues(hand){
	let total = 0;
	let values = []
	//iterate over the array of hashes which 
	for (let i=0; i < hand.length; i++){
		for (const [key, value] of Object.entries(hand[i])) {
			//total += value
			values.push(value)
		}
	}
	console.log(values)
	//i know the number values are at the beginning of the array
	//i am going to iterate over the array and skip 2 everytime and add those numbs to the sum
	//then return the sum
	for (let i =0; i < values.length; i++){
		total += values[i]
		i = i + 2
	}
	return total
	
}

function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
	}

    return shuffle(cards)
}

let myDeck = deck()
picturesOfCards()

function picturesOfCards() {

	for(var i=0; i < myDeck.length; i++){
        let card = document.createElement('div');
        let collection = document.getElementById("collection")
        
		card.className = 'card';

		if(myDeck[i].suit == 'Diamonds'){
			var ascii_char = '♦';
		} else {
			var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
		}

		card.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
        
        collection.appendChild(card)
	}
}

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
	
};


function playerHand(){
	// a player can have 5 cards
	//The Player should have a Hand that can hold 5 Cards from the Deck.
// The Player's Hand should be sorted by suit and then by point value
// The Player's Hand should be able to be totaled by point value.
	let suits = ["Hearts", "Diamonds", "Clubs", "Spades"]


}

function drawACard(){
	//need to choose a random card
	//add that card to the players hand
}