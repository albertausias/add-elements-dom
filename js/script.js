 // Aquí tu código

console.log('hola caracola');


const agregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

document.getElementById('agregar').addEventListener('click', function () {
  let nuevoElemento = prompt('Aporta un nuevo elemento a nuestra lista:');

  if (nuevoElemento) {
    const lista = document.getElementById('lista');
    elementoLista = document.createElement('ul');
    elementoLista.textContent = nuevoElemento;
    lista.appendChild(elementoLista);
  }
});