<?php

// Recursively determine the max
// Not optimized for performance
function my_max( $data ) {
	$max = null;
	if(is_array($data)){
		foreach($data as $elem){
			$new = my_max($elem); // recurse, or just return any solo int
			$max = $new > $max? $new : $max;
		}
		return $max;
	} else {
		return (int) $data;
	}
}

echo my_max( array( 1, 2, 3, 4, 5 ) ); // 5
echo my_max( array( 1, 2, array( 5, 6 ), 3, 4 )); // 6
echo my_max( array( 1, 2, array( 5, 6, 7, 89, 213, -4), 3, 4, 55, 87, 44 )); // 213
echo my_max( array( -1, -2, array( -5, -6, -7, -89, -213, -4), -3, -4, -55, -87, -44, 0 )); // 0
echo my_max( array( 1, [], null, '0random_string', "<script>alert('xss');</script>", array( 5, 7777, 7777 ), 3, 4 )); // 7777

