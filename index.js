// Add your functions and code here

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(array, name) {
  array.push(name);
  return array;
}

destructivelyAppendKitten(kittens, 'Ralph');
