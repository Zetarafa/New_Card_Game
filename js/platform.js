const selectedCards = JSON.parse(localStorage.getItem('selectedCardsPlatform')) || [];

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
        card.classList.add('selected-platform');
    }

    card.addEventListener('click', () => {
        const index = selectedCards.findIndex(c => c.id === cardId);
        if (index > -1) {
            //Deselect and delete
            selectedCards.splice(index, 1);
            card.classList.remove('selected-platform');
        } else {
            // Select and save the entire content
            selectedCards.push(cardData);
            card.classList.add('selected-platform');
        }
        localStorage.setItem('selectedCardsPlatform', JSON.stringify(selectedCards));
    });
});




