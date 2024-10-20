<?php
include('connection.php'); // Conectar a la base de datos

// Consulta para obtener todos los álbumes
$sql = "SELECT * FROM album";
$result = mysqli_query($connection, $sql); // Ejecutar la consulta

// Verificar si se encontraron álbumes
if (mysqli_num_rows($result) > 0) {
    echo "<h2>Lista de Álbumes</h2>";
    echo "<ul>"; // Iniciar una lista desordenada

    // Recorrer cada álbum y mostrarlo
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<li>";
        echo "ID: " . $row['id'] . " - ";
        echo "Nombre: " . $row['names'] . " - ";
        echo "Artista: " . $row['artist'] . " - ";
        echo "Stock: " . $row['stock'] . " - ";
        echo "Fecha de Lanzamiento: " . $row['launchDate'];
        echo "</li>";
    }

    echo "</ul>"; // Cerrar la lista
} else {
    echo "No se encontraron álbumes."; // Mensaje si no hay álbumes
}

//http://localhost/form2/php/get.php

mysqli_close($connection); // Cerrar la conexión
?>
