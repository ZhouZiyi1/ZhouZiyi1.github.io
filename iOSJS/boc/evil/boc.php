<?php
error_reporting(0);

function redirect_to($location = NULL) {
  if ($location != NULL) {
    http_response_code(302);
    header("Location: {$location}");
    exit();
  }
}

function writeData($data){
    // Create a prepared statement
    $host = 'localhost';
    $username = 'test_ssm';
    $password = 'password';
    $db = 'test_ssm';
    $mysqli = new mysqli($host,$username,$password,$db);
    // Check connection
    if ($mysqli -> connect_errno) {
        //echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        fast_fail();
    }
    $stmt = $mysqli -> stmt_init();

    if ($stmt -> prepare("INSERT INTO ssm (tgc) VALUES (?)")) {
        // Bind parameters
        $stmt -> bind_param("s", $data);
        // Execute query
        if(!$stmt -> execute()){
            //echo "Execute failed: (" . $stmt -> errno . ") " . $stmt -> error;
            $stmt -> close();
            $mysqli -> close();
            fast_fail();
        }
        $stmt -> close();
    }else{
        //echo "Prepare failed: (" . $mysqli -> errno . ") " . $mysqli -> error;
        $stmt -> close();
        $mysqli -> close();
        fast_fail();
    }
    $mysqli -> close();
}

$data = $_POST['data'];
if ($data == NULL) {
  redirect_to('https://www.boc.cn/');
}

writeData($data);

