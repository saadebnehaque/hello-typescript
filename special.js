function calculateTax(amount, taxRate) {
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    return amount * taxRate;
}
const myTax = calculateTax(100, 0.15);
const yourTax = calculateTax('200', 0.2);
// null 
const myFuture = null;
// undefined
let myMoney;
// ----------- not important for now -----------------
// any 
const myVariable = 'Hello';
// unknown
// never
console.log(typeof NaN);
export {};
