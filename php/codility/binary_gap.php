<?php

// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution($N) {
    // Convert decimal to binary
    $bin = decbin($N);
    assert(is_string($bin));
    // Convert the binary to a string to treat it bit by bit
    // Set an outcome to zero
    $outcome = 0;
    $counter = 0;
    // Loop over the bits as characters in a string
    // WARNING: Not multibyte string safe!
    foreach(str_split($bin) as $char){
        if($char === '0'){
            // Increment a counter when a zero is found.
            $counter++;
            $outcome = max($outcome, $counter);
            // Take the max of the current outcome or the counter.
        } else {
            // Nullify the counter when a 1 is found.
            $counter = 0;
        }
    }

    return $outcome;
}


function assert_or_print($exp, $print){
    if(!$exp){
        echo "\nAssertion failed on value: ".$print."\n";
    } else {
        echo '.';
    }
}

assert_or_print(solution(15) === 0, solution(15));
assert_or_print(solution(20) === 2, solution(20));
echo solution(20);
