<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $items = $_POST['items'];

    // Simple processing, in real app save to DB or send email
    echo "<h1>Gracias por tu donación</h1>";
    echo "<p>Recibimos tu solicitud. Te contactaremos pronto.</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Teléfono: $phone</p>";
    echo "<p>Dirección: $address, $city</p>";
    echo "<p>Items: $items</p>";
} else {
    echo "Método no permitido.";
}
?>