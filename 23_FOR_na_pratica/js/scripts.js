var lista = ['Laranja', 'Maçã', 'Pêra', 'Jaca', 'Limão'];

// Cria um elemento de lista desordenada no HTML
var listaUl = document.createElement('ul');

// Pega o elemento 'body' do HTML
var body = document.getElementsByTagName('body');

// console.log(body[0]);

// Adiciona a lista criada dentro do elemento body
body[0].appendChild(listaUl);

// Pega a lista que está adicionada no HTML e adiciona à variável 'listaNoBody'
var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0])

for(var i = 0; i < lista.length; i++){

    // Cria um elemento do tipo 'listItem'
    var liFor = document.createElement('li');

    // Pega os elementos do array e adiciona à variável textoLi
    var textoLi = document.createTextNode(lista[i]);

    // Pega o elemento do array e coloca no listItem
    liFor.appendChild(textoLi);
    
    // Adiciona o listItem na lista do HTML
    listaNoBody[0].appendChild(liFor);

}