<?php
$conn = mysqli_connect("localhost", "root", "", "hostel");

if ($conn->connect_error) {
    die("Connection Failed" . $conn->connect_error);
}

//echo "Connection established";

if (isset($_GET['key'])) {
    // Get the value of the 'key' parameter from the URL
    $username = $_GET['key'];
    //$username = '22cse47';

    // Prepare and execute SQL query
    $stmt = $conn->prepare("SELECT * FROM requesthistory WHERE rollno = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    // Fetch data and encode as JSON
    $data = array();
    while ($row = $stmt_result->fetch_assoc()) {
        $data[] = $row;
    }

    // Output JSON response
    echo json_encode($data);
}
