const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name) {
  var newKittens = ["Arnold", ...kittens];
  return newKittens;
}
Seeking a position as an analyst with a company who values integrity, professionalism, and employee engagement. Offering strong analyzing and inquisitive skills to improve system performances through accurate information presentation.  
