let bankAccountBalance = prompt('What is your bank account balance?')
//prices
const TAX_RATE = prompt('Your state tax')
const PHONE_PRICE = prompt('Phone price')
const ACCESSORY_PRICE = prompt('Accessory price')
const SPENDING_THRESHOLD = prompt('How much money do you want to spend?')
//number of products
let numberOfBoughtPhones = 0
let numberOfBoughtAccessories = 0

let freeBalance = bankAccountBalance - (bankAccountBalance - SPENDING_THRESHOLD)

function purchase () {
    const NUMBER_OF_PHONES_TO_BUY = Math.floor(freeBalance / valueWithTax(PHONE_PRICE))
    for(let i = 0; i <= NUMBER_OF_PHONES_TO_BUY; i++) {
        buyAPhone()
    }

    const NUMBER_OF_ACCESORIES_TO_BUY = Math.floor(freeBalance / valueWithTax(ACCESSORY_PRICE))
    for(let i = 0; i <= NUMBER_OF_ACCESORIES_TO_BUY; i++) {
        buyAnAccessory()
    }
    console.log(numberOfBoughtPhones)
    console.log(numberOfBoughtAccessories)
    console.log(freeBalance)
    console.log(bankAccountBalance)
}

function valueWithTax (productPrice) {
    productPrice = Number(productPrice)
    return (productPrice + (productPrice * TAX_RATE/100)).toFixed(2)
}

function buyAPhone() {
    const PHONE_PRICE_WITH_TAX = valueWithTax(PHONE_PRICE)
    if(freeBalance > PHONE_PRICE_WITH_TAX) {
        bankAccountBalance -= PHONE_PRICE_WITH_TAX 
        freeBalance -= PHONE_PRICE_WITH_TAX
        numberOfBoughtPhones++
    }
}

function buyAnAccessory() {
    const ACCESSORY_PRICE_WITH_TAX = valueWithTax(ACCESSORY_PRICE)
    if(freeBalance > ACCESSORY_PRICE_WITH_TAX) {
        bankAccountBalance -= ACCESSORY_PRICE_WITH_TAX
        freeBalance -= ACCESSORY_PRICE_WITH_TAX
        numberOfBoughtAccessories++
    }
}

purchase()
