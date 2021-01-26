"use strict";

//############### 101-Exercises ###############//
//#############################################//

// 1.
var onMarsRightNow = false;

// 2.
var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];

// 3.
var vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"];

// 4.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 5.
fruits.push("tomato");

// 6.
vegetables.push("tomato");

// 7.
var someNumbers = numbers.reverse();

// 8.
vegetables.sort();

// 9.
fruits.sort().reverse();

// 10.
var fruitsAndVeggies = fruits.concat(vegetables);

// 11.
function addOne(x) {
    return parseFloat(x) + 1;
}

// 12.
function isPositive(x) {
    return parseFloat(x) > 0;
}

// 13.
function isNegative(x) {
    return parseFloat(x) < 0;
}

// 14.
function isOdd(x) {
    return parseFloat(x) % 2 !== 0
}

// 15.
function isEven(x) {
    return parseFloat(x) % 2 == 0;
}

// 16.
function identity(x) {
    return x;
}

// 17.
function isPositiveOdd(x) {
    var x = parseFloat(x);
    return (x % 2 !== 0) && (x > 0);
}

// 18.
function isPositiveEven(x) {
    var x = parseFloat(x);
    return (x % 2 == 0) && (x > 0);
}

// 19.
function isNegativeOdd(x) {
    var x = parseFloat(x)
    return (x % 2 !== 0) && (x < 0);
}

// 20.
function isNegativeEven(x) {
    var x = parseFloat(x);
    return (x % 2 == 0) && (x < 0);
}

// 21.
function half(x) {
    var x = parseFloat(x);
    return x / 2;
}

// 22.
function double(x) {
    var x = parseFloat(x);
    return x * 2;
}

// 23.
function triple(x) {
    var x = parseFloat(x);
    return x * 3;
}

// 24.
function reverseSign(x) {
    var x = parseFloat(x);
    return x * -1;
}

// 25.
function absoluteValue(x) {
    var x = parseFloat(x);
    return Math.abs(x);
}

// 26.
function isMultipleOfThree(x) {
    var x = parseFloat(x);
    return x % 3 === 0;
}

// 27.
function isMultipleOfFive(x) {
    var x = parseFloat(x);
    return x % 5 === 0;
}

// 28.
function isMultipleOfBothThreeAndFive(x) {
    var x = parseFloat(x);
    return (x % 3 === 0) && (x % 5 === 0);
}

// 29.
function square(x) {
    var x = parseFloat(x);
    return x ** 2;
}

// 30.
function add(x, y) {
    var x = parseFloat(x);
    var y = parseFloat(y);
    return x + y;
}

// 31.
function cube(x) {
    var x = parseFloat(x);
    return x ** 3;
}

// 32.
function squareRoot(x) {
    var x = parseFloat(x);
    return Math.sqrt(x);
}

// 33.
function subtract(x, y) {
    var x = parseFloat(x);
    var y = parseFloat(y);
    return x - y;
}

// 34.
function multiply(x, y) {
    var x = parseFloat(x);
    var y = parseFloat(y);
    return x * y;
}

// 35.
function divide(x, y) {
    var x = parseFloat(x);
    var y = parseFloat(y);
    return x / y;
}

// 36.
function quotient(x, y) {
    return parseInt(x / y);// could use Math.floor instead
}

// 37.
function remainder(x, y) {
    var x = parseFloat(x);
    var y = parseFloat(y);
    return parseFloat(x % y);
}

// 38.
function sumOfSquares(x, y) {
    var x = parseFloat(x);
    var y = parseFloat(y);
    return (x ** 2) + (y ** 2);
}

// 39.
function timesTwoPlusThree(x) {
    var x = parseFloat(x);
    return (x * 2) + 3;
}

// 40.
function areaOfRectangle(x, y) {
    var x = parseFloat(x);
    var y = parseFloat(y);
    return x * y;
}

// 41.
function areaOfCircle(radius) {
    var radius = parseFloat(radius);
    return Math.PI * (radius ** 2);
}

// 42.
function circumference(radius) {
    var radius = parseFloat(radius);
    return 2 * Math.PI * radius;
}

// 43.
function isVowel(x) {
    return ["a", "e", "i", "o", "u"].indexOf(x.toLowerCase()) !== -1;
} // The "!== -1" at the end will cause the function to return true when
  // the input matches a value in the array. this gives the output a boolean value.

// 44.
function hasVowels(str) {
    var str = str.toLowerCase();
    var vowels = 'aeiou';
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            return true;
        }
    }
    return false;
}

// 45.
function countVowels(str) {
    var str = str.toLowerCase().toString();
    var vowels = 'aeiou';
    var count = 0
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

// 46.
//** Cannot figure out how to do this without using regular expressions
// function removeVowels(str) {
//     var str = str.toString();
//     var vowels = 'aeiouAEIOU';
//     for (var i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) !== -1) {
//             return str.replace(str[i],'');
//         }
//     }
//     // return newStr;
// }
function removeVowels(string) {
    return string.replace(/[aeiou]/gi, "");
}

// 47.
function startsWithVowel(string) {
    var string = string.toString();
    var vowels = "aeiouAEIOU";
    return vowels.indexOf(string[0]) !== -1;
}

// 48.
function endsWithVowel(string) {
    var string = string.toString();
    var vowels = "aeiouAEIOU";
    return vowels.indexOf(string[string.length - 1]) !== -1;
}

// 49.
function startsAndEndsWithVowel(string) {
    var vowels = "aeiouAEIOU";
    return (
        vowels.indexOf(string[0]) !== -1 && vowels.indexOf(string[string.length - 1]) !== -1);
}

// 50.
var first = function (array) {
    return array[0];
}

// 51.
var second = function (array) {
    return array[1];
}

// 52.
var third = function (array) {
    return array[2];
}

// 53.
var forth = function (array) {
    return array[3];
}

// 54.
var last = function (array) {
    return array[array.length - 1]
}

// 55.
var secondToLast = function (array) {
    return array[array.length - 2]
}

// 56.
var thirdToLast = function (array) {
    return array[array.length - 3]
}

// 57.
function firstAndSecond(array) {
    return array.slice(0, 2); // the second number in .slice is
}                             // how many items/indexes to slice out
                              // nameOfArray.slice(start, n(stopping point))

// 58.
var firstAndLast = function (array) { //will not work for array of numbers
    return [first(array), last(array)];
}


// 59.
var firstToLast = function (array) {
    array.push(array.shift())
    return array;
}


// 60. // The reduce() method executes a reducer function (that you provide) on
//        each element of the array, resulting in single output value.
var sumAll = function (array) {
    return array.reduce(function (x, y) {
        return x + y
    }, 0);
}


// 60.
var mean = function (array) {
    return array.reduce(function (x, y) {
        return x + y / array.length
    }, 0);
}


// 61.
var median = function (array) {
    if (array.length % 2 !==0){
        return array[Math.floor(array.length/ 2)]
    } else {
        return array
    }
}
// function median(arr) {
//     let mid = Math.floor(arr.length / 2)
//     arr.sort()
//     return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
// };