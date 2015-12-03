<?php
foreach (range(1, 100) as $number) {

    echo $number;

    if ($number % (3 * 5) == 0) {

        echo " Fizz Buzz";

    } else if ($number % 3 == 0) {

        echo " Fizz";

    } else if ($number % 5 == 0) {

        echo " Buzz";

    }

    echo "\n";

}




