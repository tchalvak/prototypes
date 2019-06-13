var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()





mocha.suite.emit('pre-require', this, 'solution', mocha) // requriement

describe('Test suite', function() {
    it('should work', function() {
        assert(true)
    })
})

mocha.run()