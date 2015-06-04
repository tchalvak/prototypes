<?php
// Procedural only because it's such a trivial case.

// Output for each number
function fizz($num){
    $extra = '';
    if(($num % 3) === 0){
        $extra .= 'Fizz';
    }
    if(($num % 5) === 0){
        if($extra !== ''){ // Add a space between the fizz and buzz if necessary
            $extra .= ' ';
        }
        $extra .= 'Buzz';
    }
    return $num.$extra;
}

// Assert that the fizz function works as expected.
assert(fizz(1) === "1");
assert(fizz(3) === "3Fizz");
assert(fizz(5) === "5Buzz");
assert(fizz(15) === "15Fizz Buzz");
assert(fizz(52) === "52");
assert(fizz(90) === "90Fizz Buzz");
assert(fizz(99) === "99Fizz");
assert(fizz(82) === "82");
assert(fizz(100) === "100Buzz");

// Concat the output for 1-100
$out = '';
for($i = 1;$i<=100;++$i){
    $out .= fizz($i)."\n";
}

// Actually output the final string
echo $out;
