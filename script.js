const car = {  
    brand: 'Ford', 
    model: 'Fiesta',  
    start: function() {
        let a = 5
        return 'Started'  
    },
    array: [1, 2, 3],
    stop: function() {
        return 'Stoped'
    },
    availableColors: {
        red: 'in stock',
        blue: 'not in stock'
    }
}

car.start()

console.log(car.brand)
console.log(car.start())
console.log(car.stop())
console.log(car.availableColors.red)
