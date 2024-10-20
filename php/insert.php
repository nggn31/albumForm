<?php
include('connection.php');

$names = $_POST['names'];
$artist = $_POST['artist'];
$stock = $_POST['stock'];
$launchDate = $_POST['launchDate'];

$sql = "INSERT INTO album (names, artist, stock, launchDate) VALUES ('$names', '$artist', '$stock', '$launchDate')";

if(mysqli_query($connection, $sql)){
    echo "Album added successfully";
}else{
    echo "Error: " . mysqli_error($connection);
}

mysqli_close($connection);

?>