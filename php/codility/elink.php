<?php
function solution($A) {
    $n = sizeof($A);
    $L = array_pad(array(), $n + 1, -1);
    for ($i = 0; $i < $n; $i++) {
        $L[$i + 1] = $A[$i];
    }
    $count = 0;
    $pos = (int) (($n + 1) / 2);
    $candidate = $L[$pos];
    for ($i = 1; $i <= $n; $i++) {
        if ($L[$i] == $candidate)
            $count = $count + 1;
    }
    if ($count > $pos)
        return $candidate;
    return (-1); // Testing this function offline
}

function assert_or_print($exp, $print){
    static $c;    $c++;     if(!$exp){
        echo "Assertion ".$c." failed on value: ".$print."\n";
    } else {         echo '.'."\n";     }
}

$a = [2, 2, 2, 2, 2, 3, 4, 4, 4, 6];
$b = [1, 1, 1, 1, 50];
$c = [2, 2, 3, 4, 4, 4, 5]; // bad
$d = [4, 4, 50]; // #4 bad
$e = [0, 0, 0, 4, 4, 4];
$f = [7, 7, 7, 7];
$g = [];
$h = [1, 1, 1, 1, 3, 4, 4, 4, 4, 4]; // bad
$i = [1, 2, 3, 3, 3]; // bad

echo "\n";
assert_or_print(solution($a) === -1, solution($a));
assert_or_print(solution($b) === 1, solution($b));
assert_or_print(solution($c) === 4, solution($c)); // #3 bad
assert_or_print(solution($d) === 4, solution($d)); // bad
assert_or_print(solution($e) === -1, solution($e));
assert_or_print(solution($f) === 7, solution($f)); // #6
assert_or_print(solution($g) === -1, solution($g));
assert_or_print(solution($h) === 4, solution($h)); // bad
assert_or_print(solution($i) === 3, solution($i)); // bad
echo "\nEnd\n";