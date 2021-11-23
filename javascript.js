let c = prompt('введіть число')
let dol=26
let yew=30
let result=dol*c
let resultEwro=yew*c
alert('в долларах це '+ result + ' , а в євро це ' + resultEwro)
// 1 Работа с переменными 
// var, const,let

// Называть можно с помощью -camelCase
// const _ = 'private'
// const $ = 'some value'
// const withNum5 = '5'
// const if = 'mkef' // err
// const 5withNum = 5 // err

// 2 Мутирование 
let lastName = 'Poizdnyk';
let age = 35;
console.log (lastName + ' - is my last name ' + age) 
// несмотря на то, что age - число, JS преобразовывает в стороку(вызывая под капотом метод .toString) так как работа со стороками

//console.log ('hello js!!!')

//Функции браузерного JS- alert, promt
//let fName=prompt('add your name')
//console.log('mY  name - ' + fName + lastName)

//let bedinToStart = 'start  JS!!!';
//bedinToStart = 'let me'
//console.log (bedinToStart)
 //const imya = prompt ('what is your name?');
//console.log ('Your name is '+ imya);

// 3Операторы
//let currentYear = 2021
// const a = 10
// const b = 5
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear) если поставить ++как в примере, выведится 2022
// console.log(--currentYear) выведится 2020
// console.log(c)
// let c = 32
// c = c + a    или  c += a
// c = c - a    или  c -= a
// c = c * a    или  c *= a
// c = c / a    или  c /= a
//

// 4 Типы данных
let logic = true; //boolean
const named='Poizdnyk'; //string
let firstnNum = 42;  //number
let secondNum = '42'; //string
let x //undefined
 //через typeof можно проверить какой тип данных 
 console.log( typeof logic)
 console.log( typeof named)
 console.log( typeof firstnNum)
 console.log( typeof secondNum)
 console.log(typeof x)
 console.log(null) //выведе 0, (typeof null)-object

//document.writeln ('Resalt', firstnNum + secondNum)
firstnNum ++;
//console.log (firstnNum)
//console.log (Math.floor (2.05));
//console.log (Math.ceil (2.05));
//console.log (Math.round (2.55));

// 5 Приоритет операторов

// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// > < >= <= 
//какое действие выполниться первым можно найти если в браузере ввести mdn operator precedence
// const isFullAge = currentYear - birthYear >= fullAge // 26 >= 27 => true
// console.log(isFullAge)


//масивы
let color=['red', 'green','blue'];
//let color= new Array('red', 'green','blue')
//можна добавить елемент в масив с помощью индекса (от 0), 
//ниже добавили елемент gray
//color[3]='gray'
//можно вместо индекса писать функцию push, добавляет елемент в конец масива
//color.push('rose')
//document.write(color[3]);
//console.log (color [0] + color[4]);
console.log (color.length) //.length - определяет количество елементов в массиве

//Циклы
//Для многократного повторения одного участка кода предусмотрены циклы.
//Одно выполнение тела цикла по-научному называется итерация

//for (начало; условие; шаг) {
  // ... тело цикла ...}


//for( let i=100; i>=30 ;i=i-5)
//console.log(i);


  //let it = 200;
  //while (it >10) {
  //console.log ( it );
  //it/=2;
  

let itter = 42;
do{
  itter/=2

}
while(itter<10);
console.log(itter)

//let color= new Array('red', 'green','blue');
color.push('rose')
for(let i=0; i< color.length; i++) {
  //console.log(color [i]);
}

//Операторы условий
//Оператор == сравнивает на равенство, а вот === — на идентичность.
// Плюс оператора === состоит в том, что он не приводит два значения к одному типу.
// Именно из-за этого он обычно и используется.
/*Операторы сравнения возвращают значения логического типа.
Строки сравниваются посимвольно в лексикографическом порядке.
Значения разных типов при сравнении приводятся к числу.
 Исключением является сравнение с помощью операторов строгого равенства/неравенства.
Значения null и undefined равны == друг другу и не равны любому другому значению.
Будьте осторожны при использовании операторов сравнений вроде > и < с переменными,
 которые могут принимать значения null/undefined. 
Хорошей идеей будет сделать отдельную проверку на null/undefined.*/

let isReady
//if(isReady===true) ідентичні записи
if (isReady) {
  console.log('все готово!') 
  
}
else console.log('неготово!')

