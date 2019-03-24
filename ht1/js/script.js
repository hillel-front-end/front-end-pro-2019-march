// Task 1.
/*
Написать программу рассчета обьема цилиндра, все данные (кроме числа PI) вводятся с клавиатуры руками. (число Пи в js выглядит так: Math.PI). Также нужно вывести информацию в таком виде: `**************` `Обьем цилиндра с площадью основы *S* (вывети значение), радиусом *R* и высотой *H* равен:` `--------------------` `V = результат.` `-------------------` `end.` P.S. Все звездочки и черточки нужно нарисовать. Вывод выполнять в документ (document.write())
 */

let radius = prompt('Input radius', 0);
let height = prompt('Input height', 0);
let square = 2 * Math.PI * radius;

let result = `
<div>
 ************** <br /> 
 Обьем цилиндра с площадью основы <b>*S* ${square}</b>, радиусом <b>*${radius}*</b> и высотой <b>*${height}*</b> равен: <br /> 
 -------------------- <br />
 V = ${square * height}. <br />
 ------------------- <br />
 end. <br />
 </div>
`;
document.write(result);

// Task 2.
/*
Ввести с клавиатуры 3 переменные (a, b, c). Привести их все в число. Выполнить операцию суммирования всех переменных. Указать какие переменные являются чётными.
 */
let arr = [];
arr[0]  = prompt('Input number 1', 0);
arr[1]  = prompt('Input number 2', 0);
arr[2]  = prompt('Input number 3', 0);
let sum = 0;
for (item of arr) {
    sum += +item;
    if (!(item % 2) ) {
        document.write(`<p style='color: green'>Число ${item} - четное.</p>`)
    }
    else {
        document.write(`<p style='color: red'>Число ${item} - четное.</p>`)
    }
}
document.write(`<b>Сумма чисел: ${sum}.</b>`)
