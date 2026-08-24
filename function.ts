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

function add(num1: number, num2: number): number {
    const total = num1 + num2;
    return total;
}

const result: number = add(5, 56);


function calculate(numbers: number[], tax: number, accountant: string): boolean {
    return false;
}

calculate([23, 45, 67], 0.2, 'Jonayed');






function add2(num1: number, num2: number): number[] {
    const total = num1 + num2;
    return [total];
}

function add3(num1: number, num2: number): { total?: number } {
    const total = num1 + num2;
    return { total: total };
}

function add4(num1: number, num2: number): [string, number] {
    const total = num1 + num2;
    return ['total', total];
}

function doubleOrHalf(num: number, isDouble?: boolean): any {
    return { num, isDouble };
}
console.log(doubleOrHalf(45, false));
function boolfunc(num1: number, num2: number): boolean {
    const total = num1 + num2;

    return total > 0;
}

function sum(nums: number[]): number {
    return nums.reduce((total: number, num: number) => num + total, 0);
}
console.log(sum([45, 5, 10]));
export { }