/**
 Сеть фастфудов предлагает несколько видов гамбургеров:


 маленький (50 тугриков, 20 калорий)
 большой (100 тугриков, 40 калорий)

 Гамбургер может быть с одним из нескольких видов начинок:


 сыром (+ 10 тугриков, + 20 калорий)
 салатом (+ 20 тугриков, + 5 калорий)
 картофелем (+ 15 тугриков, + 10 калорий)

 Можно добавить добавки:


 посыпать приправой (+ 15 тугриков, 0 калорий)
 полить майонезом (+ 20 тугриков, + 5 калорий).

 Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы,
 методы для выбора опций и рассчета нужных величин).

 Пример работы кода:

 // маленький гамбургер с начинкой из сыра

 var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

 // добавка из майонеза

 hamburger.addTopping(Hamburger.TOPPING_MAYO);

 // спросим сколько там калорий

 console.log(“Calories: “ + hamburger.calculateCalories());

 // сколько стоит

 console.log("Price: “ + hamburger.calculatePrice());

 // я тут передумал и решил добавить еще приправу

 hamburger.addTopping(Hamburger.TOPPING_SAUCE);

 // А сколько теперь стоит?

 console.log("Price with sauce: “ + hamburger.calculatePrice());
 */
class Hamburger {

  constructor (ham, stuffing = []) {
    this.price = 0;
    this.calories = 0;
    this.setPrice(ham.price);
    this.setCalories(ham.cal);
    if (stuffing) {
      for (let i = 0; i < stuffing.length; i++) {
        this.setPrice(stuffing[i].price);
        this.setCalories(stuffing[i].cal);
      }
    }
  }

  setPrice(price) {
    this.price += price;
  }
  setCalories(cal) {
    this.calories += cal;
  }

   addTopping (topping = {}) {
    this.setPrice(topping.price);
    this.setCalories(topping.cal);
  }

  calculatePrice () {
    return this.price;
  }

  calculateCalories() {
    return this.calories;
  }
}

Hamburger.SIZE_SMALL = {
  name: 'small',
  price: 50,
  cal: 20,
};
Hamburger.SIZE_BIG = {
  name: 'big',
  price: 100,
  cal: 40,
};

Hamburger.TOPPING_MAYO = {
  name: 'mayonees',
  price: 20,
  cal: 5,
};

Hamburger.TOPPING_SPICE = {
  name: 'spices',
  price: 15,
  cal: 0,
};

Hamburger.STUFFING_CHEESE = {
  name: 'chesse',
  price: 10,
  cal: 20,
};
Hamburger.STUFFING_SALAD = {
  name: 'salad',
  price: 20,
  cal: 5
};
Hamburger.STUFFING_POTATO = {
  name: 'potato',
  price: 15,
  cal: 10
};

// маленький гамбургер с начинкой из сыра

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза

hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий

console.log("Calories: " + hamburger.calculateCalories());

// сколько стоит

console.log("Price: " + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу

hamburger.addTopping(Hamburger.TOPPING_MAYO);

// А сколько теперь стоит?

console.log("Price with sauce: " + hamburger.calculatePrice());