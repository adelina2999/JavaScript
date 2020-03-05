function firstAndLast(string) {
    character = string.substring(1, string.length - 1);
    return (string.charAt(string.length - 1)) + character + string.charAt(0)
}

console.log (firstAndLast ('University'));
