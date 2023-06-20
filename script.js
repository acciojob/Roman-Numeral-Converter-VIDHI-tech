function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
if (isNaN(num) || num < 0 || num > 100000) {
    return "Invalid input. Please provide a number between 0 and 100000.";
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

  return romanNumeral;
}

// console.log(convertToRoman(36)); // Output: XXXVI
	

// }
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
