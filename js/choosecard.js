// Inicializar las cartas seleccionadas desde localStorage
const selectedCards = JSON.parse(localStorage.getItem('selectedCards')) || [];

// Seleccionar elementos relevantes
const cards = document.querySelectorAll('.card');
const handContainer = document.querySelector('.hand');

// Función para actualizar el contenedor de "mano"
function updateHandContainer() {
  handContainer.innerHTML = ''; // Limpiar el contenedor de la mano

  selectedCards.forEach((cardData) => {
    // Crear un elemento de carta basado en los datos
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.dataset.id = cardData.id;
    cardElement.style.backgroundImage = cardData.backgroundImage;
    cardElement.innerHTML = cardData.content;

    // Añadir evento para quitar la carta de la mano
    cardElement.addEventListener('click', () => {
      // Remover la carta de la mano y restaurar en el contenedor principal
      const index = selectedCards.findIndex(c => c.id === cardData.id);
      if (index > -1) {
        selectedCards.splice(index, 1); // Eliminar de la lista de seleccionadas
        localStorage.setItem('selectedCards', JSON.stringify(selectedCards)); // Guardar cambios
        document.querySelector(`.card[data-id="${cardData.id}"]`).classList.remove('selected-developers');
        updateHandContainer(); // Actualizar la mano
      }
    });

    handContainer.appendChild(cardElement); // Agregar la carta a la mano
  });
}

// Manejo de selección de cartas en el contenedor principal
cards.forEach((card) => {
  const cardId = card.dataset.id;

  const cardData = {
    id: cardId,
    backgroundImage: card.style.backgroundImage,
    content: card.innerHTML,
  };

  // Marcar cartas previamente seleccionadas
  if (selectedCards.some(c => c.id === cardId)) {
    card.classList.add('selected-developers');
  }

  // Evento para seleccionar/deseleccionar cartas
  card.addEventListener('click', () => {
    const index = selectedCards.findIndex(c => c.id === cardId);
    if (index > -1) {
      // Deseleccionar carta
      selectedCards.splice(index, 1);
      card.classList.remove('selected-developers');
    } else {
      // Seleccionar carta
      selectedCards.push(cardData);
      card.classList.add('selected-developers');
    }
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards)); // Guardar selección
    updateHandContainer(); // Actualizar la mano
  });
});

// Inicializar el contenedor de la mano al cargar la página
updateHandContainer();