// Тернарное выражение - запис вище можна скоротити так
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

let num1=35;
let num2=36;
// != значит неравно . !== неравно жостко, учитывает типы данных
if (num1==num2) {
  //console.log(num1+'='+num2);
  
} else if(num1<num2) {
  //console.log(num1+ '<' + num2);
  
}
else( num1>num2);{
 // console.log(num1+ 'більше ' + num2);
}

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B


/*true || anything - сокращение с результатом true.  : в случае, если какой-либо из аргументов true, 
он вернёт true, в противоположной ситуации возвращается false.

Если значение не логического типа, то оно к нему приводится в целях вычислений.

Например, число 1 будет воспринято как true, а 0 – как false:
При выполнении ИЛИ || с несколькими значениями:

result = value1 || value2 || value3;
Оператор || выполняет следующие действия:

Вычисляет операнды слева направо.
Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
Если все операнды являются ложными (false), возвращает последний из них.
Значение возвращается в исходном виде, без преобразования.

Другими словами, цепочка ИЛИ "||" возвращает первое истинное значение или последнее, если такое значение не найдено.

Например:

alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)*/

/*
false && anything - сокращение с результатом false.
В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false
При нескольких подряд операторах И:

result = value1 && value2 && value3;
Оператор && выполняет следующие действия:

Вычисляет операнды слева направо.
Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
Если все операнды были истинными, возвращается последний.
Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.

Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.*/

 /*(Логическое НЕ) Возвращает false, если операнд может быть преобразован в true; в противном случае возвращает true.
 !true=false*/
let bool=true;
//if (bool) //можно записать как (bool=true)
//  (!bool)еквивалентна такой записи (bool==false) то значит, что  bool=false
 {
  //console.log(bool +'is true');
}
//можно обьединять проверки
let bool1=false;
if (!bool1 && num1==35){
  //console.log(bool1 +  'is false');
}
/*let res=5;
switch (res) {
  case 1:
    alert('res=1');
    break;
 case 2:
    alert('res=2');
    break;
  case 5:
    alert('res=5');
    break;
  default:
    alert('res is unknown')
    break;
}*/

//Функции
// function calculateAge(year) {
//   return 2020 - year
// }
//
// // console.log(calculateAge(1993))
// // console.log(calculateAge(2019))
// // console.log(calculateAge(1999))
//
// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//
//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//     console.log('Вообще-то это уже будущее!')
//   }
//
// }
//
// logInfoAbout('Владилен', 1993)
// logInfoAbout('Елена', 1995)

function text(word) {
 //document.write(word);
}
text('hi, funktion');
text('<br>');


//В функциях можно возвращать что-то
function summ(a,b,c) {
  return a+b+c;
}
//document.write(summ (155,1,20));

//console.log (typeof (summ));



//Создание объектов
let person={
  firstName: 'Alison',
  age: 25,
  children:['Patrik', 'Jady'],
  adress:{
    city: 'California',
    street:'Oldstreet 25',
  },
  //к объектам можно добалять функции
  NameAge:function () {
    return this.firstName+ ', age is-'+this.age;
  }
 }

//console.log(person.NameAge());
//console.log(person.children [0] + ` and `+ person.children[1]);
//console.log(person.adress.city);

//Конструктор создания объектов
/*let apple= new Object();
apple.color='red';
apple.shape='round';*/

/*apple.describe=function() {
 return 'an apple is'+ apple.color + ', and'+apple.shape;
}
console.log(apple.describe());*/

//или можно задавать параметры сразу
function Fruit(color,shape) {
  this.color=color;
  this.shape=shape;
}
let Melon= new Fruit ('yellow', 'round');
let apple= new Fruit ('rose', 'round');
apple.describe=function() {
 return 'an apple is'+ apple.color + ', and'+apple.shape;
}
//console.log(apple.describe());

//пример с циклами
//i++  i=i+1
function f1(){
  let p;
  p=document.getElementById('out')
  //цикл с заданным количеством повторений
  for (let i=0; i<100; i=i+1){
    p.innerHTML +=i +' ';
  }
}

/*const person = {
  firstName: 'Vladilen',
  lastName: 'Minin',
  year: 1993,
  languages: ['Ru', 'En', 'De'],
  hasWife: false,
  greet: function() {
    console.log('greet from person')
  }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()*/

