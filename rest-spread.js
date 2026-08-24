const device = {
    name: 'iPhone',
    type: 'Smartphone',
    price: 999,
    color: 'black',
    storage: '128GB'
};
const { name: deviceName, ...deviceInfo } = device;
const numbers3 = [1, 2, 3, 4, 5];
const newNumbers = [6, 7, 8];
const closeFriends = ['Alice', 'Bob', 'Charlie'];
const allNumbers = [...numbers3, ...newNumbers];
export {};
