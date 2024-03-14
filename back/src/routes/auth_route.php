<?php

use App\Controller\Auth_Controller;
require_once '/var/www/html/pomme-d-api/back/src/controller/Auth_Controller.php';

$router->map('GET', '/login', function () {
    echo json_encode('login');
    echo 'hello';
}, 'login');

$router->map('POST', '/login', function () {
    
}, 'login_post');

$router->map('GET', '/logout', function () {
    unset($_SESSION['user']);
    session_destroy();
    header('Location: /my-little-mvc/');
    exit;
}, 'logout');

$router->map('GET', '/register', function () {
    $new_user = new Auth_Controller($_POST);
    var_dump($new_user);
    // $new_user->register();
}, 'register');

$router->map('POST', '/register', function () {
    $new_user = new Auth_Controller($_POST);
    return $new_user->register();
}, 'register_post');

