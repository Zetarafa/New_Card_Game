
const selectedCards = JSON.parse(localStorage.getItem('selectedCardsProjekt')) || [];
const container = document.querySelector('.container');

document.querySelectorAll('.card').forEach(card => {
    const cardId = card.dataset.id;

    const cardData = {
        id: cardId,
        backgroundImage: card.style.backgroundImage,
        content: card.innerHTML
    };
    if (selectedCards.some(c => c.id === cardId)) {
        card.classList.add('selected-projekt');
    }
    card.addEventListener('click', () => {
        const index = selectedCards.findIndex(c => c.id === cardId);

        if (index > -1) {
            selectedCards.splice(index, 1);
            card.classList.remove('selected-projekt');
        } else {
            // only 1 card
            if (selectedCards.length === 0) {
                selectedCards.push(cardData);
                card.classList.add('selected-projekt');
            } else {
                alert("Sie können nur eine Karte auswählen!"); 
            }
        }
        localStorage.setItem('selectedCardsProjekt', JSON.stringify(selectedCards));
    });
});
