"use strict";
// 1-ша задача
function difference(x, y) {
    return Math.abs(x - y);
}
console.log(difference(1, 1));
console.log(difference(1, 2));
console.log(difference(2, 1));
console.log(difference(-1, 1));
console.log(difference(1, -1));
// 2-га задача
function factorial(x) {
    if (x < 0) {
        return undefined;
    }
    let result = 1;
    for (let i = 2; i <= x; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(10));
console.log('-'.repeat(64));
// 3-тя задача
function max(array) {
    if (array.length === 0) {
        return undefined;
    }
    let maxValue = array[0]; // Початкове значення максимального елементу - перший елемент масиву.
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i]; // Оновлюємо maxValue, якщо знайдений більший елемент.
        }
    }
    return maxValue;
}
console.log(max([1, 2, 3]));
console.log(max([3, 2, 1]));
console.log(max([1, 3, 2]));
console.log(max([-1, -2, -3, -2, -1]));
console.log(max([-1, -2, 0, -2, -1]));
// 4-та задача
function average(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(average([1, 2, 3]));
console.log(average([3, 2, 1]));
console.log(average([1, 3, 2]));
console.log(average([-1, -2, -3, -2, -1]));
console.log(average([-1, -2, 0, -2, -1]));
// 5-та задача
function sumOdds(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i]; // Додаємо непарні числа до суми.
        }
    }
    return sum;
}
console.log(sumOdds([1, 2, 3]));
console.log(sumOdds([3, 2, 1]));
console.log(sumOdds([2, 4, 6]));
console.log(sumOdds([1, 3, 5]));
console.log(sumOdds([-1, 1, -1, 1]));
// 6-та задача
function filterGreaterThan(array, x) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > x) {
            result.push(array[i]); // Додаємо елементи, що більше за x, до нового масиву.
        }
    }
    return result;
}
console.log(filterGreaterThan([1, 2, 3], 2));
console.log(filterGreaterThan([3, 2, 1], 2));
console.log(filterGreaterThan([2, 4, 6], 2));
console.log(filterGreaterThan([-1, -2, -3], 2));
// 7-ма задача
function removeNegative(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            result.push(array[i]); // Додаємо невід'ємні числа до нового масиву.
        }
    }
    return result;
}
console.log(removeNegative([1, 2, 3])); // [1, 2, 3]
console.log(removeNegative([3, 2, 1])); // [3, 2, 1]
console.log(removeNegative([-1, -2, -3])); // []
console.log(removeNegative([-1, 2, -3])); // [2]
// 8-ма задача
function rotateRight(array, offset) {
    return array.slice(-offset).concat(array.slice(0, -offset));
}
console.log(rotateRight([1, 2, 3], 0));
console.log(rotateRight([1, 2, 3], 1));
console.log(rotateRight([1, 2, 3], 2));
console.log(rotateRight([1, 2, 3], 3));
// 9-та задача
function objectKeys(object) {
    return Object.keys(object);
}
console.log(objectKeys({}));
console.log(objectKeys({ a: 1, b: 2 }));
console.log(objectKeys({ a: 1, b: 2, c: 3 }));
// 10-та задача
function objectValuesSum(object) {
    return Object.values(object).reduce((sum, value) => sum + value, 0);
}
// 11-та задача
function mergeObjects(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
console.log(mergeObjects({}, {}));
console.log(mergeObjects({ a: 1, b: 2 }, {}));
console.log(mergeObjects({}, { a: 1, b: 2 }));
console.log(mergeObjects({ a: 1 }, { b: 2 }));
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3 }));
