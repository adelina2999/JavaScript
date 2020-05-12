var a = {
    val: [1, 2, 3],

    //probably correct!
    toJSON: function() {
        return this.val.slice(1)
    }
}

var b = {
    val: [1, 2, 3], 

    //probably incorrect!
    toJSON: function() {
        return '[' +
        this.val.slice(1).join() +
        ']'
    }
}
console.log(JSON.stringify(a))
console.log(JSON.stringify(b))

/*in the second call, we stringified the returned string rather than the array itself
wich was probably not what we wanted to*/
