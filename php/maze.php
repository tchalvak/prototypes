<?php
echo <<<'NOWDOC'
<style>
span[class^="char"] {
        display: inline-block;
            width: 15px;
            height: 15px;
        }
</style>

<pre>
NOWDOC;

$i=1;
while($i<3000){
    echo (rand(0, 1)? '\\' : "/");
    if($i%50 === 0){
        echo "\n";
    }
    $i++;
}
echo "</pre>";
