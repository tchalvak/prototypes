function fizz(i){
    var f = i;
    if(!(i%3)){
        f += 'Fizz';
    }
    if(!(i%5)){
        if(f !== i){
            f += ' '; // Space between.
        }
        f += 'Buzz';
    }
    return f;
}

var i = 0;
while(++i < 101){
    console.log(fizz(i));
}


console.assert(1 === fizz(1));
console.assert(2 === fizz(2));
console.assert('3Fizz' === fizz(3));
console.assert(4 === fizz(4));
console.assert('5Buzz' === fizz(5));
console.assert('15Fizz Buzz' === fizz(15));
console.assert('33Fizz' === fizz(33));
console.assert('100Buzz' === fizz(100));
