function numberReverse(x) {
    return (
        parseFloat(
            x 
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(x)
        
    )
}

console.log(numberReverse(32242))
