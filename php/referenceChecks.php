<?php
// create an object and a copy as well as a reference to the variable
$a = new stdclass;
$b = $a;
$c = &$a;

// Do something with the object
$a->foo = 42;
var_dump($a->foo);
var_dump($b->foo);
var_dump($c->foo);

// Now change the variable itself
$a = 42;
var_dump($a);
var_dump($b);
var_dump($c);
?>
