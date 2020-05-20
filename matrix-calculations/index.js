/**
 *  MATRIX CALCULATION
 */

let matrix1 = [
  [1, 2],
  [3, 4],
];

let matrix2 = [
  [5, 1],
  [2, 3],
];

const matrix_addition = (m1, m2) => {
  let len = m1.length;
  let resultMatrix = [];

  for (let i = 0; i < len; ++i) {
      resultMatrix[i] = new Array(m1[i].length);
      for(let j = 0; j < len; ++j) {
          resultMatrix[i][j] = m1[i][j] + m2[i][j];
      }
  }

  return resultMatrix;
};

console.log(matrix_addition(matrix1, matrix2));

const matrix_substraction = (m1, m2) => {
    let len = m1.length;
    let result = new Array();
    for(let i = 0; i < len; i++) {
        result[i] = new Array(m1[i].length);
        for(let j = 0; j < len; j++) {
            result[i][j] = m1[i][j] - m2[i][j];
        } 
    }

    return result;
}

console.log(matrix_substraction(matrix1, matrix2));


const matrix_multiplication = (m1, m2) => {
    let result =  new Array();
    let row = m1.length;
    let col = m2[0].length

    if(row !== col) return 'Matrix multiplication not possible'

    for(let i = 0; i < row; i++) {
        result[i] = new Array(col);
        for(let j = 0; j < col; j++) {
            result[i][j] = 0;
            for(let k = 0; k < col; k++) {
                result[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }

    return result;
}

console.log(matrix_multiplication(matrix1, matrix2));
