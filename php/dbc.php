<?php
//require_once('../index.html');
header('Content-Type: text/html; charset=utf-8');
//mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$dbconnection = mysqli_connect('localhost','admin','ilyasriper80','playersdb');
$name = trim($_POST['username']);
$result = $_COOKIE["right"] - $_COOKIE["wrong"];

    if (!empty($name))
    {
        $query = "SELECT * FROM gamers WHERE name = '$name'";
        $data = mysqli_query($dbconnection, $query);

        if (mysqli_num_rows($data) == 0)
        {
            $query = "INSERT INTO gamers (name,result) VALUES ('$name','$result')";
            mysqli_query($dbconnection, $query);

            mysqli_close($dbconnection);
            exit();
        }
        else
        {
            echo "Такое имя уже занято";
        }

}
