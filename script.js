const scoreElem = document.querySelector('#score')
const coin = document.querySelector('#coin')
const buyUpgrade = document.querySelector('#buyUpgrade')
const result = document.querySelector('#result')


let score = 0
let clickValue = 1
let upgradeCost = 100

coin.addEventListener('click' , (event) => {
    score = score + clickValue 
    scoreElem.innerText = score

    showCoinValue(event.clientX, event.clientY, clickValue)
})

buyUpgrade.addEventListener('click' , () => {
    if(score >= upgradeCost) {
        score = score - upgradeCost
        clickValue = clickValue + 1
        upgradeCost = upgradeCost + 100

        scoreElem.innerText = score

        buyUpgrade.innerText = `Купить улучшение ${upgradeCost}🐹`
        
        result.innerText = `Вы купили улчшение, теперь у вас за каждый клик ${clickValue}🐹`


    } else {
        result.innerText = `У вас недостаточно средств 🐹😭`
    }

})


function showCoinValue(x,y, value) {
    const coinValueElem = document.createElement('div')
    coinValueElem,innerText = `+${value}`
    coinValueElem.className = 'coin-value'
    coinValueElem.style.position = 'absolute'
    coinValueElem.style.left = `${x}px`
    coinValueElem.style.top = `${y}px`
    coinValueElem.style.color = 'white'
    coinValueElem.style.opacity = 1
    document.body.append(coinValueElem)

    setTimeout(() => {
        coinValueElem.style.transform = 'translateY(-30px)'
        coinValueElem.style.opacity = 0
    }, 0);

    setTimeout(() => {
        coinValueElem.remove()
    }, 300);
}

