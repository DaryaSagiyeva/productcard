function showWeather(city, temperature) {
  console.log(
    `сейчас в ${city} температура - ${temperature} градусов по цельсию`,
  );
}
showWeather("Алматы", 25);

const speedOfLight = 299792458;
function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(299792458);

const product = "Хлеб";
const price = 100;

function buyProduct(budget) {
  if (budget > price) {
    console.log("Хлеб приобретен. Спасибо за покупаку!");
  } else {
    const x = price - budget;

    console.log(`Вам не хватает ${x}$, пополните баланс`);
  }
}

buyProduct(70);

function personParameters() {}

const weight = 60;
const height = 170;
const age = 30;
