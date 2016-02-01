<?php
function solution($A) {
    $best_depth = -1;
    $original = $A;
    // Ok, so the goal is to find a low number surrounded by higher nums on both sides, and over the course of the array, return the "deepest" one.
    // And deepness is the least deepness on either side.
    // Unclear whether null is deep in any way.
    
    // So take the current index and walk down and up looking for pits
    // And take the "depth" is the shallowest of either depths on either side.
    // So for each number, you iterate down to find it's max depth, and iterate up to find it's max depth
    // And take the lowest(min) of either max.
    foreach($original as $key=>$num){
        $low_depth = 0;
        $high_depth = 0;
        // left on the list finding the most depth
        foreach($A as $key2=>$num2){
        	if($key2<$key){
        		$low_depth = max($low_depth, $num2 - $num);
        	} elseif($key2>$key){
        		$high_depth = max($high_depth, $num2 - $num);
        	}
        	$depth = min($low_depth, $high_depth);
        }
        if($depth>0){
        	$best_depth = max($best_depth, $depth);
        }
    }
    return $best_depth;
    // TODO: Can't assume that the indexes are sequential in the final implementation.
}

function assert_or_print($exp, $print){
    static $c;    $c++;     if(!$exp){
        echo "Assertion ".$c." failed on value: ".$print."\n";
    } else {         echo '.'."\n";     }
}

// Let's set up some failing tests.
assert_or_print(solution([0, -5, 0]) === 5, solution([0, -5, 0]));
assert_or_print(solution([1, 1, 1]) === -1, solution([1, 1, 1]));
assert_or_print(solution([1, -7, 0]) === -7, solution([1, -7, 0]));
assert_or_print(solution([-3, -10, -9]) === 1, solution([-3, -10, -9]));
assert_or_print(solution([0, 1, 3, -2, 0, 1, 0, -3, 2, 3]) === 4, solution([0, 1, 3, -2, 0, 1, 0, -3, 2, 3]));