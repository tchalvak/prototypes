<?php

assert(0 == '0ABC'); //returns TRUE
assert(0 == 'ABC'); //returns TRUE (even without starting integer!)
assert(0 == 'AsaldkfjasldkfjaslkdjfasldkjfBC'); //returns TRUE (even without starting integer!)
assert(0 === '0ABC'); //returns NULL/issues Warning as a strict comparison
