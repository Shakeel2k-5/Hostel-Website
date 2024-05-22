<?php 
    $conn = mysqli_connect("localhost","root","","hostel");

    $stmt = $conn->prepare("select * from currentrequest");
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    $data = array();
    while($row = $stmt_result->fetch_assoc()){
        $data[] = $row;
    }

    echo json_encode($data);
?>