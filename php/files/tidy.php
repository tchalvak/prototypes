<?php
$tidy = new tidy();
$tidy->parseFile('tangent_parados.html');

$tidy->cleanRepair();

if(!empty($tidy->errorBuffer)) {
        echo "The following errors or warnings occurred:\n";
            echo $tidy->errorBuffer;
}
?>
