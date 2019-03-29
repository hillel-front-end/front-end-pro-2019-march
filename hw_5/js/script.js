// Task 1.
/*
написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.
 */
var size = Math.floor(Math.random()*(100-1) + 1);
function generateArray(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random()*(100-1) + 1);
  }
  return arr;
}

var arr1 = generateArray(size);
var arr2 = generateArray(size);

function arraySumElements(arr){
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (!isNaN(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
}

function compareArraySum(arr1, arr2) {
  let sum1 = arraySumElements(arr1);
  console.log(sum1);
  let sum2 = arraySumElements(arr2);
  console.log(sum2);
  if (sum1 > sum2) {
    return sum1;
  }
  else {
    return sum2;
  }
}

let max_sum = compareArraySum(arr1, arr2);
console.log('Task 1. Result');
console.log(max_sum);


// Task 2.


/*
Написать функцию `doMath(x, znak, y)`, которая получает 3 аргумента: числа `x` и `y`, строку
`znak`. В переменной знак может быть: `+, -, *, /, %, ^`. Вывести результат
математического действия, указанного в переменной `znak`.
 */
function doMath(x, znak = '+', y) {
  let res = '';
  switch (znak) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      res = eval(+x + znak + +y);
      break;
    case '^':
      res = Math.pow(x, y);
      break;
    default:
      res = 'Запрещенная операция. Доступные операции - +, -, *, /, %, ^';
      break;
  }
  return res;
}
console.log('Task 2. Result');
console.log(doMath(1, '+' ,1));
console.log(doMath(1, '-' ,1));
console.log(doMath(1, '*' ,1));
console.log(doMath(1, '/' ,1));
console.log(doMath(1, '%' ,1));
console.log(doMath(1, '^' ,1));
console.log(doMath(1, '++' ,1));

// Task 3.
/*
Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor"
 */

var string = 'Hello World';
let newString = removeLetters(string, ['l', 'd']);
console.log('Task 3. Result');
console.log(newString);
function removeLetters(string, symbols = []) {
  let arr = string.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < symbols.length; j++) {
      if (symbols[j].toLowerCase() === arr[i].toLowerCase()) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr.join('');
}
