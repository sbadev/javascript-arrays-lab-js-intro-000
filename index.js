// Add your functions and code here

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(); // remove last kitten
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  moreKittens = [...kittens, name];
  return moreKittens;
  return kittens;
}

function prependKitten(name) {
  newKitten = [name, ...kittens];
  return newKitten;
  return kittens;
}

function removeLastKitten() {
  lastKitten = kittens.slice(0, array.length - 1);
  return lastKitten;
  return kittens;
}
