/**
 * Task 1. Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436]; 1. проверить все числа на простоту, и найденные простые числа сохранить в массив B. 2. найти максимальное число и минимальное число.
 * @type {number}
 */
n_a = Math.floor(Math.random() * 20 + 1);

arrA = new Array(n_a);
newArr = [];


for (i = 0; i < arrA.length; i++) {
  arrA[i] = Math.floor(Math.random() * (100) + 1);
}
let max = arrA[0];
let min = arrA[0];
for (i = 0; i < arrA.length; i++) {
  num = arrA[i];
  is_simple = true;
  if (num >= max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }

  for (j = 2; j < num; j++) {
    diff =  num % j;
    if (!diff) {
      is_simple = false;
      break;
    }
  }
  if (!is_simple) {
    continue;
  }
  else {
    if (num > 1) {
      newArr.push(num);
    }
  }
}
document.getElementById('task1_result').innerHTML = 'Масив всех чисел: ' + arrA.join(',') + '<br />' +
    'Массив простых числе: ' + newArr.join(', ');
document.getElementById('task1_min').innerText = 'Minimum: ' + min ;
document.getElementById('task1_max').innerText = 'Maximum: ' + max ;

// Task 2.
//Элементы массива между min -- max записать в массив B. Массив взять из 1го задания. В массиве A поменять местами min и max.

let new_min = newArr[0];
let new_max = newArr[0];
let min_key = 0;
let max_key = 0;
for (i = 0; i < newArr.length; i++) {
  if (newArr[i] >= new_max) {
    new_max = newArr[i];
    max_key = i;
  }
  if (newArr[i] < new_min) {
    new_min = newArr[i];
    min_key = i;
  }
}
out = 'Начальныый массив: ' + newArr.join(',') + '<br />';
newArr[min_key] = new_max;
newArr[max_key] = new_min;
out += 'Измененный массив: ' + newArr.join(',') + '<br />';

document.getElementById('task2_result').innerHTML = out;
