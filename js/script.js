// Set Up Global Array
const PRIMES = [false,false,true];

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length == 0 || num<4 || num>7 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 4 and 7.  Do not include leading zeros.`;
    } else {
        txt += `You have requested ${num} digits. <p>`;
        txt += `Largest ${num}-digit pandigital prime is ${pandigitalPrime(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to check if number num is prime
function isPrime(num) {
    if (PRIMES[num] !== undefined) return PRIMES[num];
    if (num%2==0) return false;
    const upperBound = Math.sqrt(num);
    for (let i=3;i<=upperBound;i+=2) {
        if (num%i===0) return PRIMES[num] = false;
    }
    return PRIMES[num] = true;
}

// Function to check if number num is pandigital
function isPandigital(num) {
    const numAsString = num.toString();
    return Array(numAsString.length).fill(0).every((_,i) => numAsString.indexOf(i+1) !== -1);
}

/*
    Function to Return the maximum pandigital prime of length n
    If there are none, it will return 0
    pandigitalPrime(4) returns 4231
    pandigitalPrime(5) returns 0
    pandigitalPrime(7) returns 7652413
*/
function pandigitalPrime(n) {
    const upperBound = parseInt(Array(n).fill(0).map((_,i) => n-i).join(""));
    for (let i=upperBound;i>0;i-=2) {
        if (isPandigital(i) && isPrime(i)) return i;
    }

   
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}