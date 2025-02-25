<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);
    $projectTime = htmlspecialchars($_POST["projectTime"]);
    $selectedCards = json_decode($_POST["selectedCards"], true);

    if (empty($name) || empty($email)) {
        die("Fehler: Name und E-Mail sind erforderlich.");
    }

    // Construir el contenido del correo
    $subject = "Neue Projektanfrage von $name";
    $email_content = "Name: $name\n";
    $email_content .= "E-Mail: $email\n";
    $email_content .= "Projektdauer: $projectTime\n\n";
    $email_content .= "Nachricht:\n$message\n\n";
    $email_content .= "Ausgewählte Karten:\n";

    foreach ($selectedCards as $card) {
        $email_content .= "- " . $card["name"] . " (ID: " . $card["id"] . ")\n";
    }

    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Dirección de correo de la empresa
    $to = "kontakt@deinefirma.com";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "Ihre Anfrage wurde erfolgreich gesendet!";
    } else {
        echo "Fehler beim Senden der E-Mail.";
    }
} else {
    echo "Ungültige Anforderung.";
}
?>
