var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

const generateBoard = (minX, minY, x, y)=>{
  const board = []
  for(let i = minX; i <= x; i++){
    board[i] = (new Array(y + 1 - minY)).fill(' ')
  }
  return board
}


const move = (x, y, token, board)=>{
  let res = false
  if(typeof board[x][y] === ' '){
    board[x][y] = token
    res = true
  }
  return [res, board]
}

const renderBoard = (board)=>{
  const b = board
  return `

${b[0][2]}|${b[1][2]}|${b[2][2]}
-----
${b[0][1]}|${b[1][1]}|${b[2][1]}
-----
${b[0][0]}|${b[1][0]}|${b[2][0]}

`
}

// Test moves
// Test rejections
// Test board state
// Test render
// test win conditions
// check win conditions

mocha.suite.emit('pre-require', this, 'solution', mocha) // requriement

describe('Board', function() {
  it('should have a board', function() {
    assert(Array.isArray(generateBoard(0, 0, 2, 2)))
  })
  it('should render', ()=>{
    assert(renderBoard(generateBoard(0, 0, 2, 2)).length > 0)
  })
  it('should have null moves', ()=>{
    const board = generateBoard(0, 0, 2, 2)
    assert(board[0][0] === ' ')
    assert(board[2][2] === ' ')
  })
})

describe('Moves', ()=>{
  it('should allow moves', ()=>{
    let board = generateBoard(0, 0, 2, 2)
    let res, res2
    [res, board] = move(2, 2, 'X', board)
    [res2, board] = move(0, 0, 'X', board)
    assert(res, 'Move X1 worked')
    assert(res2, 'Move X2 worked')
    assert.deepEqual(board[2][2], 'X')
    assert.deepEqual(board[0][0], 'X')
  })
  it('should reject a duplicate move', ()=>{
    let board = generateBoard(0, 0, 3, 3)
    let res
    [res, board] = move(0, 0, 'O', board)
    [res, board] = move(0, 0, 'X', board)
    assert(res === false)
    assert(board[0][0] === 'O')
  })
})

mocha.run()

let board = generateBoard(0, 0, 2, 2)
let res
[res, board] = move(0, 0, 'X', board)
[res, board] = move(1, 1, 'O', board)
console.log(renderBoard(board))