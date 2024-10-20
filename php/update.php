<?php
include('connection.php');

//Esto se usa para recibir los datos del formulario
$id = $_POST['id']; //Ponemos el id por que nos va a ayudar a actualizar
$names = $_POST['names'];
$artist = $_POST['artist'];
$stock = $_POST['stock'];
$launchDate = $_POST['launchDate'];

//Verifica que todos los campos esten presentes
if(isset($id, $names, $artist, $stock, $launchDate)){
    
    //Con esto actulizamos el registro
    $sql = "UPDATE album SET names = '$names', artist = '$artist', stock = '$stock', launchDate = '$launchDate' WHERE id = '$id'";

    //Esto ejecuta la consulta y verifica si fue exitosa
    if(mysqli_query($connection, $sql)){
        echo "Album update successfully";
    }else{
        echo "Error updatin album: " .mysqli_error($connection);
    }
}
else{
    echo "All fields are required";
}

mysqli_close($connection);
?>