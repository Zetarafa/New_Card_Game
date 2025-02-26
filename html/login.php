<?php
session_start();

// Define correct username and password (hash of "1234")
$benutzername_gueltig = "admin";
$hash_gespeichert = '$2a$12$6RpsoNBQX1eMp5f.tBgwc.thfg0IXeQ3B.8f/N1C6IPSV2OTcCepq'; // Hash von "1234"

if (isset($_POST['benutzername']) && isset($_POST['passwort'])) {
    $benutzername = $_POST['benutzername'];
    $passwort = $_POST['passwort'];

    // Verify username and password with password_verify()
    if ($benutzername === $benutzername_gueltig && password_verify($passwort, $hash_gespeichert)) {
        $_SESSION['authentifiziert'] = true;
        header("Location: protegido.php"); // Redirect to protected page
        exit();
    } else {
        echo "Benutzername oder Passwort ist falsch.";
    }
} else {
    echo "Bitte fülle alle Felder aus.";
}
?>
