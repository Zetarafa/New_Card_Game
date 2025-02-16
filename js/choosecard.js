// Initialize selected cards from localStorage
/*const selectedCards = JSON.parse(localStorage.getItem('selectedCards')) || [];

// Select relevant elements
const cards = document.querySelectorAll('.card');
const handContainer = document.querySelector('.hand-container');

// Function to update the hand container
function updateHandContainer() {
  handContainer.innerHTML = ''; // Clear the hand container

  selectedCards.forEach((cardData) => {
    // Create a card element based on the data
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.dataset.id = cardData.id;
    cardElement.style.backgroundImage = cardData.backgroundImage;
    cardElement.innerHTML = cardData.content;

    // Add event to remove the card from the hand
    cardElement.addEventListener('click', () => {
      // Remove the card from the hand and restore it in the main container
      const index = selectedCards.findIndex(c => c.id === cardData.id);
      if (index > -1) {
        selectedCards.splice(index, 1); // Remove from the selected list
        localStorage.setItem('selectedCards', JSON.stringify(selectedCards)); // Save changes
        document.querySelector(`.card[data-id="${cardData.id}"]`).classList.remove('selected-developers');
        updateHandContainer(); // Update the hand
      }
    });

    handContainer.appendChild(cardElement); // Add the card to the hand
  });
}

// Handle card selection in the main container
cards.forEach((card) => {
  const cardId = card.dataset.id;

  const cardData = {
    id: cardId,
    backgroundImage: card.style.backgroundImage,
    content: card.innerHTML,
  };

  // Mark previously selected cards
  if (selectedCards.some(c => c.id === cardId)) {
    card.classList.add('selected-developers');
  }

  // Event to select/deselect cards
  card.addEventListener('click', () => {
    const index = selectedCards.findIndex(c => c.id === cardId);
    if (index > -1) {
      // Deselect card
      selectedCards.splice(index, 1);
      card.classList.remove('selected-developers');
    } else {
      // Select card
      selectedCards.push(cardData);
      card.classList.add('selected-developers');
    }
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards)); // Save selection
    updateHandContainer(); // Update the hand
  });

  // Drag and drop events
  card.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', cardId);
    card.style.transform = 'scale(0.8)'; // Scale down while dragging
  });

  card.addEventListener('dragend', () => {
    card.style.transform = 'scale(0.5)'; // Restore size after dropping
  });
});

// Drop events in the hand container
handContainer.addEventListener('dragover', (e) => {
  e.preventDefault(); // Allow dropping
});

handContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  const cardId = e.dataTransfer.getData('text/plain');
  const card = document.querySelector(`.card[data-id="${cardId}"]`);

  if (card && !selectedCards.some(c => c.id === cardId)) {
    const cardData = {
      id: cardId,
      backgroundImage: card.style.backgroundImage,
      content: card.innerHTML,
    };
    selectedCards.push(cardData);
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards)); // Save selection
    card.classList.add('selected-developers');
    updateHandContainer(); // Update the hand
  }
});

// Initialize the hand container on page load
updateHandContainer();*/

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  const selectedCardsContainer = document.getElementById('selected-cards');
  const cardsContainer = document.querySelector('.cards-container');
  let selectedCards = JSON.parse(localStorage.getItem('selectedCards')) || [];

  // Restore selected cards on page load
  cards.forEach(card => {
      if (selectedCards.includes(card.dataset.id)) {
          selectCard(card, false);
      }
      card.addEventListener('click', function() {
          if (this.classList.contains('selected')) {
              deselectCard(this);
          } else {
              selectCard(this, true);
          }
      });
  });

  function selectCard(card, animate) {
      card.classList.add('selected');
      selectedCards.push(card.dataset.id);
      selectedCardsContainer.appendChild(card);
      if (animate) card.style.transition = 'transform 0.5s ease, right 0.5s ease';
      updateCardPositions();
      localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
  }

  function deselectCard(card) {
      card.classList.remove('selected');
      selectedCards = selectedCards.filter(id => id !== card.dataset.id);
      cardsContainer.appendChild(card);
      card.style.transition = 'transform 0.5s ease, left 0.5s ease';
      card.style.transform = 'none';
      localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
  }

  function updateCardPositions() {
    const selectedCardsList = document.querySelectorAll('#selected-cards .card');
    selectedCardsList.forEach((card, index) => {
        const angle = (index - (selectedCardsList.length - 1) / 2) * 10;

        // Asegurar el punto de rotación en la esquina inferior derecha
        card.style.transformOrigin = "bottom right";

        // Ajustar la transformación manualmente
        card.style.transform = `translate(-60%, -50%) rotate(${angle}deg) scale(0.5)`;

        // Ajustar la posición
        card.style.right = `${index * 20}px`;
    });
}



});
