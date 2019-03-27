/*
Task 1.
1) В одномерном массиве произвести такую замену: 1 элемент поменять с 2 3 элемент поменять с 4 5 элемент поменять с 6 и тд
 Если массив непарный - последний элемент не трогать. было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5
 */

arr1 = [1,2,3,4,5,6];
res1 = '<div>Started array: ' + arr1.join(', ') + '</div>';
document.write('');
for (i = 0; i < arr1.length; i++) {
  if (!(i % 2)) {
    odd = arr1[i];
    if (arr1[i+1] !== undefined) {
      arr1[i] = arr1[i+1];
      arr1[i+1] = odd;
    }
  }
}
res1 += '<div>Changed array: ' + arr1.join(', ') + '</div>';
document.getElementById('result1').innerHTML = res1;



/*
Task 2. В одномерном массиве заполненным случайными числами
        * Найти разность между максимальным и минимальным элементами массива
        * Вывести элементы массива, которые больше среднего арифметического
        * Определить индексы элементов массива, значение которых лежит в указанном пределе. Предел вводится с клавиатуры как A, B
        * Удалить повторяющиеся элементы из массив, оставить массив уникальных значений

 */

n_a = Math.floor(Math.random() * 20 + 1);
a = +prompt('Start position:', '');
b = +prompt('End position:', '');
arr2 = new Array(n_a);

for (i = 0; i < arr2.length; i++) {
  arr2[i] = Math.floor(Math.random() * (100) + 1);
}
let max = arr2[0];
let min = arr2[0];
let sum = 0;
for (i = 0; i < arr2.length; i++) {
  sum += arr2[i];
  num = arr2[i];
  is_simple = true;
  if (num >= max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
}

average = (sum/arr2.length).toFixed(2);
more_avg= [];
gap = [];
unique = [];
for (i = 0; i < arr2.length; i++) {
   if (arr2[i] > average) {
     more_avg.push(arr2[i]);
   }
   if (arr2[i] >= a && arr2[i] <= b) {
     gap.push(i);
   }
  if (!unique.includes(arr2[i])) {
    unique.push(arr2[i]);
  }
}
result = document.getElementById('result2');
out = '<div>' + 'Стартовый массив:  ' + arr2.join(', ') + '</div>';
out += '<div>' + 'Найти разность между максимальным и минимальным элементами массива: ' + (max - min) + '</div>';
out += '<div>' + 'Вывести элементы массива, которые больше среднего арифметического: (' + average + ')' + more_avg.join(', ') + '</div>';
out += '<div>' + ' Определить индексы элементов массива, значение которых лежит в указанном пределе. Предел вводится с клавиатуры как A ('+a+'), B ('+b+'): ' + gap.join(', ') +  '</div>';
out += '<div>' + ' Удалить повторяющиеся элементы из массив, оставить массив уникальных значений: ' + unique.join(', ') +  '</div>';

result.innerHTML = out;