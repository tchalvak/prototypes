<?php
// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";
function high_low($data, $key){
    return [$high, $low];
}

function solution($A) {
    // code in PHP5.5
    // Run a loop comprehension.
    foreach($A as $key=>$num){
        // While running through the loop, do an interior loop to sum the high and low indexes.

        $i = $key;
        while(0<=$i){
            
        }
        // if high and low are equal, return N, otherwise return the default -1
    }
    return -1;
}

/*
For example, consider the following array A consisting of N = 8 elements:

  A[0] = -1
  A[1] =  3
  A[2] = -4
  A[3] =  5
  A[4] =  1
  A[5] = -6
  A[6] =  2
  A[7] =  1
*/
$A = [-1, 3, -4, 5, 1, -6, 2, 1];

echo solution($A);
assert(solution($A) === 1);
