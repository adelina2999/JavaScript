function countDaysUntilXmas() {
    let minute = 60 * 1000
    let hour = minute * 60
    let day = hour * 24
    let today = new Date()
    let nextXmas = new Date()
    nextXmas.setMonth(11)
    nextXmas.setDate(25)
    if (today.getMonth() == 11 && today.getDate() > 25) {
        nextXmas.setFullYear(nextXmas.getFullYear() + 1)
    }
    var diff = nextXmas.getTime() - today.getTime()
    diff = Math.floor(diff/day)
    return diff
}
let x = ( "You have " + countDaysUntilXmas()  + " days until Christmas." );
console.log(x);
