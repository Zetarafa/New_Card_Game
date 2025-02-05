const selectedCards = JSON.parse(localStorage.getItem('selectedCardsGegner')) || [];

document.querySelectorAll('.card').forEach(card => {
    const cardId = card.dataset.id;

    // Create the letter object with ID, background and HTML
    const cardData = {
        id: cardId,
        backgroundImage: card.style.backgroundImage,
        content: card.innerHTML
    };

    // Mark selected cards
    if (selectedCards.some(c => c.id === cardId)) {
        card.classList.add('selected-gegner');
    }

    card.addEventListener('click', () => {
        const index = selectedCards.findIndex(c => c.id === cardId);
        if (index > -1) {
            //Deselect and delete
            selectedCards.splice(index, 1);
            card.classList.remove('selected-gegner');
        } else {
            // Select and save the entire content
            selectedCards.push(cardData);
            card.classList.add('selected-gegner');
        }
        localStorage.setItem('selectedCardsGegner', JSON.stringify(selectedCards));
    });
});




