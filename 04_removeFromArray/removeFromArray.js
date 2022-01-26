const removeFromArray = function() {
    const array = Array.from(arguments)[0];
    const result = [];

    array.forEach(element => {
        if(!Array.from(arguments).includes(element)) {
            result.push(element);
        }
    });

    return result
};

// Do not edit below this line
module.exports = removeFromArray;
