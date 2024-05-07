<?php
$conn = mysqli_connect("localhost", "root", "", "hostel");

if ($conn->connect_error) {
    die("Connction Failed" . $conn->connect_error);
}


if (isset($_GET['key'])) {
    $rollno = $_GET['key'];
    $stmt = $conn->prepare("SELECT * FROM requesthistory where rollno = ?");
    $stmt->bind_param("s", $rollno);
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    $data = array();
    while($row = $stmt_result->fetch_assoc()){
        $data[] = $row;
    }

    echo json_encode($data);
}