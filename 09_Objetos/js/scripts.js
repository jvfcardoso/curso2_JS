var obj = {
    nome: "João",
    idade: 19,
    profissao: "Auxiliar de Serviços Gerais",
    estaTrabalhando: true,
}

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é: " + obj.nome);

obj.nome = "Pedro";

console.log(obj.nome);

console.log(obj);

obj.graduacao = false;

console.log(obj);
