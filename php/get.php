<?php
include('connection.php'); 

// Consulta para obtener todos los álbumes
$sql = "SELECT * FROM album";
$result = mysqli_query($connection, $sql); // Ejecutar la consulta

// Inicializa un array para almacenar los álbumes
$albums = [];

// Verificar si se encontraron álbumes
if (mysqli_num_rows($result) > 0) {
    // Recorrer cada álbum y agregarlo al array
    while ($row = mysqli_fetch_assoc($result)) {
        $albums[] = $row; // Agregar el álbum al array
    }
    // Devolver el array como JSON
    echo json_encode($albums);
} else {
    // Devolver un array vacío si no hay álbumes
    echo json_encode([]);
}

// Cerrar la conexión
mysqli_close($connection); 
?>
