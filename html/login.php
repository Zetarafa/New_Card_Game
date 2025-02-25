<?php
session_start();

// Definir usuario y contraseña correctos (puedes cambiarlos o usar una base de datos)
$usuario_valido = "admin";
$password_valida = password_hash("1234", PASSWORD_DEFAULT);
  // Cámbiala por una más segura

// Comprobar si los datos del formulario son correctos
if ($_POST['usuario'] === $usuario_valido && $_POST['password'] === $password_valida) {
    $_SESSION['autenticado'] = true;
    header("Location: protegido.php"); // Redirige a la página protegida
    exit();
} else {
    echo "Usuario o contraseña incorrectos.";
}
?>
