<?php
// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "hostel");

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if 'requestrollno' parameter is set in the URL
if (isset($_GET['requestrollno']) && $_GET['requestdod']) {
    $rollno = $_GET['requestrollno'];
    $dod = $_GET['requestdod'];

    // Prepare the SQL statement with a placeholder for the roll number
    $stmt = $conn->prepare("delete from currentrequest WHERE rollno = ?");
    $stmt1 = $conn->prepare("UPDATE requesthistory SET accepted = 1 WHERE rollno = ? and dod = ?");
    if ($stmt === false) {
        echo json_encode(['status' => 'false', 'error' => $conn->error]);
        exit;
    }

    // Bind the roll number parameter to the prepared statement
    $stmt->bind_param("s", $rollno);
    $stmt1->bind_param("ss", $rollno,$dod);

    // Execute the statement and check for success
    if ($stmt->execute() && $stmt1->execute()) {
        // Query executed successfully
        echo json_encode(['status' => 'true']);
    } else {
        // Query execution failed
        echo json_encode(['status' => 'false', 'error' => $stmt->error]);
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(['status' => 'false', 'error' => 'Missing roll number']);
}

// Close the database connection
mysqli_close($conn);
?>