// Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchina = [
{
  variety :'siciliano 1',
  peso : 250,
  lunghezza :30
},
{
  variety :'milano 2',
  peso : 200,
  lunghezza :25
},
{
  variety :'pavia 3',
  peso : 150,
  lunghezza :22
},
{
  variety :'torino 4',
  peso : 300,
  lunghezza :20
},
{
  variety :'venezia 5',
  peso : 220,
  lunghezza :15
},
{
  variety :'bussano 6',
  peso : 100,
  lunghezza :21
},
{
  variety :'london 7',
  peso : 230,
  lunghezza :18
},
{
  variety :'arizona 8',
  peso : 180,
  lunghezza :45
},
{
  variety :'siracusa 9',
  peso : 340,
  lunghezza :45
},
{
  variety :'mantova 10',
  peso : 280,
  lunghezza :25
}

];
// console.log(zucchina);
var sommaPeso = 0;
for (var i = 0; i < zucchina.length; i++) {
sommaPeso += zucchina[i].peso;
}

console.log(`the total kg of the zucchine is ${sommaPeso}`);
