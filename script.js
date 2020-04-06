const car = {  
    brand: 'Ford',  
    model: 'Fiesta',  
    start: function() {
        console.log(`Started ${this.brand} ${this.model}`)  
    }
}
car.start()
