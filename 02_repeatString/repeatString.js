const repeatString = function(string, count) {
    let newString = string;
    for(let i = 0; i < count - 1; i++ ) {
        newString += string
    }
    return console.log(newString);
};

repeatString("hey", count = 3);

// Do not edit below this line
module.exports = repeatString;
