"use strict"

function isOdd(num) {
    return Math.abs(parseFloat(num)) % 2 === 1;
}

function isEven(num) {
    return parseFloat(num) % 2 === 0;
}

function identity(input) {
    return input
}

function isFive(input) {
    return input == 5; // current is equal to value. Use '===' to check value and type
}

function addFive(input) {
    return input + 5; // current code will concat. Change to "return parseFloat(input) + 5;" to take only numbers.
}

function isMultipleOfFive(input) {
    return input % 5 === 0;
}

function isThree(input) {
    return input == 3; // current is equal to value. Use '===' to check value and type
}

function isMultipleOfThree(input) {
    return input % 3 === 0;
}

function