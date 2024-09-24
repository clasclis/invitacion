const card = document.querySelector('.card-inner');

card.addEventListener('click', function() {
  card.classList.toggle('is-flipped'); // Flip on click
});

window.addEventListener('resize', function() {
  if (window.innerWidth <= 600) {
    // Código para móviles
  } else {
    // Código para pantallas grandes
  }
});

