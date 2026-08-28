// Задание 6

import { userComments } from "./comments.js";
console.log(userComments);

// Задание 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(function (number) {
  return number >= 5;
});

console.log(filteredNumbers);

// Задание 3

const wears = ["dress", "shirt", "trousers", "skirt", "hat", "tie"];
const hasShirt = wears.includes(`shirt`);
console.log(hasShirt);

// Задание 4

function reverseArray(array) {
  array.reverse();
}
reverseArray(numbers);
reverseArray(wears);

console.log(numbers);
console.log(wears);

// 7 задание

const filteredUsers = userComments.filter(function (comment) {
  return comment.email.includes(".com");
});

console.log(filteredUsers);

// 8 задание

const sortById = userComments.map(function (comment) {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
  return comment;
});

console.log(sortById);

//9 задание

const getIdAndName = userComments.map(function (comment) {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(getIdAndName);

//10 задание

const checkLength = userComments.map(function (comment) {
  comment.isInvalid = comment.body.length > 180;
  return comment;
});

console.log(checkLength);

//11 задание

//с помощью map
const saveMail = userComments.map(function (comment) {
  return comment.email;
});

console.log(saveMail);

// с помощью reduse

const saveMailReduse = userComments.reduce(function (acc, comment) {
  acc.push(comment.email);
  return acc;
}, []);

console.log(saveMailReduse);

//12 задание

const mailString = saveMail.toString();

console.log(mailString);
