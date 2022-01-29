import { myGrid } from './createarray.js';
import { firstBorns } from './setnumbers.js';
import { filterCoordinates } from './game.js';

const oldGrid = myGrid(5);

const initialCoordinates = [
    [1, 2],
    [2, 2],
    [3, 2],
];

const gameGrid = firstBorns(oldGrid, initialCoordinates);

let currentGrid = gameGrid;
console.log(currentGrid);

setInterval(() => {
    currentGrid = filterCoordinates(currentGrid);
    console.log(currentGrid);
}, 400);
