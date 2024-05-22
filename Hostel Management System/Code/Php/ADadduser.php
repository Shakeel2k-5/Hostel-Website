<?php
$conn = mysqli_connect("localhost", "root", "", "hostel");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['name']) && isset($_GET['rollno']) && isset($_GET['branch']) && isset($_GET['year']) && isset($_GET['hostelblock']) && isset($_GET['district']) && isset($_GET['roomno']) && isset($_GET['phonenumber']) && isset($_GET['email'])) {
    $name = $_GET['name'];
    $rollno = $_GET['rollno'];
    $branch = $_GET['branch'];
    $year = $_GET['year'];
    $hostelblock = $_GET['hostelblock'];
    $roomno = $_GET['roomno'];
    $district = $_GET['district'];
    $phonenumber = $_GET['phonenumber'];
    $email = $_GET['email'];

    $stmt = $conn->prepare("insert into userinfo (rollno,name,branch,year,hostelblock,roomno,district,phonenumber,email) values(?,?,?,?,?,?,?,?,?)");
    $stmt1 = $conn->prepare("insert into logininfo (username) values(?)");
    /*if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }*/

    $stmt->bind_param("sssssssss", $rollno, $name, $branch, $year, $hostelblock, $roomno, $district, $phonenumber, $email);
    $stmt1->bind_param("s", $rollno);
    if ($stmt->execute() && $stmt1->execute()) {
        echo json_encode(['status' => 'true']);
    } else {
        echo json_encode(['status' => 'false', 'error' => $stmt->error]);
    }

    $stmt1->execute();

    $stmt->close();
} else {
    echo json_encode(['status' => 'false', 'error' => 'Missing parameters']);
}

$conn->close();
?>