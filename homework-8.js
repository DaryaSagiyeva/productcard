//3 задание

const user = {
  name: "Дарья",
  surname: "Сагиева",
  gender: "женщина",
  email: "b22d@mail.ru",
  age: 39,
  height: 167,
  country: "Казахстан",
  city: "Алматы",
  maritalStatus: "замужем",
  nationality: "украинка",
};

console.log(user);

//4 задание

const auto = {
  brand: "Toyota",
  model: "Rav4",
  year: 2023,
  color: "red",
  transmission: "automatic",
  owner: user,
};

auto.owner = user;
console.log(auto);

//5 задание

function addMaxSpedd(car) {
  if (!("maxSpeed" in car)) {
    car.maxSpeed = 200;
  }
}

addMaxSpedd(auto);
console.log(auto);

//6 задание

function findCarCountry(car, property) {
  console.log(car[property]);
}

findCarCountry(auto, "brand");

//7 задание

const products = ["butter", "bread", "meat"];

// 8 задание

const book1 = {
  name: "future",
  author: "S.Gray",
  year: 2028,
  color: "green",
  genre: "fantasy",
};

const book2 = {
  name: "Rose",
  author: "Aliyeva",
  year: 1993,
  color: "red",
  genre: "drama",
};

const book3 = {
  name: "333alone",
  author: "Shteiner",
  year: 1998,
  color: "red",
  genre: "drama",
};

const book4 = {
  name: "whiteRiwer",
  author: "Leonov",
  year: 2014,
  color: "redblue",
  genre: "detective",
};

const books = [book1, book2, book3];

books.push(book4);

console.log(books);

// 9 задание

const earthbook1 = {
  name: "earth",
  author: "S.Bray",
  year: 2012,
  color: "green",
  genre: "fantasy",
};

const earthbook2 = {
  name: "earth2",
  author: "S.Bray",
  year: 2013,
  color: "green",
  genre: "fantasy",
};

const earthbook3 = {
  name: "earth3",
  author: "S.Bray",
  year: 2014,
  color: "green",
  genre: "fantasy",
};

const earthbooks = [earthbook1, earthbook2, earthbook3];

const allBooks = [...books, ...earthbooks];

console.log(allBooks);

// 10 задание

function checkRare(books) {
  books.map(function (book) {
    book.isRare = book.year > 2000;
  });
}

checkRare(allBooks);
console.log(allBooks);
