/*
В задачу п.2 из лекции добавить 3ий аргумента flag, который является boolean. Если флаг true,
тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.

```

assignObjects({...}, {...}, false);
 */

function assignObjects(obj1, obj2, flag = false){
  newObj = {};
  if (!flag) {
    newObj = fillNewObject(obj1, newObj);
    newObj = fillNewObject(obj2, newObj);
  }
  else {
    newObj = fillNewObject(obj2, newObj);
    newObj = fillNewObject(obj1, newObj);
  }

  return newObj;
}

function fillNewObject(obj, newObj = {}) {
  for (var i in obj) {
    newObj[i] = obj[i];
  }
  return newObj;
}

res0 = assignObjects({ x: 10, y: 20 }, { z: 30 }, false);
res1 = assignObjects({ x: 10, y: 20 }, { z: 30 }, true);
res2 = assignObjects({ x: 10 }, { x: 20, y: 30 }, true);
res3 = assignObjects({ x: 10 }, { x: 20, y: 30 }, false);
console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);

/*Адаптировать задачу #1 из домашней работы под неопределенное количество аргументов. Последний аргумент true || false*/

function assignObjectsLong() {
  var args = Array.prototype.slice.call(arguments);
  let flag = args.pop();
  let objects = args;

  newObj = {};
  for (let index = 0; index < objects.length - 1; index++) {
    let obj1 = objects[index];
    let obj2 = objects[index + 1];
    if (!flag) {
      newObj = fillNewObject(obj1, newObj);
      newObj = fillNewObject(obj2, newObj);
    }
    else {
      newObj = fillNewObject(obj2, newObj);
      newObj = fillNewObject(obj1, newObj);
    }
  }

  return newObj;
}

res1 = assignObjectsLong({ x: 10, y: 20 }, { x: 1, z: 30, y : 1 }, { y: 110 }, false);
res2 = assignObjectsLong({ x: 10, y: 20 }, { x: 2, z: 30, y : 2 }, { y: 220 }, true);

console.log(res1);
console.log(res2);
