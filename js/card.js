/*

const selectedCards = JSON.parse(localStorage.getItem('selectedCards')) || [];

document.querySelectorAll('.card').forEach(card => {
    const cardId = card.dataset.id;

    
    const cardData = {
        id: cardId,
        backgroundImage: card.style.backgroundImage,
        content: card.innerHTML
    };
    if (selectedCards.some(c => c.id === cardId)) {
        card.classList.add('selected-developers');
    }

    card.addEventListener('click', () => {
        const index = selectedCards.findIndex(c => c.id === cardId);
        if (index > -1) {
            selectedCards.splice(index, 1);
            card.classList.remove('selected-developers');
        } else {
            selectedCards.push(cardData);
            card.classList.add('selected-developers');
        }
        localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
    });
});
*/

