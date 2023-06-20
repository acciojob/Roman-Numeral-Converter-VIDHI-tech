// function convertToRoman(num) {
//   const obj = {
//     0: ['M', 1000],
//     1: ['CM', 900],
//     2: ['D', 500],
//     3: ['CD', 400],
//     4: ['C', 100],
//     5: ['XC', 90],
//     6: ['L', 50],
//     7: ['XL', 40],
//     8: ['X', 10],
//     9: ['IX', 9],
//     10: ['V', 5],
//     11: ['IV', 4],
//     12: ['I', 1]
//   };

//   if (isNaN(num) || num < 0 || num > 100000) {
//     return "Invalid input. Please provide a number between 0 and 100000.";
//   }

//   let romanNumeral = '';

//   for (let i = 0; i < 13; i++) {
//     const symbol = obj[i][0];
//     const value = obj[i][1];

//     while (num >= value) {
//       romanNumeral += symbol;
//       num -= value;
//     }
//   }

//   return romanNumeral;
// }

// console.log(convertToRoman(14)); // Output: XIV
function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  if (isNaN(num) || num < 0 || num > 100000) {
    return { roman: "Invalid input. Please provide a number between 0 and 100000." };
  }

  let romanNumeral = '';

  for (let i = 0; i < 7; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];

    while (num >= value) {
      romanNumeral += symbol;
      num -= value;
    }
  }

  return { roman: romanNumeral };
}

// Example usage:
console.log(convertToRoman(45)); // Output: { roman: 'XLV' }

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
