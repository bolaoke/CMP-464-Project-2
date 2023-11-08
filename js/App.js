function App() {
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
    const [board, setBoard] = React.useState(['', '', '', '', '', '', '', '', ''])
    const [turn, setTurn] = React.useState('X')
    const [win, setWin] = React.useState(null)

    function getWinner() {
        let winner = null
        winningCombos.forEach(function (combo, index) {
            if (
                board[combo[0]] &&
                board[combo[0]] === board[combo[1]] &&
                board[combo[0]] === board[combo[2]]
            )
                winner = board[combo[0]]
        })
        return winner ? winner : board.includes('') ? null : 'T'
    }
    function handleTurn(event) {
        // alert("clicked")
        // let idx = squares.findIndex(function (square) {
        // return square === event.target;
        //})
        console.log(event.target)
        let idx = event.target.id
        let newBoard = [...board]
        newBoard[idx] = turn
        setBoard(newBoard)
        let nextTurn = turn === 'X' ? '0' : 'X' 
        setTurn(nextTurn)
        let whoWon = getWinner()
        setWin(whoWon)
    }
    function Message() {
        let message =
            win === 'T' ? `That's a tie, queen!`
                : win
                    ? `${win} wins the game!`
                    : `It's ${turn}'s turn to play game`

        return <h2>{message}</h2>

    }

    return (
        <div>
            <h1>Tic-React-Toe</h1>

            <Message />
            <div className="flex-container flex-column">
                <div
                    className="flex-container flex-wrap"
                    id="board"
                    onClick={handleTurn}>

                    {board.map((data, index) => {
                        return (
                            <div key={index} id={index} className="square">
                                {data}
                            </div>
                        )
                    })}

                </div>


            </div>
            <button id="restartBtn" onClick={onRestartClick}>Restart</button>
        </div>

    )

    function onRestartClick() {
        location.reload()
    }
}

ReactDOM.render(<App />, root)