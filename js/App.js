import React from 'react';
import ReactDOM from 'react-dom';

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let board = ['', '', '', '', '',]
let turn = 'x'
let win
function handleTurn(event) {
    // alert("clicked")
    let idx = squares.findIndex(function (square) {
        return square === event.target;
    })
    board[idx] = turn
    turn = turn === 'X' ? 'O' : 'X'
    win = getWinner()
    render()

}
function App() {

    return (

        <div>
            <h1>Tic-React-Toe</h1>
            <h2>let x play the game first</h2>

            <div className="flex-container flex-column">
                <div className="flex-container flex-wrap" id="board"
                    onClick={handleTurn}>

                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div class="square"></div>
                </div>
            </div>
            <button id="restartBtn" onclick="location.reload()">Restart</button>
        </div>


    )

}

ReactDOM.render(<App />, root)