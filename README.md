# Project Euler 041 - Pandigital Prime

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once.  For example, 2143 is a 4-digit pandigital and is also prime.

The aim is to find the largest n-length digit pandigital prime that exists, using HTML Forms and JavaScript.

Information at [Project Euler 041](https://projecteuler.net/problem=41)

## UX

**Getting Started**

Enter a whole number between 4 and 7, without leading zeros such as 04 and click on the Submit Button.  You will see the largest pandigital prime or 0, unless you have made an invalid input.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 4 or greater than 7
- Including leading zeros such as 04
- Entering a number, but it is not an integer

As a user, I expect the function `pandigitalPrime(4)` to return a number.

As a user, I expect the function `pandigitalPrime(4)` to return 4231.

As a user, I expect the function `pandigitalPrime(7)` to return 7652413.

User stories on function `pandigitalPrime(n)` is taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 041](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-41-pandigital-prime)

**Information Architecture**

The function `pandigitalPrime(n)` returns a number, where n is a number between 4 and 7.

## Features

Alloes the user to enter the number of digits in order to find the largest pandigital prime number of that number of digits.  If there are none, then it will return 0.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.1 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-041) at the main branch.



