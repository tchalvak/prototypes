<?php


//  A stack of cool things
class ChillStack extends SplStack
{

	function render(){
		$out = null;
		foreach($this as $layer){
			$out .= $this->toString();
		}
		return $out;
	}

	function __toString(){
		return $this->render();
	}

	// Reverse the functioning of the stack
	function makeStackFIFO(){
		$this->setIteratorMode(
    		SplDoublyLinkedList::IT_MODE_FIFO|SplDoublyLinkedList::IT_MODE_KEEP
		);
	}
}

$ice = new ChillStack();

$ice->push('first');
$ice->push('kings');
$ice->push('ninja');
$ninja = $ice->pop();
assert('ninja' === $ninja);
assert(2 === count($ice));
assert('kings' === $ice->top());
assert(false === $ice->isEmpty());
$ice->push('datastructures');
$ice->pop(); // No.
$ice->push('spirits');
assert('spirits' === $ice->top());
$ice->makeStackFIFO();
assert('first' === $ice->top());