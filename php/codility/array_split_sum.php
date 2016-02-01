<?php

// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution($A) {
    // Possible solution: split the array high low above an index
    // I'm going to assume a sequential set of indexes in the beginning.
    // Cache the original array as $data
    // Get the $data length
    $len = count($A);
    $sum = array_sum($A);
    
    // Loop over the data indexes
    foreach($A as $key=>$num){
        if($key === 0){
            continue;
        }
        // For every index, loop low, summing up, and then get high by subtraction
        $low = 0;
        $i = $key;
        $i--; // Decrement once.
        while(0<=$i){
            $low += $A[$i];
            $i--;
        }
        // Math shortcut, high can be calculated.
        $high = $sum - $low - $A[$key];
        // If $high & $low are equal, return the key.
        if($high === $low){
            return $key;
        }
    }
    // Otherwise, return -1
    return -1;
}



function assert_or_print($exp, $print){
    if(!$exp){
        echo "\nAssertion failed on value: ".$print."\n";
    } else {
        echo '.';
    }
}

assert_or_print(solution([1, 2, 1]) === 1, solution([1, 2, 1]));
assert_or_print(solution([1, 2, 3, 4, 5, 10]) === 4, solution([1, 2, 3, 4, 5, 10]));
assert_or_print(solution([5, 5, 5, 4, 15]) === 3, solution([5, 5, 5, 4, 15]));