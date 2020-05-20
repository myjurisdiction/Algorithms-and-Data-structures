const fibonacci = (number) => {
    if(number < 2) return number;
    return fibonacci(number - 1) + fibonacci(number - 2); 
}

console.log(fibonacci(10));

const power = (base, exp) => {
    if(exp <= 1) return base;
    return base * power(base, exp -1);
}

console.log(power(2, 5));

const factorial = (number) => {
    if(number === 0) return 1;
    return number * factorial(number - 1);
} 

console.log(factorial(5));


const productOfArray = (array) => {
    if(!array.length) return 1;
    return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1,2,3,4]));


const recursiveRange = (number) => {
    if(number < 0) return 0;
    return number + recursiveRange(number - 1);
}

console.log(recursiveRange(10));

const reverse_string = (str) => {
    if(str.length === 1) return str;
    return reverse_string(str.slice(1)) + str[0];
}

console.log(reverse_string('This is amazing !!'));


const isPalindrome = (str) => {
    let reverse = reverse_string(str);
    if(str === reverse) return true;
    return false;
}

console.log(isPalindrome('hannah'));

const isPalindrome_v2 = (str) => {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.substr(-1)) return isPalindrome_v2(str.slice(1, -1));
    return false;
}

console.log(isPalindrome_v2('hannah'));

const array = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];

const flatten = (array) => {
    let newArray = [];
    for(let value of array) {
        if(Array.isArray(value)) {
            newArray = newArray.concat(flatten(value));
        } else {
            newArray.push(value);
        }
    }

    return newArray;
}


console.log(flatten(array));

const flatten_v2 = (array) => {
    const newArray = array.reduce((a, c) => {
        if(Array.isArray(c)) a.push(...flatten_v2(c));
        else a.push(c);
        return a;
    }, []);

    return newArray;
}

console.log(flatten_v2(array));