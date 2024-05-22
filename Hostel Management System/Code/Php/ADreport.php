<?php
$conn = mysqli_connect("localhost", "root", "", "hostel");

if ($conn->connect_error) {
    die("Connction Failed" . $conn->connect_error);
}

    $stmt = $conn->prepare("SELECT * FROM report");
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    $data = array();
    while($row = $stmt_result->fetch_assoc()){
        $data[] = $row;
    }

    echo json_encode($data);
?>