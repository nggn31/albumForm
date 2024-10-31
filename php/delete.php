<?php
include('connection.php');

//Esto se usa para recibir los datos del formulario
$id = $_POST['id']; //Ponemos el id por que nos va a ayudar a eliminar

//Verifica que todos los campos esten presentes
if(isset($id)){
    
    //Con esto eliminamos el registro
    $sql = "DELETE FROM album WHERE id = '$id'";

    //Esto ejecuta la consulta y verifica si fue exitosa
    if(mysqli_query($connection, $sql)){
        echo "Album deleted successfully";
    }else{
        echo "Error deleting album: " .mysqli_error($connection);
    }
}
else{
    echo "All fields are required";
}

mysqli_close($connection);
?>