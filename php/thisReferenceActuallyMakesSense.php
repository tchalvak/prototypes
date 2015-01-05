<?php

$a = array(1, 2, 3, 4);

foreach ($a as &$b) {
$b *= $b;
}

print_r($a);

?>
