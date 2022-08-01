const repeatString = function(string, count) {
    let newString = string;
    for(let i = 0; i < count - 1; i++ ) {
        newString += string
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
