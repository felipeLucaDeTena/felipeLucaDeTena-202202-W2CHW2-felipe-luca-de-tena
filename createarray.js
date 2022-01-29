export const myGrid = (rows) =>
    Array.from({ length: rows }, () =>
        Array.from({ length: rows }, () => Math.floor(Math.random()))
    );

console.log(myGrid(4));
