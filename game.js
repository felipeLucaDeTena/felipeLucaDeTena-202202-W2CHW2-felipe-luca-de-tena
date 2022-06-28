function containerArray(rows, cols) {
    const board = new Array(rows);
    for (let i = 0; i < rows; i++) {
        board[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            board[i][j] = Math.round(Math.random());
        }
    }
    return board;
}

const testArray = containerArray(30, 30);

const freshGrid = (a) => [...Array(a)].map(() => Array(a).fill(0));
const filterCoordinates = (grid) => {
    const newGrid = freshGrid(grid.length);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let imAlive = 0;
            let myNeighbours = [
                [i - 1, j - 1],
                [i - 1, j],
                [i - 1, j + 1],
                [i, j - 1],
                [i, j + 1],
                [i + 1, j - 1],
                [i + 1, j],
                [i + 1, j + 1],
            ];

            myNeighbours = myNeighbours.filter((coordinate) => {
                return (
                    coordinate[0] >= 0 &&
                    coordinate[0] < grid.length &&
                    coordinate[1] >= 0 &&
                    coordinate[1] < grid.length
                );
            });
            myNeighbours.forEach((coordinate) => {
                if (grid[coordinate[0]][coordinate[1]] === 1) {
                    imAlive = imAlive + 1;
                }
            });

            if (grid[i][j] === 1) {
                if (imAlive < 2 || imAlive > 3) {
                    newGrid[i][j] = 0;
                } else if (imAlive === 2 || imAlive === 3) {
                    newGrid[i][j] = 1;
                }
            }
            if (grid[i][j] === 0) {
                if (imAlive === 3) {
                    newGrid[i][j] = 1;
                }
            }
        }
    }
    return newGrid;
};

function paintTable(boardToPlay) {
    const table = document.querySelector('.table');
    table.innerHTML = '';
    for (let i = 0; i < boardToPlay.length; i++) {
        const row = document.createElement('div');
        row.classList.add('board-rows');
        for (let j = 0; j < boardToPlay[i].length; j++) {
            const column = document.createElement('div');
            column.classList.add('board-columns');
            column.id = 'column' + i + j;
            if (boardToPlay[i][j] === 1) {
                column.classList.add('living');
            }
            row.appendChild(column);
        }
        table.appendChild(row);
    }
}

let currentGrid = testArray;

setInterval(() => {
    currentGrid = filterCoordinates(currentGrid);
    paintTable(currentGrid);
}, 600);
