// function add(num1, num2) {
//     const total = num1 + num2;
//     return total;
// }
/**
 * parameters
 * return
 * no return
 *
*/
function add(num1, num2) {
    const total = num1 + num2;
    return total;
}
const result = add(5, 56);
function calculate(numbers, tax, accountant) {
    return false;
}
calculate([23, 45, 67], 0.2, 'Jonayed');
function add2(num1, num2) {
    const total = num1 + num2;
    return [total];
}
function add3(num1, num2) {
    const total = num1 + num2;
    return { total: total };
}
function add4(num1, num2) {
    const total = num1 + num2;
    return ['total', total];
}
function doubleOrHalf(num, isDouble) {
    return { num, isDouble };
}
console.log(doubleOrHalf(45, false));
function boolfunc(num1, num2) {
    const total = num1 + num2;
    return total > 0;
}
function sum(nums) {
    return nums.reduce((total, num) => num + total, 0);
}
console.log(sum([45, 5, 10]));
export {};
