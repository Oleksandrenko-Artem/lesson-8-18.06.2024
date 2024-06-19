console.group('task 1');
/**
 * 
 * @param {number} year 
 * @returns {boolean}
 */
function yearInput(year = 2024) {
    return (year % 100 === 0);
}
console.log(yearInput());
console.groupEnd();
console.group('task 2');
/**
 * 
 * @param {number} number 
 * @returns {number}
 */
function gradusConverter(number) {
    return (number * 9 / 5 + 32)
}
console.log(gradusConverter(26));
console.groupEnd();
console.group('task 3');
/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {boolean}
 */
function multipleNumber(number1, number2) {
    return (number1 % number2 === 0) ? true : false;
}
console.log(multipleNumber(40, 10));
console.groupEnd();
console.group('task 4');
/**
 * 
 * @param {number} side1 
 * @param {number} side2 
 * @returns {number}
 */
function rectangleArea(side1, side2) {
    return (side1 * side2 / 2);
}
console.log(rectangleArea(30, 10));
console.groupEnd();
console.group('task 5');
/**
 * 
 * @param {number} price 
 * @param {number} procent 
 * @returns {number}
 */
function productPrice(price, procent = 20) {
    const summa = (price * procent) / 100;
    return price + summa;
}
console.log(productPrice(230));
console.groupEnd();
console.group('task 6');
/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {boolean}
 */
function numberDifference(number1, number2) {
    return ((number1 - number2) % 2 === 0);
}
console.log(numberDifference(80, 40));
console.groupEnd();
console.group('task 7');
/**
 * 
 * @param {number} number 
 * @returns {number}
 */
const inchToCM = 2.54;
function centimeterConventer(number) {
    return (number * inchToCM);
}
console.log(centimeterConventer(54));
console.groupEnd();