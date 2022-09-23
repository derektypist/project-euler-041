
// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length == 0 || num < 4 || num > 7 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 4 and 7.  Do not include leading zeros.`;
    } else {
        txt += `You have requested ${num} digits. <p>`;
        txt += `Largest Pandigital prime is ${pandigitalPrime(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}



/*
    Function to Return the maximum pandigital prime of length n
    pandigitalPrime(4) returns 4231
    pandigitalPrime(7) returns 7652413
*/
function pandigitalPrime(n) {
    function isPrime(num) {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num !== 1;
    }
  
    function getPermutations(n) {
      if (n === 1) {
        permutations.push(digitsArr.join(''));
      } else {
        for (let i = 0; i < n - 1; i++) {
          getPermutations(n - 1);
          // swap(n % 2 === 0 ? i : 0, n - 1);
          if (n % 2 === 0) {
            swap(i, n - 1);
          } else {
            swap(0, n - 1);
          }
        }
        getPermutations(n - 1);
      }
    }
    function swap(x, y) {
      let temp = digitsArr[x];
      digitsArr[x] = digitsArr[y];
      digitsArr[y] = temp;
    }
    let max = 0;
    let permutations = [];
    let digitsArr;
    let pandigitalNum = '';
  
    for (let max = n; max > 0; max--) {
      pandigitalNum += max;
    }
  
    for (let i = 0; i < pandigitalNum.length; i++) {
      if (max > 0) {
        break;
      } else {
        permutations = [];
        const currMax = pandigitalNum.slice(i);
        digitsArr = currMax.split('');
        getPermutations(digitsArr.length);
  
        // sort permutations in descending order
        permutations.sort(function(a, b) {
          return b - a;
        });
  
        for (let perm of permutations) {
          const thisPerm = parseInt(perm);
          if (isPrime(thisPerm)) {
            max = thisPerm;
            break;
          }
        }
      }
    }
  
    return max;
  }

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}