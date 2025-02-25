<?php
session_start();

// Usuario y contraseña encriptada
$usuario_valido = "admin";
$hash_guardado = '$2y$10$Q9bQp6zL6sN6hHgSyyjDP.Z9adp6DbmfM3HhzEdP.9yJxX0cfPvgW'; // Hash de "1234"

if ($_POST['usuario'] === $usuario_valido && password_verify($_POST['password'], $hash_guardado)) {
    $_SESSION['autenticado'] = true;
    header("Location: protegido.php");
    exit();
} else {
    echo "Usuario o contraseña incorrectos.";
}
?>
 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Protegida</title>
</head>
<body>
    <h1>Bienvenido a la página protegida</h1>
    <p>Solo los usuarios autenticados pueden ver esto.</p>
    <a href="logout.php">Cerrar sesión</a>
</body>
</html>
