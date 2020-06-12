console.log("working on an searching algorithm called KMP algorithm...");

const sampleString = `orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
const pattern = "recently";

/** This algorithm has Time ecomplexity of O(n * m) */
const naiveSearch = (string, pattern) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    let index = i;
    for (let j = 0; j < pattern.length; j++) {
      if (string[index] === pattern[j]) {
        index++;
      } else {
        break;
      }
      if (j === pattern.length - 1) count += 1;
    }
  }
  if (count) return count;
  return "not found !!";
};

console.log(naiveSearch(sampleString, pattern));

/** A better approach is to use KMP algorithm */

const prefixToSuffixLength = (pattern) => {
  let PSA = Array.from({ length: pattern.length }, () => 0);
  let j = 1;
  let i = 0;
  while (j < PSA.length) {
    if (pattern[i] === pattern[j]) {
      PSA[j] = i + 1;
      i++;
      j++;
    } else {
      PSA[j] = PSA[i - 1] || 0;
      j++;
    }
  }
  return PSA;
};

/**
 *
 * @param {string } string
 * @param { sring } pattern
 */

const KMP = (string, pattern) => {
  const PSA = [...prefixToSuffixLength(pattern)];
  let strIndex = 0;
  let patternIndex = 0;
  let count = 0;
  while (strIndex < string.length) {
    if (string[strIndex] === pattern[patternIndex]) {
      strIndex++;
      patternIndex++;
    }
    if (patternIndex === pattern.length) {
      count += 1;
      patternIndex = PSA[patternIndex - 1];
    } else if (pattern[patternIndex] !== string[strIndex]) {
      if (patternIndex) {// when patternIndex is not equal to  Zero
        patternIndex = PSA[patternIndex - 1];
      } else {
        strIndex++;
      }
    }
  }

  return count
    ? `the word ${pattern} occurs ${count} times in the search string.`
    : "Not found";
};

console.log(KMP('AAAAA', 'A'));

/**
 * In the Knoth morris prat Algorithm, the steps are :
 *
 * 1. create a function which takes the PATTERN as an argument and returns an array which contains the longest distance to the prefix to suffix. Ex HANNAH = > [0, 0 , 0, 0, 0, 1] -> H is prefix as well as suffix. So longest distance from P to S is 1
 *
 * 2. Now create another function which takes Search string and Pattern as an argument.
 *
 * 3. what you have to do is take two pointers -> i, j and set both the pointers to an initial value of 0.
 *
 * 4. Now, begin a loop where the condition matches -> j < searchString.length
 * 
 * let's take an example to understand this in a better way.
 * 
 * let' our SampleString be -> 'AAAAABAAABA' and pattern -> 'AAAA'
 *
 * AAAAABAAABA  i = 6 and j = 0 but j = pattern.length, so we reset j = PSA[j - 1] => PSA[3] = 3
 *       i
 * 
 * AAAA     -> now when i = 5 and j   = 3 , S[i] !== P[j] and j > 0 so we give j = PSA[j - 1] => j = 2
 * j         
 *          -> when i = 5 and j = 0, now we do not use any PSA values instead we simply increase i += 1
 * 
 * Hence this process keeps going
 */

