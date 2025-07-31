//reverse string
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

//string duplicate
let input = "JavaScript is fun";
console.log(reverseWords(input)); 

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

let nums = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(nums)); 

//count vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let text = "Hello World";
console.log(countVowels(text)); 
