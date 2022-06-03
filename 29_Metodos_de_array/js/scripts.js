// length - informa o comprimento do array

var arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// push - adiciona um elemento ao fim do array

arr.push(6);
arr.push('Qualquer coisa');
console.log(arr);

// pop - elimina um item do final do array

arr.pop();
console.log(arr);

// unshift - adiciona um item no início do array

arr.unshift(0);
arr.unshift("teste");
console.log(arr);

// shift - remove um elemento do começo do array

arr.shift();
console.log(arr);

// acessar o último elemento

console.log(arr[arr.length - 1]);

// isArray - informa se o valor é um array ou não

console.log(Array.isArray(6));
console.log(Array.isArray(arr));
