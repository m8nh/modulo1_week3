let str = "The Quick Brown Fox"
let ans = str.split("").map(function (c) {
    return c==c.toUpperCase()
    ? c.toLowerCase()
        : c.toUpperCase()
}). join("")
 console.log(ans)