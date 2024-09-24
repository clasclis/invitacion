const card = document.getElementById('card');
const modal = document.getElementById('image-modal');
const closeModalBtn = document.getElementById('close-modal');

let isFlipped = false;

// Flip card on click
card.addEventListener('click', function () {
  if (!isFlipped) {
    card.classList.toggle('flipped');
    isFlipped = true;
  }
});

// Show the modal when clicking the back side of the card
const cardBackImage = document.querySelector('.card-back img');
cardBackImage.addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the card from flipping again
  if (isFlipped) {
    showPopup();
  }
});

// Function to show the popup modal
function showPopup() {
  modal.style.display = 'flex'; // Show the modal
}

// Function to hide the popup modal
function hidePopup() {
  modal.style.display = 'none'; // Hide the modal
}

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', function () {
  hidePopup();
});

// Close the modal when clicking outside the modal content
modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    hidePopup();
  }
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');

    // Add the fade-in class after the page loads
    card.classList.add('fade-in');
});

const card = document.getElementById('card');
const modal = document.getElementById('image-modal');
const closeModalBtn = document.getElementById('close-modal');

let isFlipped = false;

// Flip card on click
card.addEventListener('click', function () {
    // Toggle the 'flipped' class for the flip animation
    card.classList.toggle('flipped');
    isFlipped = !isFlipped;
});

// Show the modal when clicking the back side of the card
const cardBackImage = document.querySelector('.card-back img');
cardBackImage.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the card from flipping again
    if (isFlipped) {
        showPopup();
    }
});

// Function to show the popup modal
function showPopup() {
    modal.style.display = 'flex'; // Show the modal
}

// Function to hide the popup modal
function hidePopup() {
    modal.style.display = 'none'; // Hide the modal
}

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', function () {
    hidePopup();
});

// Close the modal when clicking outside the modal content
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        hidePopup();
    }
});
  
  
});

