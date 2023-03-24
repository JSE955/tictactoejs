const gameBoard = (() => {
    let board = [
        ['X', 'X', 'X'],
        ['O', 'O', 'O'],
        ['O', 'O', 'X']
    ]

    const getBoard = () => board;

    return { getBoard };
})();

const Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;
    return { getName, getMark };
}

const displayController = (() => {
    let testPlayer = Player('Jordan', 'X');
    const testDisplay = () => console.log(testPlayer.getName());
    return {testDisplay};
})();

// Fill displayed cells with content from game board
const cells = document.querySelectorAll('.cell');

const fillBoard = (cells) => {
    let row = 0;
    let column = 0;
    cells.forEach((cell) => {
        cell.textContent = gameBoard.getBoard()[row][column];
        column++;
        if (column > 2) {
            row++;
            column = 0;
        }
    })
}

fillBoard(cells);

