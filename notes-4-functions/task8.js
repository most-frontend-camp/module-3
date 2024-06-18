function filter(array, predicate){
    const emptyArray = [];

    for (let i = 0; i < array.length; i++) {
        if(predicate(array[i])){
            emptyArray.push(array[i]);
        }
    }
    return emptyArray;
}


//

console.log(filter([-3, -2, -1, 0, 1, 2, 3], (num) => num > 0)); // [1, 2, 3]

console.log(filter(["dog", "wolf", "by", "family", "eaten", "camping"], (str) => str.length <= 5)); // ["by", "dog", "wolf", "eaten"]