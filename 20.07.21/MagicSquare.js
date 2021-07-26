// Three conditions hold:
// 1. The position of next number is calculated by decrementing row number of the previous number by 1, and incrementing the column number of the previous number by 1. At any time, if the calculated row position becomes -1, it will wrap around to n-1. Similarly, if the calculated column position becomes n, it will wrap around to 0.
// 2. If the magic square already contains a number at the calculated position, calculated column position will be decremented by 2, and calculated row position will be incremented by 1.
// 3. If the calculated row position is -1 & calculated column position is n, the new position would be: (0, n-2). 
//--------------------------------------------------------------------//
// Для этого необходимы три условия:
// 1. Позиция следующего числа вычисляется путем уменьшения номера строки предыдущего числа на 1 и увеличения номера столбца предыдущего числа на 1. 
//В любой момент времени, если вычисленная позиция строки становится равной -1, она обернется к n-1. Аналогично, если вычисленная позиция столбца станет равной n, она обернется к 0.
// 2. Если магический квадрат уже содержит число в вычисленной позиции, то вычисленная позиция столбца уменьшится на 2, а вычисленная позиция строки увеличится на 1.
// 3. Если вычисленная позиция строки равна -1, а вычисленная позиция столбца равна n, то новая позиция будет такой: (0, n-2). 

function createSquare(n) {
    const magicSquare = Array(n).fill(0).map(x => Array(n).fill(0));
    return magicSquare;
}
function makeSquareMagic(n) {
    const square = createSquare(5);
    let line = parseInt(n / 2); // <-- по условию данного алогоритма начальное число 1 находится в таких координатах 
    let col = n - 1;
    console.log(line, col)

    for (let num = 1; num <= n * n;) {
        if (line == -1 && col == n) {
            col = n - 2;
            line = 0;
        } else {
            if (col == n)
                col = 0;
            if (line < 0)
                line = n - 1;
        }
        if (square[line][col] != 0) {
            col -= 2;
            line += 1;
        } else {
            // set number
            square[line][col] = num++;

            // 1st condition
            col++;
            line--;
        }
    }
    return square;
}


console.log(makeSquareMagic(5));