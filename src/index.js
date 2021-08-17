module.exports = function reverse(n) {
    let reverseNumber = '';
    let str = Math.abs(n).toString();
    for (let i = str.length-1; i>=0; i--){
        reverseNumber = `${reverseNumber}${str[i]}`;
    }
    return +reverseNumber;
}
