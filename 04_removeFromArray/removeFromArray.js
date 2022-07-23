const removeFromArray = function (...args) {
    const array = args[0];
    return array.filter(val => !args.includes(val));
    

   
//     for (let arg of args) {
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] === arg) {
//                 array.splice(i, 1);
//                 i--; // Check element after shifting index; 
//             }
//         }
//     };
//     console.log(array);
//     return array;
}

// Do not edit below this line
module.exports = removeFromArray;
