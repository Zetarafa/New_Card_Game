<?php
session_start();
session_destroy(); // Elimina la sesión actual
header("Location: index.html"); // Redirige al login
exit();
?>
