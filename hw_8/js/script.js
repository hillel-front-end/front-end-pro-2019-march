/*
Есть обьект `obj = { }`

Внутри него описываем методы `copy, clear, doFunction`.

Организовать создание методов так, что бы можно было вызывать любые

комбинации:<hr >

`obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()`<hr >

`doFunction(func, x, y);` получает параметрами 2 числа и функцию, которую нужно применить к x и y. Результат операции сохранять в `obj.result`<hr >

`clear()` очищает значение `obj.result` в 0<hr >


*

`copy(buffer)` получает параметром название ключа buffer (string) и добавляет его к `obj`

Далее в любом порядке можно вызывать комбинации функций


*

Создать метод `target(property)`- дальнейшие действия функций doFunction() и clear() будут изменять значение не result, а переданной `property`


Пример:

obj

.doFunction(sum, 2, 4)

.copy('some_name')

.target('some_name')

.doFunction(mul, 6, 3)
 */
let obj = {
  result: 0,
  currentTargetKey: '',
  doFunction: function (func, x, y) {
    if (typeof func === "function") {
      if (this.currentTargetKey !== '') {
        this[this.currentTargetKey] = func(x, y);
      }
      else {
        this.result = func(x, y);
      }
    }
    return this;
  },
  copy: function(buffer = '') {
    if (this.currentTargetKey !== '') {
      this[this.currentTargetKey] = 0;
    }
    else {
      this[buffer] = 0;
    }
    return this;
  },
  clear: function () {
    if (this.currentTargetKey !== '') {
      this[this.currentTargetKey] = 0;
    }
    else {
      this.result = 0;
    }
    return this;
  },
  target: function (property = '') {
    this.currentTargetKey = property;
    return this;
  }
};

function sum(x, y) {
  return x + y;
}
function mul(x, y) {
  return x * y;
}

obj.doFunction(sum, 1, 1).doFunction(mul, 6, 3).clear();
console.log(obj);

obj.doFunction(sum, 2, 4).copy('some_name').target('some_name').doFunction(mul, 6, 3);
console.log(obj2);