const cards = document.querySelectorAll('.card');
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
]


function handleCards() {

    for (let i = 0; i < cards.length; i++) {


        cards[i].addEventListener('click', function() {

            let actives = document.querySelectorAll('.active')

            if (actives.length < 2) {
                cards[i].classList.add('active')

            } else {
                for (let k = 0; k < cards.length; k++) {

                    cards[k].classList.remove('active');

                }
            }

            if (cards[i].classList.contains('active')) {
                handleLetters();

            }

        })
    }

}

function handleLetters() {

    let actives = document.querySelectorAll('.active')

    if (actives.length == 2) {
        let first = actives[0].innerText;
        let second = actives[1].innerText;

        checkMatch(first, second);

    }


}

function checkMatch(a, b) {
    let actives = document.querySelectorAll('.active')

    if (a == b) {

        for (let i = 0; i < actives.length; i++) {

            actives[i].classList.add('matched')

        }

    }

}


function addLettersToCards() {

    shuffleArray(LETTERS);

    for (let i = 0; i < cards.length; i++) {


        let node = document.createElement("p");
        node.classList.add('card-value');
        let valueNode = document.createTextNode(LETTERS[LETTERS.length - 1])
        node.appendChild(valueNode);
        cards[i].appendChild(node);
        LETTERS.pop();
    }
}


//Shuffle Fonksiyonu
function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    //Kalan Eleman olduğu sürece
    while (0 !== currentIndex) {

        //Kalan elemanı Seç
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //Current ile değiştir
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function checkWin() {
    const matcheds = document.querySelectorAll('.matched')

    if (matcheds.length == 16) {
        alert("You've Won!");
    }

}


//Main Method
function init() {
    addLettersToCards();
    handleCards();
    checkWin();
}
init();