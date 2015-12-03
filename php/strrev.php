<?php

function rev($str){
    $out = '';
    $len = strlen($str) - 1;
    while($len >= 0){
        $out .= $str[$len];
        $len--;
    }
    return $out;
}

assert('olleh' === rev('hello'));
assert('ziggurat' === rev('taruggiz'));
assert('' === rev(''));
assert('' == rev(null));
assert('' !== rev('asldkfj'));
