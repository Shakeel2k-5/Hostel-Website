<?php
// Establish database connection
$conn = new mysqli("localhost", "root", "", "hostel");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the 'key' parameter is set in the URL
if (isset($_GET['key'])) {
    // Get the value of the 'key' parameter from the URL
    $username = $_GET['key'];

    // Prepare and execute SQL query
    $stmt = $conn->prepare("SELECT * FROM userinfo WHERE rollno = ?");
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
} else {
    // Output an empty array if the 'key' parameter is not set
    echo json_encode(array());
}
