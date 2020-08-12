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

    return cards;
}

let myDeck = deck()
pictures()

function pictures() {

  

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