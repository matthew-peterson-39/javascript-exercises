const removeFromArray = function(array, value) {

    var arr = array;
    
    for( var i = 0; i < arr.length; i++){ 
                                   
        if ( arr[i] === value) { 
            arr.splice(i, 1); 
            i--; 
        }
    }
    return arr;

}

// Do not edit below this line
module.exports = removeFromArray;
