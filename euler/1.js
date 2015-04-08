function isMultiple(n){
    return !(n%3) || !(n%5);
}

console.assert(true === isMultiple(6));
console.assert(true === isMultiple(9));
console.assert(true === isMultiple(5));
console.assert(true === isMultiple(10));
var sum = 0;
for(var i = 1;i < 1000;i++){
    if(isMultiple(i)){
        sum += i;
    }
}
console.log(sum);
