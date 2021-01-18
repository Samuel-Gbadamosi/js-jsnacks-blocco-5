// Jsnack1 - Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

var palla = {
  nome : 'ball',
  peso : 10
}
console.log(palla);

var kg = parseInt(prompt('insert your kg ?'));
palla.peso = kg;

console.log(palla);
