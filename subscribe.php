<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php'; // Adjust the path if necessary

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['email'])) {
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

        // Send confirmation email
        try {
            $mail = new PHPMailer(true);

            $mail->isSMTP(); // Set mailer to use SMTP
            $mail->CharSet = "utf-8"; // Set charset to utf8
            $mail->SMTPAuth = true; // Enable SMTP authentication
            $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted

            $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
            $mail->Port = 587; // TCP port to connect to

            $mail->Username = 'shafeeqlm11@gmail.com'; // SMTP username
            $mail->Password = 'joao fjqi ouwy ajao'; // SMTP password

            $mail->setFrom($email); // Your application NAME and EMAIL
            $mail->addAddress('shafeeqlm11@gmail.com'); // Target email
            $mail->Subject = 'Subscription Confirmation'; // Message subject
            $mail->isHTML(true); // Set email format to HTML
            $mail->Body = 'Thank you for subscribing!';

            $mail->send();
            echo "Thank you for subscribing!";
        } catch (Exception $e) {
            echo "Subscription successful, but the email could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "No email provided.";
    }
} else {
    echo "Invalid request method.";
}
?>


