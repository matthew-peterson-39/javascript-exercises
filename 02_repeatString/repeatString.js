const repeatString = function(string, count) {
    if (count === 0) {
        return '';
    }
    if (count === -1) {
        return "ERROR";
    }
    else {
        for(let i = 0; i < count - 1; i++ ) {
            newString += string
        }
    return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
