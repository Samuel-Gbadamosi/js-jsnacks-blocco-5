// Jsnack3 - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchina = [
{
  variety :'siciliano 1',
  peso : 250,
  lunghezza :5
},
{
  variety :'milano 2',
  peso : 200,
  lunghezza :6
},
{
  variety :'pavia 3',
  peso : 150,
  lunghezza :9
},
{
  variety :'torino 4',
  peso : 300,
  lunghezza :40
},
{
  variety :'venezia 5',
  peso : 220,
  lunghezza :13
},
{
  variety :'bussano 6',
  peso : 100,
  lunghezza :11
},
{
  variety :'london 7',
  peso : 230,
  lunghezza :24
},
{
  variety :'arizona 8',
  peso : 180,
  lunghezza :43
},
{
  variety :'siracusa 9',
  peso : 340,
  lunghezza :12
},
{
  variety :'mantova 10',
  peso : 280,
  lunghezza :25
}

];

var shortZucca =[];

var kgOne = 0;

for (var i = 0; i < zucchina.length; i++) {
  // console.log(zucchina[i]);
  if (zucchina[i].lunghezza < 15){
    shortZucca.push(zucchina[i]);
    kgOne += zucchina[i].peso;

  }
}

console.log(shortZucca);
console.log(` the total  kg of shortzucca is ${kgOne}`);
