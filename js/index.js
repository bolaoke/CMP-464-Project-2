/* Variables*/
let board
let turn = "x"
const squares = Array.from(document.querySelectorAll('#board div'))
const restartBtn = document.querySelector('#board div')
console.log(squares)

const winCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWinX(arr) {
  for (const combo of winCombinations) {
    const [a, b, c] = combo;
    if (arr[a] === "X" && arr[b] === "X" && arr[c] === "X") {
      return true; // X has won
    }
  }
  return false; // X has not won
}
function checkWinO(arr) {
  for (const combo of winCombinations) {
    const [a, b, c] = combo;
    if (arr[a] === "O" && arr[b] === "O" && arr[c] === "O") {
      return true; // O has won
    }
  }
  return false; // O has not won
}

// Function
let handleTurn = (event) => {
  console.log('clicked')

  let idx = squares.findIndex((square) => {
    return square === event.target
  })

  board[idx] = turn

  if (turn == 'x') {
    turn = '0'
  } else {
    turn = 'x'
  }
  render()

  const boardState = squares.map(e => e.innerText.toUpperCase())

  let xWin = checkWinX(boardState);
  console.log(xWin);
  let yWin = checkWinO(boardState);
  console.log(yWin);

  if (xWin) {
    alert("X win")
  } else if (yWin) {
    alert("O win")
  } else {

  }

  console.log(boardState)
}



/*Event Listener*/
document.getElementById('board').addEventListener('click', handleTurn)
// document.getElementById('board').addEventListener('click', function() {
//   handleTurn;
//   if ()
// })
let init = () => {
  //set up board
  board = ['', '', '', '', '', '', '', '', '']

  render()
}

let render = () => {

  board.forEach((mark, index) => {
    squares[index].textContent = mark
  })
}


//to start a new game
init()