<?php
// SHOW ERRORS (for debugging only)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// INCLUDE PHPMailer FILES
require __DIR__ . '/src/mailer/PHPMailer.php';
require __DIR__ . '/src/mailer/SMTP.php';
require __DIR__ . '/src/mailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // GET FORM DATA (safe way)
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $speciality = $_POST['speciality'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // 🔍 DEBUG (TURN OFF LATER)
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = 'html';

        // SMTP CONFIG
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'shraddhaaakolkar@gmail.com';
        $mail->Password = 'PASTE_YOUR_NEW_APP_PASSWORD_HERE';

        // FOR LOCALHOST (IMPORTANT)
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ];

        // EMAIL SETTINGS
        $mail->setFrom('shraddhaaakolkar@gmail.com', 'Website Leads');
        $mail->addAddress('shraddhaakolkar2003@gmail.com');

        // EMAIL CONTENT
        $mail->isHTML(true);
        $mail->Subject = 'New Appointment Lead';

        $mail->Body = "
            <h2>New Lead Received</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Speciality:</strong> $speciality</p>
        ";

        // SEND MAIL
        if ($mail->send()) {
            echo "success";
        } else {
            echo "error";
        }

    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}
?>