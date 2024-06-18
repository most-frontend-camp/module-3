function numArgs1(...args){
    return args.length;
}
function numArgs(){
    let count = 0;
    while(arguments[count] !== undefined){
        count++;
    }
    return count;
}



console.log(numArgs()) // 0

console.log(numArgs("foo")) // 1

console.log(numArgs("foo", "bar")) // 2

console.log(numArgs(true, false)) // 2

console.log(numArgs({})) // 1