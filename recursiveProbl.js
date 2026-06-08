function factorial(n) {
    if (n == 0) {
        return 1
    }
    return n * factorial(n - 1)
}

function finhhh(n) {
    if (n == 1) {
        return 1
    }
    return n * finhhh(n - 1)
}


function reverseStr(str) {
    if (str.length == 0) {
        return ""
    }
    return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1))
}
