/** FINDING AN ELEMENT IN A 2D MATRIX */

const get_2D_matrix = (row, col) => {
  let matrix = new Array();
  let count = 100;
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array();
    for (let j = 0; j < col; j++) {
      matrix[i][j] = count += 100;
    }
  }

  return matrix;
};

const matrix = get_2D_matrix(5, 5);
console.log(matrix);
// This algorithm can be applied only in case of sorted array

const _2d_binary_search = (matrix, target) => {
  let row = matrix.length;
  let col = matrix[0].length;

  let start = 0;
  let end = row * col - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let middle_element = matrix[Math.floor(middle / col)][middle % col];

    if (middle_element === target) return true;
    else if (target < middle_element) end = middle - 1;
    else start = middle + 1;
  }

  return false;
};

console.log(_2d_binary_search(matrix, 2500))
