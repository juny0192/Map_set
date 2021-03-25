new Set([1, 1, 2, 2, 3, 4]); // {1,2,3,4}

// [...new Set("referee")].join("")// "ref"

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

const isVowel = (char) => 'aeiou'.includes(char);

const vowelCount = (str) => {
  let newMap = new Map(str);

  for (let char of str) {
    let lowerCasedChar = char.toLowerCase();
    if (isVowel(lowerCasedChar)) {
      if (newMap.has(lowerCasedChar)) {
        newMap.set(lowerCasedChar, newMap.get(lowerCasedChar)++);
      } else {
        newMap.set(lowerCasedChar, 1);
      }
    }
  }
  return newMap;
};
