'use strict'
const SPADES=0;
const CLUBS=1;
const HEARTS=2;
const DIAMONDS=3;


function createCard(suite, rank){
const suiteSymbol=['\u2660','\u2663','\u2665','\u2666'];

return `${suiteSymbol[suite]} ${rank}`;


}

console.log(createCard(HEARTS, 10));

const deck=[];

for(let rank=1; rank<14;rank++){
    deck.push(createCard(SPADES, rank));
    deck.push(createCard(CLUBS, rank));
    deck.push(createCard(HEARTS, rank));
    deck.push(createCard(DIAMONDS, rank));

}
console.log(deck);

for(let i=0; i<deck.length; i++){
    const indA= Math.floor(Math.random()* deck.length);
    const indB= Math.floor(Math.random()* deck.length);
    [deck[indA],deck[indB]]=[deck[indB],deck[indA]];
}
console.log(deck);

const janeCard=deck.pop();
const mikeCard=deck.pop();

console.log('Jane takes ' ,janeCard);
console.log('Mike takes ' ,mikeCard);
const jParts=janeCard.split(' ');
// console.log(jParts);
const jRank= +jParts[1];
const mParts=mikeCard.split(' ');
// console.log(mParts);
const mRank= +mParts[1];

if(jRank>mRank){
    console.log('Jane wins');
}else if(mRank>jRank){
    console.log('Mike wins');
}else{
    console.log('It\'s a tie')

}