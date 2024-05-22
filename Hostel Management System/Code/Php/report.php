<?php
$conn = mysqli_connect("localhost", "root", "", "hostel");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['name']) && isset($_GET['rollno']) && isset($_GET['blockno']) && isset($_GET['roomno']) && isset($_GET['report'])) {
    $name = $_GET['name'];
    $rollno = $_GET['rollno'];
    $blockno = $_GET['blockno'];
    $roomno = $_GET['roomno'];
    $report = $_GET['report'];

    $stmt = $conn->prepare("insert into report (rollno,roomno,blockno,report) values(?,?,?,?)");
    
    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }
    
    $stmt->bind_param("ssss", $rollno, $roomno, $blockno, $report);
    
    if ($stmt->execute()) {
        echo json_encode(['status' => 'true']);
    } else {
        echo json_encode(['status' => 'false', 'error' => $stmt->error]);
    }


    $stmt->close();
} else {
    echo json_encode(['status' => 'false', 'error' => 'Missing parameters']);
}

$conn->close();
?>