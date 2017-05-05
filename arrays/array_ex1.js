/*
    Напишите код для вывода alert случайного значения из массива:

    var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
*/

//alert(Math.random());
//alert(Math.floor(15.534254));

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = randomNumber(0, arr.length-1);
alert("Random number is : " + rand);
alert( arr[rand] );

function randomNumber(min, max) {
    if (min > max) return 0;
    return Math.floor(min + (Math.random() * (max - min)));
}