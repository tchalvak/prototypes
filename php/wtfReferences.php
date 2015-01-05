<?php
$a = array('a', 'b', 'c', 'd');

foreach ($a as &$v) { }
foreach ($a as $v) { }

print_r($a);
?>
