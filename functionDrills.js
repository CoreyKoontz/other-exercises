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

function isMultipleOfThreeAndFive(input) {
    return input % 3 === 0 && input % 5 === 0
}
function isMultipleOf(target, n) { //Asking if 'target' is is a multiple of 'n'
    return target % n === 0;
}

function isTrue(input) {
    return input === true;
}

function isFalse(input) {
    return input === false;
}

/*All values are truthy unless they are defined as falsy
(i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN
 */
function isTruthy(input) {
    return input == true;
}
function isFalsy(input) {
    return input == !true; //doesnt work, keeps returning NaN as false
}

function isVowel(x) {
    return x == "a" ||x == "e"||x == "i"||x == "o"||x == "u"||x == "A"||x == "E"||x == "I"||x == "O"||x == "U"
}

function isConsonant(input) {
    if (input == (['a'||'e'||'i'||'o'||'u'||'A'||'E'||'I'||'O'||'U']) || (typeof input != "string")) {
        return false;
    } else {
        return true;
    }
} // figure out how we can return false for a number entered as a string ("5" is returning true)

function isCapitolLetter(input) {
  return input === input.toUpperCase();
} // figure out how we can return false for a number entered as a string ("5" is returning true)

