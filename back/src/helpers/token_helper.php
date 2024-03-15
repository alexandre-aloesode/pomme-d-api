<?php
namespace App\Helper;
require_once '/var/www/html/pomme-d-api/back/constants.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Token_Helper
{
    public static function generateToken($payload)
    {
        $jwt = JWT::encode($payload, JWT_KEY, 'HS256');
        return $jwt;
    }

    public static function decodeToken($jwt)
    {
        $decoded = JWT::decode($jwt, new Key(JWT_KEY, 'HS256'));
        return $decoded;
    }

    }