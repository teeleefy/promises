// ## **Part 2: Deck of Cards**
// 1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
let firstDeckDataPromise = axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1');

firstDeckDataPromise
  .then(data => console.log(`${data.data.cards[0].value} of ${data.data.cards[0].suit}`))
  .catch(err => console.log(err));





  // 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the **same** deck.
    
//     Once you have both cards, ***console.log*** the values and suits of both cards.
let twoPromises=[]; 
let newDeck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
newDeck.then(data => {
        for (let i = 1; i < 3; i++){
        twoPromises.push(axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1`))};console.log(twoPromises);
        Promise.all(twoPromises)
        .then(numArr => (
            numArr.forEach(data => console.log(`${data.data.cards[0].value} of ${data.data.cards[0].suit}`))))
            .catch(err => console.log(err));
    })
        .catch(err => console.log(err));






// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

// Here’s how this might look (with styling added):




let cards;

let fullDeckPromise = axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`);

fullDeckPromise.then(data => {cards = data.data.cards;
    console.log(cards)})
  .catch(err => console.log(err));

let cardCount = 0;
let rotation =[0, 30, -30, 0, 45, -45];
let index = 0;
function showCard(){
    if (cardCount < 52){
    console.log('clicked button');
    let num = cardCount;
    $('#cards').append(`<li>${cards[num].value} of ${cards[num].suit}</li>`); 
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

