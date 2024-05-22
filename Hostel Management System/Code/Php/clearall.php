<?php
$conn = mysqli_connect("localhost", "root", "", "hostel");

$stmt = $conn->prepare("delete from report");

if ($stmt->execute()) {
    // Query executed successfully
    echo json_encode(['status' => 'true']);
} else {
    // Query execution failed
    echo json_encode(['status' => 'false', 'error' => $stmt->error]);
}
?>