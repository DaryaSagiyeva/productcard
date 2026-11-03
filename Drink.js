class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создавать Drink напрямую");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  getInfo() {
    return `${this.name}, ${this.size} мл, ${this.price} тг`;
  }

  #prepare() {
    console.log(`Готовим напиток:${this.name}`);
  }
  serve() {
    this.#prepare();
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, milk) {
    super(name, size, price, temperature);
    this.milk = milk;
  }
  getInfo() {
    return `${super.getInfo()}, молоко: ${this.milk}`;
  }
}
const coffee = new Coffee("Капучино", 300, 1200, 80, "овсяное");
coffee.serve();
console.log(coffee.getInfo());
console.log(coffee.milk);

class Tea extends Drink {
  constructor(name, size, price, temperature, type) {
    super(name, size, price, temperature);
    this.type = type;
  }

  getInfo() {
    return `${super.getInfo()}, вид чая: ${this.type}`;
  }
}
const tea = new Tea("Зелёный чай", 250, 700, 85, "зеленый");
console.log(tea.getInfo());
console.log(tea.type);

class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);
    this.flavor = flavor;
  }

  getInfo() {
    return `${super.getInfo()}, вид лимонада: ${this.flavor}`;
  }
}
const lemonade = new Lemonade("Лимонад", 500, 700, 0, "клубничный");
console.log(lemonade.getInfo());
console.log(lemonade.flavor);

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе ${this.name}, местоположение: ${this.location}`;
  }
  orderDrink(drink) {
    drink.serve();
  }
}

const cafe = new Cafe("Уют", "Алматы");
console.log(cafe.getInfo());
cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
