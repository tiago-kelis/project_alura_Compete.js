
const searchButton = document.querySelector('button');
const carCard = document.getElementById('ranger');

searchButton.addEventListener('click', () => {
  carCard.style.display = 'block';
});

carCard.style.opacity = 0; // Inicialmente, o card está transparente
// ...
carCard.style.opacity = 1; // Ao mostrar, a opacidade aumenta gradualmente