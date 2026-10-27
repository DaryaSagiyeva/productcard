class Cosmetic {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showInfo() {
    console.log(this.name, this.price);
  }
}

const cosmetic1 = new Cosmetic("Крем для лица", 5000);
const cosmetic2 = new Cosmetic("тушь", 2000);
cosmetic1.showInfo();

class Cream extends Cosmetic {
  constructor(name, price, skinType) {
    super(name, price);
    this.skinType = skinType;
  }
}

const cream1 = new Cream("Увлажняющий крем", 7000, "Сухая");
console.log(cream1.skinType);

class Mascara extends Cosmetic {}

const mascara1 = new Mascara("Тушь для ресниц", 3500);
console.log(mascara1.price);
mascara1.showInfo();
