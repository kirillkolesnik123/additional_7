module.exports = function solveSudoku(matrix) {
  // your solution
    for (var i = 0; i <= 8; i++)
    {
        for (var j = 0; j <= 8; j++)
        {
            if (matrix[i][j] !== 0)
            {
                continue;
            }
            for (var k = 1; k <= 9; k++)
            {
                if (insertar(matrix, i, j, k) === true)
                {
                    matrix[i][j] = k;
                    var b = solveSudoku(matrix);
                    if (b == true)
                    {
                        return true;
                    }
                    matrix[i][j] = 0;
                }
            }
            return false;
        }
    }
    return true;
};
function insertar(matrix, i, j, k)
{
    for (var a = 0; a <= 8; a++)
    {
        if (a != i && matrix[a][j] == k)
        {
            return false;
        }
    }
    for (var a = 0; a <= 8; a++)
    {
        if (a != j && matrix[i][a] == k){
            return false;
        }
    }
    var y = Math.floor((i / 3)) * 3;
    var x = Math.floor((j / 3)) * 3;
    for (var a = 0; a < 3; a++)
    {
        for (var b = 0; b < 3; b++)
        {
            if (a != i && b != j && matrix[y + a][x + b] == k)
            {
                return false;
            }
        }
    }
    return true;
 

}

