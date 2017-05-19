/*
Задачи:

Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
Напишите функцию printList(list) при помощи рекурсии.
Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
Как лучше – с рекурсией или без?
*/


var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList_loop(list);
printList_recursion(list);
printReverseList_loop(list);
printReverseList_recursion(list);

function printList_loop(list) {
    alert("printList_loop");
    var value = list.value;
    var elem = list;
    while(true) {
        alert(value);
        elem = elem.next;
        if (!elem) break;
        value = elem.value;
    };
    alert("printList_loop end")
}

function printList_recursion(elem) {
    alert("printList_recursion");
    if (elem) alert(elem.value);
    else return;
    
    printList_recursion(elem.next);
}

function printReverseList_loop(list) {
    alert("printReverseList_loop");
    var elem = list;
    var elems = [];
    while(elem) {
        elems.unshift(elem.value);
        elem = elem.next;
    }
    for (var i = 0; i < elems.length; i++) {
        alert(elems[i]);
    }
    alert("printReverseList_loop end");
}

function printReverseList_recursion(list) {
    alert("printReverseList_recursion");
    if (list) printReverseList_recursion(list.next);
    if (list) alert(list.value);
}