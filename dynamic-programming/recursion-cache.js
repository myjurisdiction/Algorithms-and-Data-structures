/**
 * Concept of memoization -> caching the values
 */

function fib(n, cache = [undefined, 1, 1]) {
    if(cache[n]) return cache[n];
    let res = fib(n - 1, cache) + fib(n - 2, cache);
    cache[n] = res;
    return res;
}

console.log(fib(10));


// so i am returning the cache which stores the solution of the sub problem.
function fibV2 (num) {
    const cache = {'1' : 1, '2' : 2};
    (function _(n){
        if(cache[n]) return cache[n];
        let res = _(n - 1) + _(n - 2);
        cache[n] = res;
        return res;
    })(num)
   return cache;
}

console.log(fibV2(100));

function createMatrix(row, column, count) {
    let array = new Array();
    for(let i= 0; i < row; i++) {
        array[i] = new Array(column);
        for(let j=0; j < column; j++) {
            array[i][j] = count++;
        }
    }
    return array;
}

const m1 = createMatrix(3, 3, 1);
const m2 = createMatrix(3, 3, 2);

console.log(m1);
console.log(m2);


function matrixMultiplication(m1, m2) {
    let result = new Array();
    let row = m1.length;
    let column = m2[0].length;
    for(let i = 0; i < row; i++) {
        result[i] = new Array(column);
        for(let j= 0; j < column; j++) {
            result[i][j] = 0;
            for(let k = 0; k < column; k++) {
                result[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }
    return result;
}

console.log(matrixMultiplication(m1, m2));


