<?php
// Procedural code just because it's such a trivial case.

// FizzBuzz the result for each number
function fizz($num){
        $res = '';
            if(!($num % 3)){
                        $res .= 'Fizz';
                            }
            if(!($num % 5)){
                        $res .= 'Buzz';
                            }
            if('' === $res){
                        $res .= "$num"; // Number as string
                            }
            return $res;
}

// Assert that the fizz function works as expected.
assert(fizz(1) === "1");
assert(fizz(3) === "Fizz");
assert(fizz(5) === "Buzz");
assert(fizz(15) === "FizzBuzz");
assert(fizz(52) === "52");
assert(fizz(90) === "FizzBuzz");
assert(fizz(99) === "Fizz");
assert(fizz(82) === "82");
assert(fizz(100) === "Buzz");

// Concat the output from 1-100
$out = '';
for($i = 1;$i<=100;++$i){
        $out .= fizz($i)."\n";
}

// Actually output the final string
echo $out;
