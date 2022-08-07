const cardArray = [
    
    {
        name: 'hoang',
        img: '/src/images/hoang.jpeg'
    },
    
    
    {
        name: 'hoang',
        img: '/src/images/hoang.jpeg'
    },
    
    {
        name: 'an',
        img: '/src/images/an.jpg'
    },
    
    {
        name: 'huy',
        img: '/src/images/huy.jpg'
    },
    {
        name: 'an',
        img: '/src/images/an.jpg'
    },
    
    {
        name: 'huy',
        img: '/src/images/huy.jpg'
    },
    {
        name: 'khanh',
        img: '/src/images/khanh.jpg'
    },
    {
        name: 'khanh',
        img: '/src/images/khanh.jpg'
    },
    {
        name: 'phuc',
        img: '/src/images/phuc.jpg'
    },
    {
        name: 'phuc',
        img: '/src/images/phuc.jpg'
    },
    {
        name: 'tri',
        img: '/src/images/tri.jpg'
    },
    {
        name: 'tri',
        img: '/src/images/tri.jpg'
    },
    {
        name: 'tung',
        img: '/src/images/tung.jpg'
    },{
        name: 'tung',
        img: '/src/images/tung.jpg'
    },
]
let cardsChosen = []

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', '/src/images/blank.png')
        card.setAttribute('data-id', i)
        card.setAttribute('width', 200)
        card.setAttribute('height', 200)
        card.onclick = function() {
            flipCard(card)
        }
        gridDisplay.appendChild(card)
    }
}

function flipCard(card) {
    const cardId = card.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId])

    card.setAttribute('src', cardArray[cardId].img)

    setTimeout(function unFlip() {
        card.setAttribute('src', '/src/images/blank.png')
    },200)

    setTimeout(function() {
        checkMatch(cardId)
    },200)

}

let score = 0
document.getElementById('result').innerHTML = score

let cardsChosenId = []
function checkMatch(cardId) {
    cardsChosenId.push(cardId)
    console.log(cardsChosenId)

    if (cardsChosen.length >= 2){
        if (cardsChosen[0].name === cardsChosen[1].name && cardsChosen[0] !== cardsChosen[1]) {
            alert('bingo!')
            score += 100
            document.getElementById('result').innerHTML = score
            cardsChosen = document.querySelectorAll('img')

            cardsChosen[cardsChosenId[0]].setAttribute('src', '/src/images/black.png')
            cardsChosen[cardsChosenId[0]].onclick = function() {}
            cardsChosen[cardsChosenId[1]].setAttribute('src', '/src/images/black.png')
            cardsChosen[cardsChosenId[1]].onclick = function() {}
        

            if (score >= cardArray.length * 100 / 2){
                alert('You win!')
                return
            }
        }
        cardsChosen = []
        cardsChosenId = []
    }
}

createBoard()
