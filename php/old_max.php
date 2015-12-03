<?php

// Recursively determine the max
// Does not handle badly formed input
// Not yet optimized for performance
function my_max( $data ) {
    $max = null;
    foreach($data as $elem){
        if(!is_int($elem)){
            $max = ($new_max = my_max($elem))>$max? $new_max : $max; // Note that I would not do this normally, I would use max() instead of a >, but for this prototype...
        } else {
            $max = $elem>$max? $elem : $max;
        }
    }    
    return $max;
}

echo my_max( array( 1, 2, 3, 4, 5 ) ); // 5
echo my_max( array( 1, 2, array( 5, 6 ), 3, 4 )); // 6
echo my_max( array( 1, 2, array( 5, 6, 7, 89, 213, -4), 3, 4, 55, 87, 44 )); // 213
echo my_max( array( -1, -2, array( -5, -6, -7, -89, -213, -4), -3, -4, -55, -87, -44, 0 )); // 0
