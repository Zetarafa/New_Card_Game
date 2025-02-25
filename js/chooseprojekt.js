//New-Old

const selectedCards = JSON.parse(localStorage.getItem('selectedCardsProjekt')) || [];
const selectedContainer = document.querySelector('.selected-projekt');

const subtitle = document.createElement('h2');
subtitle.classList.add('project-subtitle');
selectedContainer.appendChild(subtitle);


selectedCards.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('card', 'scaled-card');
    card.dataset.id = cardData.id;
    card.style.backgroundImage = cardData.backgroundImage;
    card.style.transform = 'scale(0.8)';
    card.innerHTML = cardData.content;


    card.addEventListener('click', () => {
        const index = selectedCards.findIndex(c => c.id === cardData.id);
        if (index > -1) {
            selectedCards.splice(index, 1);
            localStorage.setItem('selectedCardsProjekt', JSON.stringify(selectedCards));
            card.remove();

            updateSubtitle();
        }
    });

    selectedContainer.appendChild(card);
});

//Datum

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.selected-projekt2');
    const sphere = document.createElement('div');
    sphere.classList.add('sphere2');

    const subtitle = document.createElement('div');
    subtitle.classList.add('duration-subtitle');

    const years = parseInt(localStorage.getItem('selectedYears'), 10) || 0;
    const months = parseInt(localStorage.getItem('selectedMonths'), 10) || 0;
    const startDate = localStorage.getItem('selectedStartDate');
    const endDate = localStorage.getItem('selectedEndDate');

    if (startDate && endDate) {
        subtitle.textContent = `VON: ${startDate} BIS: ${endDate}`;
    } else if (years > 0 || months > 0) {
        subtitle.textContent = `DAUER: ${years} JAHRE, ${months} MONATE`;
    } else {
        subtitle.textContent = "Keine Dauer oder Zeitraum angegeben.";
    }

    sphere.appendChild(subtitle);
    container.appendChild(sphere);
});

//Developers

// Obtener las cartas seleccionadas desde localStorage
const selectedCards1 = JSON.parse(localStorage.getItem('selectedCards')) || [];

// Contenedor donde se mostrarán las cartas
const selectedContainer1 = document.querySelector('.selected-developers');

selectedCards1.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('card', 'scaled-card');
    card.dataset.id = cardData.id;
    card.style.backgroundImage = cardData.backgroundImage;
    card.style.transform = 'scale(0.8)';
    card.innerHTML = cardData.content;

    // Permitir la eliminación de la carta seleccionada al hacer clic
    card.addEventListener('click', () => {
        const index = selectedCards1.findIndex(c => c.id === cardData.id);
        if (index > -1) {
            selectedCards1.splice(index, 1);
            localStorage.setItem('selectedCards', JSON.stringify(selectedCards1));
            card.remove();
        }
    });

    selectedContainer1.appendChild(card);
});


//Platform

// Gets the selected cards from localStorage
const selectedCards2 = JSON.parse(localStorage.getItem('selectedCardsPlatform')) || [];

// Renders the selected cards on the page
const selectedContainer2 = document.querySelector('.selected-platform');
selectedCards2.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('card', 'scaled-card');
    card.dataset.id = cardData.id;
    card.style.backgroundImage = cardData.backgroundImage;
    card.style.transform = 'scale(0.8)';
    card.innerHTML = cardData.content;

    // Allows you to delete the selected card when you click
    card.addEventListener('click', () => {
        const index = selectedCards2.findIndex(c => c.id === cardData.id);
        if (index > -1) {
            selectedCards2.splice(index, 1);
            localStorage.setItem('selectedCardsPlatform', JSON.stringify(selectedCards2));
            card.remove();
        }
    });
    selectedContainer2.appendChild(card);
});

//Gegner

// Gets the selected cards from localStorage
const selectedCards3 = JSON.parse(localStorage.getItem('selectedCardsGegner')) || [];

// Renders the selected cards on the page
const selectedContainer3 = document.querySelector('.selected-gegner');
selectedCards3.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('card', 'scaled-card');
    card.dataset.id = cardData.id;
    card.style.backgroundImage = cardData.backgroundImage;
    card.style.transform = 'scale(0.8)';
    card.innerHTML = cardData.content;

    // Allows you to delete the selected card when you click
    card.addEventListener('click', () => {
        const index = selectedCards3.findIndex(c => c.id === cardData.id);
        if (index > -1) {
            selectedCards3.splice(index, 1);
            localStorage.setItem('selectedCardsGegner', JSON.stringify(selectedCards3));
            card.remove();
        }
    });
    selectedContainer3.appendChild(card);
});
