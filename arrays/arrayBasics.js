var fruits = ["Яблоко", "Апельсин", "Груша"];

//fast
alert( fruits.pop() ); //drop last
fruits.push("Груша"); //add to end
fruits.push("Апельсин", "Персик");

//slow
fruits.shift(); //drop first
fruits.unshift('Яблоко'); //add to begin
fruits.unshift("Ананас", "Лимон");

fruits.splice(1,1); //remove from 1st index 1 element
fruits.splice(2, 0, "сложный", "язык"); //remove 0 elements and add 2 elements from 2nd index

var arr = new Array("Яблоко", "Груша", "и т.п.");
arr.length = 0; //clear array
arr.reverse();
arr.indexOf(null);

var arr2 = arr.slice(1, 3); // copy elements 1, 2 (exclusive 3)
var fullCopy = arr.slice();

var newArr = arr.concat(3, 4);

var arr = ["Я", "иду", "домой"];
delete arr[1]; // значение с индексом 1 удалено
// теперь arr = ["Я", undefined, "домой"];


function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
arr.sort(compareNumeric);


var user = {
  name: "Петя",
  age: 30
}
var keys = Object.keys(user); //array: name,age


var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
var str = arr.join(';');

var str = "тест";
alert( str.split('') ); // т,е,с,т

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});

var positiveArr = arr.filter(function(number) {
  return number > 0;
});

var nameLengths = names.map(function(name) {
  return name.length;
});

var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( arr.every(isPositive) ); // false, не все положительные
alert( arr.some(isPositive) ); // true, есть хоть одно положительное
