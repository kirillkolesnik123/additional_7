module.exports = function solveSudoku(matrix) {
    let arr = [];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (!matrix[row][col]) {
                let blockPositionRow = Math.floor(row / 3) * 3;
                let blockPositionCol = Math.floor(col / 3) * 3;
                for (let i = 0; i < 9; i++) {
                    arr.push(matrix[blockPositionRow + i % 3][blockPositionCol + Math.floor(i / 3)]);
                    arr.push(matrix[row][i]);
                    arr.push(matrix[i][col]);
                }
                arr.filter(number => number > 0);

                let possible = numbers.filter(number => arr.indexOf(number) < 0);
                for (let i = 0; i < possible.length; i++) {
                    matrix[row][col] = possible[i];
                    if (solveSudoku(matrix)) return solveSudoku(matrix);
                }
                matrix[row][col] = 0;
                return false;
            }
        }
    }
    return matrix;
}