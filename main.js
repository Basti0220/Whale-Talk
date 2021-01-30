let input = 'tupentine and turtles';

let inputLength = input.length;

const vowels = ['a','e','i','o','u'];

let vowelsLength = vowels.length;

let resultArray = [];

for (let i = 0; i < inputLength; i++){
  for (let j = 0; j < vowelsLength; j++){
    if (input[i] === vowels[j] ){
      resultArray.push(input[i])
      if(input[i] === 'e'){
        resultArray.push(input[i]);
      };
      if (input[i] === 'u'){
        resultArray.push(input[i]);
      };
    }
  }
}
console.log(resultArray.join("").toUpperCase())

