<?php
session_start();

// Define valid username and hashed password (Hash for "1234")
$benutzername_gueltig = "admin";
$passwort_hash = '$2a$12$6RpsoNBQX1eMp5f.tBgwc.thfg0IXeQ3B.8f/N1C6IPSV2OTcCepq'; // Hash of "1234"

// Check if username and password are set
if (isset($_POST['benutzername']) && isset($_POST['passwort'])) {
    $benutzername = $_POST['benutzername'];
    $passwort = $_POST['passwort'];

    // Verify username and password
    if ($benutzername === $benutzername_gueltig && password_verify($passwort, $passwort_hash)) {
        $_SESSION['autentifiziert'] = true; // Set session variable
        header("Location: protegido.php"); // Redirect to protected page
        exit();
    } else {
        echo "Benutzername oder Passwort ist falsch."; // Error message in German
    }
} else {
    echo ""; // Message if fields are empty
}
?>





<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Interaktive Projektzusammenstellung</title>
    <link rel="stylesheet" href="../css/styles.css" />
    <script>
      window.addEventListener("load", () => {
        localStorage.clear();
      });
    </script>
  </head>

  <body>
    <div class="container">
      <h1>Interaktive Projektzusammenstellung</h1>
      <p>Stelle dein Projekt auf...mit einem Kartendeck!</p>
    </div>
    <div class="container-button">
      <button class="left-button" onclick="location.href='https://qm-interactive.com/'">ZURÜCK</button>
      <a href="./platform.html" id="button"></a>
      <span class="button-label">START</span>
    </div>
    <div class="cards-container">
      
      <!-- Isa -->
      <div
        class="card"
        data-id="8"
        style="background-image: url('../images/Isa.png')"
      >
        <div class="header">
          <img src="designer_icon.png" alt="Designer" />
          <h2>Isa</h2>
        </div>
        <div class="abilities">
          <img src="../images/jira.png" alt="UI/UX" />
        </div>
        <div class="description">
          <p>
            The mysterious prince of colors keeps hidden in the dark            
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            6500<br />
            <span>CREATIVIDAD</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫<br />
            <span>ENERGÍA</span>
          </div>
        </div>
      </div>
      <!-- Tom -->
      <div
        class="card"
        data-id="9"
        style="background-image: url('../images/Tom.png')"
      >
        <div class="header">
          <img src="developer_icon.png" alt="Producer" />
          <h2>Tom</h2>
        </div>
        <div class="abilities">
          <img src="../images/jira.png" alt="Backend" />
        </div>
        <div class="description">
          <p>
            Silent Shepherd, guiding Jira tasks
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            8000<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Quirin -->
      <div
        class="card"
        data-id="10"
        style="background-image: url('../images/Quirin.png')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Management" />
          <h2>Quirin</h2>
        </div>
        <div class="abilities">
          <img src="concept_art_icon.png" alt="Concept Art" />
        </div>
        <div class="description">
          <p></p>
        </div>
        <div class="stats">
          <div class="attribute">
            9000<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Laura -->
      <div
        class="card"
        data-id="11"
        style="background-image: url('../images/Laura.png')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Designer" />
          <h2>Laura</h2>
        </div>
        <div class="abilities">
          <img
            src="concept_art_icon.png"
          />
        </div>
        <div class="description">
          <p>
            This effect is highly efficient against the
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            8800<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Ronny -->
      <div
        class="card"
        data-id="12"
        style="background-image: url('../images/Ronny.png')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Management" />
          <h2>Ronny</h2>
        </div>
        <div class="abilities">
          <img src="concept_art_icon.png" alt="Concept Art" />
        </div>
        <div class="description">
          <p>
            This extensive experience and the wisdom of the ages 
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            8800<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Jacky -->
      <div
        class="card"
        data-id="13"
        style="background-image: url('../images/Jacky.jpg')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Art" />
          <h2>Jacky</h2>
        </div>
        <div class="abilities">
          <img src="concept_art_icon.png" alt="Concept Art" />
        </div>
        <div class="description">
          <p>
            An empathetic and kind-hearted master archer            
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            8800<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Dominic -->
      <div
        class="card"
        data-id="14"
        style="background-image: url('../images/Dominic.png')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Programmer" />
          <h2>Dominic</h2>
        </div>
        <div class="abilities">
          <img src="../images/concept_art_icon.png" alt="Concept Art" />
        </div>
        <div class="description">
          <p>Sonic Cyber Mage.</p>
        </div>
        <div class="stats">
          <div class="attribute">
            7500<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Isa -->
      <div
        class="card"
        data-id="8"
        style="background-image: url('../images/Isa.png')"
      >
        <div class="header">
          <img src="designer_icon.png" alt="Designer" />
          <h2>Isa</h2>
        </div>
        <div class="abilities">
          <img src="../images/jira.png" alt="UI/UX" />
        </div>
        <div class="description">
          <p>
            The mysterious prince of colors             
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            6500<br />
            <span>CREATIVIDAD</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫<br />
            <span>ENERGÍA</span>
          </div>
        </div>
      </div>
      <!-- Tom -->
      <div
        class="card"
        data-id="9"
        style="background-image: url('../images/Tom.png')"
      >
        <div class="header">
          <img src="developer_icon.png" alt="Producer" />
          <h2>Tom</h2>
        </div>
        <div class="abilities">
          <img src="../images/jira.png" alt="Backend" />
        </div>
        <div class="description">
          <p>
            Silent Shepherd, guiding Jira tasks       
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            8000<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Quirin -->
      <div
        class="card"
        data-id="10"
        style="background-image: url('../images/Quirin.png')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Management" />
          <h2>Quirin</h2>
        </div>
        <div class="abilities">
          <img src="concept_art_icon.png" alt="Concept Art" />
        </div>
        <div class="description">
          <p></p>
        </div>
        <div class="stats">
          <div class="attribute">
            9000<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Laura -->
      <div
        class="card"
        data-id="11"
        style="background-image: url('../images/Laura.png')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Designer" />
          <h2>Laura</h2>
        </div>
        <div class="abilities">
          <img
            src="concept_art_icon.png"
          />
        </div>
        <div class="description">
          <p>
            This effect is highly efficient against 
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            8800<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Ronny -->
      <div
        class="card"
        data-id="12"
        style="background-image: url('../images/Ronny.png')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Management" />
          <h2>Ronny</h2>
        </div>
        <div class="abilities">
          <img src="concept_art_icon.png" alt="Concept Art" />
        </div>
        <div class="description">
          <p>
            This extensive experience and the wisdom of the ages make him 
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            8800<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Jacky -->
      <div
        class="card"
        data-id="13"
        style="background-image: url('../images/Jacky.jpg')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Art" />
          <h2>Jacky</h2>
        </div>
        <div class="abilities">
          <img src="concept_art_icon.png" alt="Concept Art" />
        </div>
        <div class="description">
          <p>
            An empathetic and kind-hearted master archer, she skillfully leads            
          </p>
        </div>
        <div class="stats">
          <div class="attribute">
            8800<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
      <!-- Dominic -->
      <div
        class="card"
        data-id="14"
        style="background-image: url('../images/Dominic.png')"
      >
        <div class="header">
          <img src="artist_icon.png" alt="Programmer" />
          <h2>Dominic</h2>
        </div>
        <div class="abilities">
          <img src="../images/concept_art_icon.png" alt="Concept Art" />
        </div>
        <div class="description">
          <p>Sonic Cyber Mage.</p>
        </div>
        <div class="stats">
          <div class="attribute">
            7500<br />
            <span>STRENGHT</span>
          </div>
          <div class="attribute">
            ⚫⚫<br />
            <span>ENERGY</span>
          </div>
        </div>
      </div>
    </div>
    <script src="../js/clear-selection.js"></script>
  </body>
</html>
