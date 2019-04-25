/*
Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak.
Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
Если - да, сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод input() класса SuperMath.
Пример обекта: `obj = { X:12, Y:3, znak: “/”}`, возможные варианты znak=> `+ - / * %`.
При вводе znak нужно сделать проверку корректности ввода на возможные математические действия p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> считает﻿
 */
function SuperMath(obj) {
  this.operations = ['+', '-', '/', '*', '%'];
  this.X = obj.X;
  this.Y = obj.Y;
  this.znak = obj.znak;

  this.check = function check() {
    let react = confirm(`Do you want execute method ${this.znak} with numbers X: ${this.X} and Y: ${this.Y} `);
    if (react) {
      this.znakProto(this.X, this.Y, this.znak);
    }
    else {
      this.input();
    }
  };

  this.input = function input() {
    do {
      this.X = +prompt('Input X', '');
    } while (isNaN(this.X));

    do {
      this.Y =  +prompt('Input Y', '');
    } while (isNaN(this.Y));

    do {
      this.znak =  prompt('Input znak', '');
    } while (this.operations.indexOf(this.znak) == -1);

    this.znakProto(this.X, this.Y, this.znak);
  }
}

SuperMath.prototype.znakProto = function(x, y, znak) {
  let res = eval(+x + znak + +y);
  console.log(res);
  return res;
};

let obj = { X:12, Y:3, znak: "/"};
let f = new SuperMath(obj);

f.check(obj);
