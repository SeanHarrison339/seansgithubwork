var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2

var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana


fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });
  // Apple 0
  // Banana 1

  var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

var first = fruits.shift(); // remove Apple from the front
// ["Banana"];
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];