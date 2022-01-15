const sumAll = function() {
    const input = Array.from(arguments);

    let result = 0;

    input.forEach(element => {
        if(typeof element !== 'number') {
            result = 'ERROR';
        }
        if(element < 0) {
            result = 'ERROR';
        }
    });

    if(result !== 'ERROR') {
        const min = Math.min(...input);
        const max = Math.max(...input);
        for(let i = min; i <= max; i++) {
            result += i;
        }
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
