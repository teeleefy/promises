// ## **Part 2: Deck of Cards**
// 1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
async function firstDeckData (){ 
        let data = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
        console.log(`ASYNC: ${data.data.cards[0].value} of ${data.data.cards[0].suit}`);
}

firstDeckData();




  // 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the **same** deck.
    
    // Once you have both cards, ***console.log*** the values and suits of both cards.

async function drawTwo(){
    let newDeck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    let deckId = newDeck.data.deck_id;
    let firstDraw = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let secondDraw = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    console.log(`First Card: ${firstDraw.data.cards[0].value} of ${firstDraw.data.cards[0].suit}. Second Card: ${secondDraw.data.cards[0].value} of ${secondDraw.data.cards[0].suit}.`);
}

drawTwo();




// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

// Here’s how this might look (with styling added):




let cards;

async function fullDeck (){
    let deckData = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`);
    cards = deckData.data.cards;
    console.log(cards);
} 

let cardCount = 0;
let rotation =[0, 30, -30, 0, 45, -45];
let index = 0;
async function showCard(){
    await fullDeck();
    if (cardCount < 52){
    console.log('clicked button');
    let num = cardCount;
    // $('#cards').append(`<li>${cards[num].value} of ${cards[num].suit}</li>`); 
    $('#show_cards').append(`<img class="card" src=${cards[num].image} style='transform:rotate(${rotation[index]}deg); z-index=${cardCount};'></img>`);
    cardCount+=1;
    if (index < 5){
    index +=1;}
    else{
        index = 0;
    }
    }
    else{
        alert('Deck is empty.')
    }
}


$('#get_card').on('click', showCard)

