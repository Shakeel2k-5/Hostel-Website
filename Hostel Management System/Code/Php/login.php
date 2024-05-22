<?php

$con = new mysqli('localhost', 'root', '', 'hostel');
if ($con->connect_error) {
    die('Failed to connect' . $con->connect_error);
}

if (isset($_GET['username']) && isset($_GET['password'])) {
    $username = $_GET['username'];
    $password = $_GET['password'];
    $stmt = $con->prepare("select * from logininfo where username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    if ($stmt_result->num_rows) {
        $data = $stmt_result->fetch_assoc();

        if ($data['password'] === $password) {
            echo json_encode(['status' => 'true']);
        } else {
            echo json_encode(['status' => 'false']);
        }
    } else {
        echo "Invalid login credentials";
        return false;
    }
}

?>