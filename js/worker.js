document.addEventListener("DOMContentLoaded", function () {
    let selectedCards = JSON.parse(localStorage.getItem("selectedCards")) || [];
    const selectedContainer = document.querySelector(".selected-cards");
    const cards = document.querySelectorAll(".card");
    const timeContainer = document.querySelector(".time");
    const isNewOldPage = window.location.pathname.includes("new_old.html");
    const isDevelopersPage = window.location.pathname.includes("developers.html");

    // Función para actualizar minicartas en la esquina inferior derecha
    function updateSelectedCards() {
        selectedContainer.innerHTML = ""; 

        selectedCards.forEach((cardData, index) => {
            const miniCard = document.createElement("div");
            miniCard.classList.add("mini-card");
            miniCard.style.backgroundImage = `url(${cardData.backgroundImage})`;
            miniCard.style.position = "relative";
            miniCard.style.display = "flex";
            miniCard.style.alignItems = "center";
            miniCard.style.justifyContent = "center";
            miniCard.style.color = "white";
            miniCard.style.fontSize = "12px";
            miniCard.style.fontWeight = "bold";
            miniCard.style.textAlign = "center";
            miniCard.style.textShadow = "1px 1px 2px black";

            // Solo mostrar el nombre en las minicartas de newold y developers
            if (isNewOldPage || isDevelopersPage) {
                const nameElement = document.createElement("div");
                nameElement.textContent = cardData.name;
                nameElement.style.position = "absolute";
                nameElement.style.width = "100%";
                nameElement.style.top = "50%";
                nameElement.style.transform = "translateY(-50%)";
                miniCard.appendChild(nameElement);
            }

            // Posición en forma de abanico
            const offset = index * -10;
            miniCard.style.transform = `translate(${offset - 40}px, 30px)`;

            miniCard.addEventListener("click", function () {
                removeCard(cardData.id);
            });

            selectedContainer.appendChild(miniCard);
        });
    }

    // Función para eliminar una carta seleccionada
    function removeCard(cardId) {
        selectedCards = selectedCards.filter(c => c.id !== cardId);
        localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
        updateSelectedCards();
        updateMainCards();
    }

    // Función para actualizar la apariencia de las cartas principales
    function updateMainCards() {
        cards.forEach(card => {
            const cardId = card.dataset.id;
            if (selectedCards.some(c => c.id === cardId)) {
                card.classList.add("selected");
                card.style.opacity = "0.5";
                card.style.transform = "scale(0.85)";
            } else {
                card.classList.remove("selected");
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
            }
        });
    }

    // Evento para seleccionar una carta
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const cardId = card.dataset.id;
            const cardFront = card.querySelector(".card-front") || card; // Si no tiene .card-front, usa la carta directamente
            const cardName = card.querySelector("h2") ? card.querySelector("h2").innerText : "";
            const cardData = {
                id: cardId,
                backgroundImage: cardFront.style.backgroundImage.replace('url("', '').replace('")', ''),
                name: cardName,
            };

            const index = selectedCards.findIndex(c => c.id === cardId);
            if (index > -1) {
                removeCard(cardId);
            } else {
                selectedCards.push(cardData);
            }

            localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
            updateSelectedCards();
            updateMainCards();
        });
    });

    // Mostrar minicartas y actualizar la interfaz
    updateSelectedCards();
    updateMainCards();


// Function to update the time display
function updateTimeDisplay() {
    if (!timeContainer) return;
    timeContainer.innerHTML = "";

    const sphere = document.createElement("div");
    sphere.classList.add("sphere2");
    const subtitle = document.createElement("div");
    subtitle.classList.add("duration-subtitle");

    const years = parseInt(localStorage.getItem("selectedYears"), 10) || 0;
    const months = parseInt(localStorage.getItem("selectedMonths"), 10) || 0;
    const startDate = localStorage.getItem("selectedStartDate");
    const endDate = localStorage.getItem("selectedEndDate");

    if (startDate && endDate) {
        subtitle.innerHTML = `VON: <a href='./time.html'>${startDate}</a> BIS: <a href='./time.html'>${endDate}</a>`;
    } else if (years > 0 || months > 0) {
        subtitle.innerHTML = `DAUER: <a href='./time.html'>${years} JAHRE, ${months} MONATE</a>`;
    } else {
        subtitle.innerHTML = "<a href='./time.html'>Keine Dauer oder Zeitraum angegeben.</a>";
    }

    sphere.appendChild(subtitle);
    timeContainer.appendChild(sphere);
}

updateTimeDisplay();

});

