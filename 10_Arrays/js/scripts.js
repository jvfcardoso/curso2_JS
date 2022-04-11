var arr = [5, "João", true, {teste: 1, teste: 2}]; // obj => {}


console.log(arr);

var arr2 = [1, 2, 3, 4, 5];

console.log(arr2);

console.log(arr[1]);
console.log(arr2[0]);

arr[4] = 10;

arr[0] = "Teste";

console.log(arr);

console.log(typeof arr);


// Colocando um valor em um índice fora de sequência
arr[10] = false;

console.log(arr);

console.log(arr[8]);

arr2[7] = 104;

console.log(arr2);