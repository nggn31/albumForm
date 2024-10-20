<?php
$server = 'localhost';
$user = 'root';
$password = '';
$db = 'form2';

$connection = mysqli_connect($server, $user, $password, $db);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
