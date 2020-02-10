var deck = [
    { point: 1, suit: 'diamonds', imageURL: 'images/AD.jpg' },
    { point: 2, suit: 'diamonds', imageURL: 'images/2D.jpg' },
    { point: 3, suit: 'diamonds', imageURL: 'images/3D.jpg' },
    { point: 4, suit: 'diamonds', imageURL: 'images/4D.jpg' },
    { point: 5, suit: 'diamonds', imageURL: 'images/5D.jpg' },
    { point: 6, suit: 'diamonds', imageURL: 'images/6D.jpg' },
    { point: 7, suit: 'diamonds', imageURL: 'images/7D.jpg' },
    { point: 8, suit: 'diamonds', imageURL: 'images/8D.jpg' },
    { point: 9, suit: 'diamonds', imageURL: 'images/9D.jpg' },
    { point: 10, suit: 'diamonds', imageURL: 'images/10D.jpg' },
    { point: 10, suit: 'diamonds', imageURL: 'images/JD.jpg' },
    { point: 10, suit: 'diamonds', imageURL: 'images/QD.jpg' },
    { point: 10, suit: 'diamonds', imageURL: 'images/KD.jpg' },
    { point: 1, suit: 'hearts', imageURL: 'images/AH.jpg' },
    { point: 2, suit: 'hearts', imageURL: 'images/2H.jpg' },
    { point: 3, suit: 'hearts', imageURL: 'images/3H.jpg' },
    { point: 4, suit: 'hearts', imageURL: 'images/4H.jpg' },
    { point: 5, suit: 'hearts', imageURL: 'images/5H.jpg' },
    { point: 6, suit: 'hearts', imageURL: 'images/6H.jpg' },
    { point: 7, suit: 'hearts', imageURL: 'images/7H.jpg' },
    { point: 8, suit: 'hearts', imageURL: 'images/8H.jpg' },
    { point: 9, suit: 'hearts', imageURL: 'images/9H.jpg' },
    { point: 10, suit: 'hearts', imageURL: 'images/10H.jpg' },
    { point: 10, suit: 'hearts', imageURL: 'images/JH.jpg' },
    { point: 10, suit: 'hearts', imageURL: 'images/QH.jpg' },
    { point: 10, suit: 'hearts', imageURL: 'images/KH.jpg' },
    { point: 1, suit: 'clubs', imageURL: 'images/AC.jpg' },
    { point: 2, suit: 'clubs', imageURL: 'images/2C.jpg' },
    { point: 3, suit: 'clubs', imageURL: 'images/3C.jpg' },
    { point: 4, suit: 'clubs', imageURL: 'images/4C.jpg' },
    { point: 5, suit: 'clubs', imageURL: 'images/5C.jpg' },
    { point: 6, suit: 'clubs', imageURL: 'images/6C.jpg' },
    { point: 7, suit: 'clubs', imageURL: 'images/7C.jpg' },
    { point: 8, suit: 'clubs', imageURL: 'images/8C.jpg' },
    { point: 9, suit: 'clubs', imageURL: 'images/9C.jpg' },
    { point: 10, suit: 'clubs', imageURL: 'images/10C.jpg' },
    { point: 10, suit: 'clubs', imageURL: 'images/JC.jpg' },
    { point: 10, suit: 'clubs', imageURL: 'images/QC.jpg' },
    { point: 10, suit: 'clubs', imageURL: 'images/KC.jpg' },
    { point: 1, suit: 'spades', imageURL: 'images/AS.jpg' },
    { point: 2, suit: 'spades', imageURL: 'images/2S.jpg' },
    { point: 3, suit: 'spades', imageURL: 'images/3S.jpg' },
    { point: 4, suit: 'spades', imageURL: 'images/4S.jpg' },
    { point: 5, suit: 'spades', imageURL: 'images/5S.jpg' },
    { point: 6, suit: 'spades', imageURL: 'images/6S.jpg' },
    { point: 7, suit: 'spades', imageURL: 'images/7S.jpg' },
    { point: 8, suit: 'spades', imageURL: 'images/8S.jpg' },
    { point: 9, suit: 'spades', imageURL: 'images/9S.jpg' },
    { point: 10, suit: 'spades', imageURL: 'images/10S.jpg' },
    { point: 10, suit: 'spades', imageURL: 'images/JS.jpg' },
    { point: 10, suit: 'spades', imageURL: 'images/QS.jpg' },
    { point: 10, suit: 'spades', imageURL: 'images/KS.jpg' }
]
//shuffle deck
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
let newDeck = shuffle(deck)
let limitOp = false
// console.log(newDeck)
let dealerCards = []
let playerCards = []
let dealerContainer = document.getElementById('dealer-hand')
let playerContainer = document.getElementById('player-hand')
let messageNode = document.getElementById('messages')
let playerPoints = document.getElementById('player-points')
let dealerPoints = document.getElementById('dealer-points')

function dealCards(player) {
    let oldCard = document.getElementById('img')
    oldCard.remove()
    let newCard = document.createElement('img')
    card = newDeck.pop()
    newCard.setAttribute("src", card.imageURL)
    // console.log(newCard)
    if (player == "dealer") {
        dealerContainer.append(newCard)
        dealerCards.push(card)
        console.log('dealer')
    }
    else if (player == "player") {
        playerContainer.append(newCard)
        playerCards.push(card)
        console.log('player')
    }
    limitOp = true
}
function hitPlayer() {
    if (playerCards.length > 1) {
        let anotherCard = document.createElement('img')
        card = newDeck.pop()
        anotherCard.setAttribute("src", card.imageURL)
        playerContainer.append(anotherCard)
        playerCards.push(card)

    }
}
function calculatePoints(person) {
    if (person == "player") {
        let playerCardsCalc = playerCards.map(function (e) {
            return e.point
        })
        console.log(playerCardsCalc)
        var sumOfPlayer = playerCardsCalc.reduce(function (a, b) {
            return a + b
        }, 0);
        console.log(sumOfPlayer)
        playerPoints.append(sumOfPlayer)
    }

    else if (person == "dealer") {
        let dealerCardsCalc = dealerCards.map(function (e) {
            return e.point
        })
        console.log(dealerCardsCalc)
        var sumOfDealer = dealerCardsCalc.reduce(function (a, b) {
            return a + b
        }, 0);
        console.log(sumOfDealer)
        dealerPoints.append(sumOfDealer)
        // if (sumOfDealer > 21) {
        //     console.log('dealer busted')
        // }

    }
}


document.getElementById("btnDeal").addEventListener("click", function (e) {
    // console.log('deal cards')
    dealCards("dealer")
    dealCards("player")
    dealCards("dealer")
    dealCards("player")
    calculatePoints("player")
    calculatePoints("dealer")
});
document.getElementById("btnHit").addEventListener("click", function (e) {
    hitPlayer()
    calculatePoints("player")
});
document.getElementById("btnStand").addEventListener("click", function (e) {
    console.log('stand and run test')
    //
});