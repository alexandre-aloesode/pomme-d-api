<?php
namespace App\Controller;
use App\Model\User_Model;
require_once '/var/www/html/pomme-d-api/back/src/model/User_Model.php';

class Auth_Controller
{
    private int $id;
    private string $email;
    private string $password;

    public function __construct($array)
    {
        isset($array['id']) ? $this->id = $array['id'] : null;
        $this->email = $array['email'];
        $this->password = $array['password'];
    }

    public function login()
    {
        echo json_encode('login');
    }

    public function login_post()
    {
        var_dump($_POST);
    }

    public function logout()
    {
        unset($_SESSION['user']);
        session_destroy();
        // header('Location: /my-little-mvc/');
        exit;
    }

    public function register()
    {
        $register = new User_Model();
        $mail_already_exist = $register->readOnebyString('email', $this->email);
        if ($mail_already_exist) {
            echo json_encode(['success' =>false, 'message' => 'Cet email existe déjà']);
        } else {
            $register->createOne([
                ':email' => $this->email,
                ':password' => password_hash($this->password, PASSWORD_DEFAULT),
                ':role' => 'user'
            ]);
            echo json_encode(['success' =>true, 'message' => 'Utilisateur créé avec succès']);
        }

    }

    public function register_post()
    {
    }
}