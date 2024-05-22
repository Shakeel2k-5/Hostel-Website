<?php
$conn = mysqli_connect("localhost", "root", "", "hostel");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['name']) && isset($_GET['rollno']) && isset($_GET['dod']) && isset($_GET['dor']) && isset($_GET['purpose'])) {
    $name = $_GET['name'];
    //$username = $_GET['username'];
    $rollno = $_GET['rollno'];
    $dod = $_GET['dod'];
    $dor = $_GET['dor'];
    $purpose = $_GET['purpose'];

    $stmt = $conn->prepare("insert into currentrequest (rollno,raised,warden,accepted,cancelled,dod,dor,purpose,name) values(?,1,0,0,0,?,?,?,?)");
    $stmt1 = $conn->prepare("insert into requesthistory (rollno,raised,accepted,cancelled,purpose,dod,dor) values(?,1,0,0,?,?,?)");
    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }
    
    $stmt->bind_param("sssss", $rollno, $dod, $dor, $purpose, $name);
    $stmt1->bind_param("ssss",$rollno,$purpose,$dod,$dor);
    if ($stmt->execute()) {
        echo json_encode(['status' => 'true']);
    } else {
        /*$stmt2 = $conn->prepare("update currentrequest set rollno =?, raised = 1, warden=0, accepted=0, cancelled=0, dod =?,dor=?, purpose=?, name=? ");
        $stmt2->bind_param("sssss", $rollno, $dod, $dor, $purpose, $name);
        if ($stmt2->execute()) {
            echo json_encode(['status' => 'true']);
        }*/
        echo json_encode(['status' => 'false', 'error' => $stmt->error]);
    }

    $stmt1->execute();

    $stmt->close();
} else {
    echo json_encode(['status' => 'false', 'error' => 'Missing parameters']);
}

$conn->close();
?>