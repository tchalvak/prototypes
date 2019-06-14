var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha) // to get mocha running

function search(left, right, target){
    let middle;
    const unit = 1
    while(left <= right){
        middle = Math.floor((left + right) / 2)
        if((middle*middle) < target){
            left = middle + unit
        } else if ((middle*middle) > target){
            right = middle - unit
        } else {
            return middle
        }
    }
    return middle
    
}

function searchFloat(left, right, target){
    let middle;
    const unit = 1
    while(left !== right){
        middle = Math.ceil((left + right) / 2)
        if((middle*middle) > target){
            right = middle - unit
        } else {
            left = middle + unit
        }
    }
    if((middle*middle) === target){
        return left
    } else {
        return undefined
    }
}


function squareRoot(x){
    if(x < 0){
        throw new Error('Imaginary number')
    }
    if(x === 0){
        return 0
    }

    return search(0, x, x)
}

// Test group
describe('Square root', function() {
  it('should be able to calculate a sqrt', function() {
    assert.deepEqual(squareRoot(0), 0)
    assert.deepEqual(squareRoot(4), 2)
    assert.deepEqual(squareRoot(1), 1)
    assert.deepEqual(squareRoot(25), 5)
    assert.deepEqual(squareRoot(36), 6)
    assert.deepEqual(squareRoot(81), 9)
    assert.deepEqual(squareRoot(9999*9999), 9999)
  })
  it('should throw an error on imaginary numbers', ()=>{
      assert.throws(()=>{squareRoot(-1)})
      assert.throws(()=>{squareRoot(-1000)})
  })
  it('should allow for floats', ()=>{
      assert.deepEqual(squareRoot(6), 2.44948974278)
      assert.deepEqual(squareRoot(41), 6.40312423743)
  })
})


mocha.run()


