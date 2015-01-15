<?php
echo "ini_get('default_charset') [". ini_get('default_charset')."]<br>";

$set = ini_set('default_charset', 'utf-8');
if (!$set) {
    echo "could not set default_charset to utf-8<br>";
    echo 'default charset ini_set returned '.$set;
}
