const reverseString = function(str) {
    const myArray = [];
    for(let i = 0; i < str.length; i++) {
        myArray[i] = str[str.length-1-i];
    }
    return myArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
