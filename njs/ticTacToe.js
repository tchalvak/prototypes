var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

const generateBoard = (minX, minY, x, y, filler=' ')=>{
  const board = []
  for(let i = minX; i <= x; i++){
    board[i] = (new Array(y + 1 - minY)).fill(filler)
  }
  return board
}


const move = (x, y, token, board)=>{
  console.log(`Placing an ${token} at position ${x},${y}`)
  const allowedTokens = ['X', 'Y']
  let res = false
  if(!(allowedTokens.includes(board[x][y]))){
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

/**
 * Take a coord list like [[0,2][1,2][2,2]]
 * @return String X or Y if they all match, otherwise null
 */
const checkSameTokens = (coords, board)=>{
  let token = null;
  // Change the token if one exists
  for (let [x, y] of coords){
    if(board[x][y] === 'X' || board[x][y] === 'O'){
      if(token === null){
        token = board[x][y]
      } else {
        if(board[x][y] !== token){
          return null
        }
      }
    }
  }
  return token
}
  
const checkForWin = (board)=>{
  let win = null
  // Check the columns
  // check the rows
  // Check the diagonals
  return win
}

mocha.suite.emit('pre-require', this, 'solution', mocha) // requriement

// Test board generation
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

// Test making moves
describe('Moves', ()=>{
  it('should allow moves', ()=>{
    let board = generateBoard(0, 0, 2, 2)
    let res, res2;
    [res, board] = move(2, 2, 'X', board);
    [res2, board] = move(0, 0, 'X', board);
    assert(res, 'Move X1 worked')
    assert(res2, 'Move X2 worked')
    assert.deepEqual(board[2][2], 'X')
    assert.deepEqual(board[0][0], 'X')
  })
  it('should reject a duplicate move', ()=>{
    let board = generateBoard(0, 0, 3, 3)
    let res;
    [res, board] = move(0, 0, 'O', board);
    [res, board] = move(0, 0, 'X', board);
    assert(res === false)
    assert.deepEqual(board[0][0], 'O', `Did not work for board: ${JSON.stringify(board)}`)
  })
  it('should reject a same triplicate move', ()=>{
    let board = generateBoard(0, 0, 3, 3)
    let res;
    [res, board] = move(0, 0, 'O', board);
    [res, board] = move(0, 0, 'O', board);
    [res, board] = move(0, 0, 'O', board);
    assert.deepEqual(res, false)
    assert.deepEqual(board[0][0], 'O')
  })
})

// Test for wins
describe('Win Checks', ()=>{
  it('should not find same on a blank board', ()=>{
    let board = generateBoard(0, 0, 2, 2)
    assert(checkSameTokens([[0,0],[0,1],[0,2]], board) !== 'X')
  })
  it('should find same on a full X board', ()=>{
    let board = generateBoard(0, 0, 2, 2, 'X')
    assert(checkSameTokens([[0,0],[0,1],[0,2]], board) === 'X')
  })
  xit('should win on a full X board', ()=>{
    let board = generateBoard(0, 0, 2, 2, 'X')
    assert.deepEqual(checkForWin(board), false)    
  })
  xit('should not win on a blank board', ()=>{
    let board = generateBoard(0, 0, 2, 2)
    assert.deepEqual(checkForWin(board), false)
  })
  xit('should win on a single row on a blank board', ()=>{
    let board = generateBoard(0, 0, 2, 2)
    let res;
    [res, board] = move(0, 0, 'O', board);
    [res, board] = move(1, 0, 'O', board);
    [res, board] = move(2, 0, 'O', board);
    assert.deepEqual(checkForWin(board), true)
  })
})

mocha.run()

let board = generateBoard(0, 0, 2, 2)
let res;
[res, board] = move(0, 0, 'X', board);
[res, board] = move(1, 1, 'O', board);
console.log(renderBoard(board))

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


const question = `Provide a comma separated move like 1,1,X and that move will be made.  Move:`

let moved = 0

//while(moved < 10){
  readline.question(question, (moveInput) => {
    if(moveInput.length < 5){
      console.log('Invalid move.')
    }
    moved = moved + 1
    const moveF = moveInput.split(',')
    let res;
    [res, board] = move(moveF[0], moveF[1], moveF[2], board);
    console.log(renderBoard(board))
    readline.close()
    return board
  })
//}