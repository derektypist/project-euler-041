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