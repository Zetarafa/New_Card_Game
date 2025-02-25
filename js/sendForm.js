document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener datos del formulario
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Obtener las cartas seleccionadas
        let selectedCards = JSON.parse(localStorage.getItem("selectedCards")) || [];
        let projectTime = localStorage.getItem("projectTime") || "Nicht angegeben";

        if (!name || !email) {
            alert("Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse ein.");
            return;
        }

        // Crear el objeto de datos para enviar
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        formData.append("projectTime", projectTime);
        formData.append("selectedCards", JSON.stringify(selectedCards));

        // Enviar datos al servidor
        fetch("../php/send_email.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            alert(result);  // Mostrar mensaje del servidor
            localStorage.removeItem("selectedCards");  // Limpiar selección
            localStorage.removeItem('selectedYears');
            localStorage.removeItem('selectedMonths');
            window.location.href = "./ende.html";  // Redirigir a página final
        })
        .catch(error => console.error("Fehler:", error));
    });
});
