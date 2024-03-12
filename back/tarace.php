<?php

header("Access-Control-Allow-Origin: *");

echo json_encode(["name" => "tarace", "age" => 25, "gender" => "male"]);