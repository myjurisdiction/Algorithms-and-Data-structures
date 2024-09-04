/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = new Map();
  const ransomNoteMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (magazineMap.has(magazine[i])) {
      magazineMap.set(magazine[i], magazineMap.get(magazine[i]) + 1);
    } else {
      magazineMap.set(magazine[i], 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (ransomNoteMap.has(ransomNote[i])) {
      ransomNoteMap.set(ransomNote[i], ransomNoteMap.get(ransomNote[i]) + 1);
    } else {
      ransomNoteMap.set(ransomNote[i], 1);
    }
  }

  for (let [key, value] of ransomNoteMap) {
    if (!magazineMap.has(key) || value > magazineMap.get(key)) {
      return false;
    }
  }

  return true;
};
