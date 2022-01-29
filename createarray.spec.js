import { myGrid } from './createarray';

describe('testing function that creates array', () => {
    test('if input is 2, should cerate bidimensional array with values 0', () => {
        expect(myGrid(2)).toEqual([
            [0, 0],
            [0, 0],
        ]);
    });
});
