<?php 
    $conn = mysqli_connect("localhost", "root", "", "hostel");

    $stmt = $conn->prepare("delete from currentrequest ");
    $stmt1 = $conn->prepare("UPDATE requesthistory SET accepted = 1 ");
    if ($stmt === false) {
        echo json_encode(['status' => 'false', 'error' => $conn->error]);
        exit;
    }

    // Execute the statement and check for success
    if ($stmt->execute() && $stmt1->execute()) {
        // Query executed successfully
        echo json_encode(['status' => 'true']);
    } else {
        // Query execution failed
        echo json_encode(['status' => 'false', 'error' => $stmt->error]);
    }
?>