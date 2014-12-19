// RoyRonalds FizzBuzz variation
// Write out whatever
function footerWrite(stuff){
    if(typeof(stuff) === 'string'){
        var out = stuff;
    } else {
        var out = JSON.stringify(stuff);
    }
    /*
    var footer = document.getElementsByTagName('footer')[0];
    footer.innerHTML = footer.innerHTML + out;
    */
    console.dir(out);
}

// Assert that something is true.
function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

var output = '';
for(i=1;i<101;i++){
    if(output) {
        output += "       ";
        
    }
    var modified = 0;
    if(i%5 === 0){
        output += 'Ronalds';
        modified = 1;
    }
    if(i%3 === 0){
        output  += 'Roy';
        modified = 1;
    }
    if(!modified){
        output += i;
    }
}

footerWrite(output);

// Expected results
var beginningExpected, endingExpected;
beginningExpected = "1 \
2 \
Roy \
4 \
Ronalds \
Roy \
7 \
8 \
Roy \
Ronalds \
11 \
Roy \
13 \
14 \
RonaldsRoy \
16 \
17 \
Roy \
19 \
Ronalds";
endingExpected = " \
Roy \
Ronalds \
86 \
Roy \
88 \
89 \
RonaldsRoy \
91 \
92 \
Roy \
94 \
Ronalds \
Roy \
97 \
98 \
Roy \
Ronalds";
// Test results
// Write the outcome to the output tag.
function outcomeDisplay(message){
    /*var output = document.getElementsByTagName('output')[0];
    output.innerHTML = output.innerHTML + message + "\n";
    */
    console.dir(message);
}
// Normalize whitespace
function normalize(dirty){
    return dirty.replace(/\s+/g, " ").trim();
}
// Test that expectations and output match
function testExpectations(output, beginningExpected, endingExpected){
    var normalizedOut = normalize(output)
    var normalizedStart = normalize(beginningExpected);
    var normalizedEnd = normalize(endingExpected);
    var matchFinder = function(expected, actual){
        return (actual.indexOf(expected) > -1); // regExp object didn't work right
    }
    if(!matchFinder(normalizedStart, normalizedOut)){
        outcomeDisplay("Bad: Output start did not match expectation!");
    } else {
        outcomeDisplay('Good: Test found same starting string.');
    }
    if(!matchFinder(normalizedEnd, normalizedOut)){
        outcomeDisplay('Bad: Output end did not match expectation!');
    } else {
        outcomeDisplay('Good: Test found same ending string.');
    }
}

assert('asldfkjasdlkjkkkk'.indexOf('jkkkk') > -1, 'simple regex should match!');

testExpectations(output, beginningExpected, endingExpected);
