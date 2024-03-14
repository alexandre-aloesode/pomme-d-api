<?php

require_once 'vendor/autoload.php';

if (session_id() === '' || !isset($_SESSION)) session_start();
header("Access-Control-Allow-Origin: *");

$router = new AltoRouter();
$router->setBasePath('/pomme-d-api/back');

require_once __DIR__ . '/src/routes/auth_route.php';
// require_once __DIR__ . '/src/routes/home_route.php';
// require_once __DIR__ . '/src/routes/product_route.php';
// require_once __DIR__ . '/src/routes/cart_route.php';
// require_once __DIR__ . '/src/routes/admin_route.php';
$match = $router->match();
if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}
