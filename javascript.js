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
let fName=prompt('add your name')
console.log('mY  name - ' + fName + lastName)

let bedinToStart = 'start  JS!!!';
//bedinToStart = 'let me'
//console.log (bedinToStart)
 //const imya = prompt ('what is your name?');
//console.log ('Your name is '+ imya);

//Типы данных
let logic = true; //boolean
const named='Poizdnyk'; //string
let firstnNum = 42;  //number
let secondNum = 2;
 
//document.writeln ('Resalt', firstnNum + secondNum)
firstnNum ++;
//console.log (firstnNum)
//console.log (Math.floor (2.05));
//console.log (Math.ceil (2.05));
//console.log (Math.round (2.55));

//масивы
//let color=['red', 'green','blue'];
//let color= new Array('red', 'green','blue')
//можна добавить елемент в масив с помощью индекса (от 0), 
//ниже добавили елемент gray
//color[3]='gray'
//можно вместо индекса писать функцию push, добавляет елемент в конец масива
//color.push('rose')
//document.write(color[3]);
//console.log (color [0] + color[4]);

//Циклы

//for( let i=100; i>=30 ;i=i-5)
//console.log(i);

  
 //let it = 200;
  // while (it >10) {
   // console.log ( it );
    //it/=2;
  

  let itter = 42;
do{
  itter/=2

}
while(itter<10);
//console.log(itter)

let color= new Array('red', 'green','blue');
color.push('rose')
for(let i=0; i< color.length; i++) {
  //console.log(color [i]);
}

//Операторы условий
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