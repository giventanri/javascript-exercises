const reverseString = function(word) {
    let reversedString = '';
    for (let i = word.length - 1 ; i > -1; i--) {
        reversedString += word.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

