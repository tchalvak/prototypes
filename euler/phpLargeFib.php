<?php

// Get the largest Fib beyond a certain number.
function largestFib($n){
	$memo = array();
	return function($n) use ($memo){
	    if(isset($memo[$n])){
	    	return $memo[$n];
	    } else {
	    	return $memo[$n] = ($n > 1? largestFib($n-1) + largestFib($n-2) : $n);
	    }
	};
}

foreach($argv as $index=>$input){
	if($index > 0){
		$fn =largestFib($input); 
		echo $fn();
	}
}