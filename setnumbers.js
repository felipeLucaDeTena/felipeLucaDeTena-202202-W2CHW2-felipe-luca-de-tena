export const firstBorns = (grid, coordinates) => {
    for (const location of coordinates) {
        grid[location[0]][location[1]] = 1;
    }
    return grid;
};
