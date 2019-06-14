var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha) // to get mocha running

function something(){
    return true
}

// Test group
describe('Some Functionality', function() {
  it('should find an int', function() {
    assert(something())
  })
})

mocha.run()

/**
If you want to read input
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('What do you want to do?: ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "exit") rl.close();
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});

 */
