/*
#1

Дана функция:


function f (a, b, c) {
  function sum (a, b) {
    return a + b;
  }
}

Перепишите её следующим образом:

    Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
    Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.
    Функция f должны возвращать результат функции аргумента c, если он есть, либо результат функции sum.
 */

function f (a = 2, b = 3, c = null) {
  let result;
  function sum (a, b) {
    return a + b;
  }
  function additional() {
    return 'Function C works.'
  }
  result = sum(a, b);
  if (typeof c == 'function') {
    result = additional();
  }
  return result;
}

function call() {
  return;
}

res = f(call());
console.log(res);
res = f();
console.log(res);
res = f(10, 20, call);
console.log(res);
res = f(100, 200);
console.log(res);