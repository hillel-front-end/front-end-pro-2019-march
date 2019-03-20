/*
#1
Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры
*/
let count = 0;
do {
  count = +prompt('Сколько чисел ряда Фибоначчи вывести?', '');
} while (count.length <= 0 || isNaN(count));

if (count === 1) {
  console.log(0);
} else if (count === 2) {
  console.log([0, 1].join(', '));
} else {
  let output = [];
  let first = 0;
  let second = 1;
  let current = 0;

  output.push(first);
  output.push(second);
  do {
    current = first + second;
    output.push(current);
    first = second;
    second = current;

  } while (output.length < count);

  console.log(output.join(', '));
  document.write(output.join(', '));
}
document.getElementById('task1_result').innerText = output.join(', ');
console.log(output.join(', '));

/*
#2
Ввести с клавиатуры a и b, где а меньше b. Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры).
Посчитать сумму факториалов* чисел которые попадаются во время перебора.
 */
do {
  a = +prompt('Число А:', '');
  b = +prompt('Число B:', '');
} while (a.length <= 0 ||
isNaN(a) ||
b.length <= 0 ||
isNaN(b) ||
b < a);

do {
  h = +prompt('Шаг перебора:', '');
} while (h.length <= 0 || isNaN(h) || b - a < h);

sum_fact = 0;
for (let i = a; i <= b; i += h) {
  cur_fact = 1;
  for (j = 1; j <= i; j++) {
    cur_fact = j * cur_fact;
  }
  sum_fact += cur_fact;
}
document.getElementById('task2_result').innerText = sum_fact;
console.log(sum_fact);

/*
#3
Выведите столбец четных чисел в промежутке от 0 до 100. (в document в виде таблицы)
 */
let text = '<table>';
for (i = 0; i<= 100; i++) {
  if (!(i % 2)) {
    text += '<tr><td>' + i + '</td></tr>';
  }
}
text += '</table>';
document.getElementById('task3_result').innerHTML = text;
