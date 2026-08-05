//Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#c8f3e2'
const blueColorHash = '#a8cbeb'

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


//Покраска первой карточки

const firstProductCard = document. querySelector('.card');
const changeColorFirstCardButton =document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
firstProductCard.style.backgroundColor = blueColorHash;
})

//Открыть google

const openGoogleButton = document. querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
const answer = confirm('Вы действительно хотите открыть Google?')

if (answer === true) {
window.open('https://google.com')  
} else {
  return
}
}

//Вывод консоль лог

const outputLogButton = document. querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('дз4'))

function outputConsoleLog (message) {
  alert('Вы действительно хотите открыть Google?')
  console.log(message);
  }

  const catalogTitle = document.querySelector('.catalog__title');

  catalogTitle.addEventListener('mouseenter', () => {
  console.log(catalogTitle.textContent);
});

const toggleColorButton =
  document.querySelector('#toggle-color-button');

  toggleColorButton.addEventListener('click', () => {
  toggleColorButton.classList.toggle(
    'button-active'
  );
});