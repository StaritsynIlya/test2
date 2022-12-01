<?php
$server = 'localhost'; // Имя или адрес сервера
$user = 'root'; // Имя пользователя БД
$password = 'root'; // Пароль пользователя
$db = 'comment'; // Название БД
$db = mysqli_connect($server, $user, $password, $db); // Подключение
// Проверка на подключение
if (!$db) {
    // Если проверку не прошло, то выводится надпись ошибки и заканчивается работа скрипта
    echo "Не удается подключиться к серверу базы данных!"; 
    exit;
} 

$request = json_decode(file_get_contents('php://input'));
$name = $request->name;
$desc = $request->desc;
$time = $request->time;

mysqli_query($db, "INSERT INTO `save` (`name`, `comnt`) VALUES ('" . $name . "','" . $desc . "', 1)");
?>