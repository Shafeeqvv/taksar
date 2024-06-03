<?php
// Include PHPMailer library
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Include autoloader

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data
    $queryType = $_POST['queryType'];
    $help = $_POST['help'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $country = isset($_POST['country']) ? $_POST['country'] : ''; // Check if country is set
    $website = isset($_POST['website']) ? $_POST['website'] : ''; // Check if website is set
    $fax = isset($_POST['fax']) ? $_POST['fax'] : ''; // Check if fax is set

    // Create a PHPMailer instance
    $mail = new PHPMailer();

    // SMTP configuration
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->Username = 'shafeeqlm11@gmail.com'; // Your email address
    $mail->Password = 'joao fjqi ouwy ajao'; // Your email password

    // Email content
    $mail->setFrom($email, $name);
    $mail->addAddress('shafeeqlm11@gmail.com'); // Change this to the recipient's email address
    $mail->Subject = 'New Contact Form Submission';
    $mail->isHTML(true);
    $mail->Body = "
    <html>
    <head>
    <title>New Contact Form Submission</title>
    </head>
    <body>
    <p>Type of Query: $queryType</p>
    <p>How can we help you? $help</p>
    <p>Name: $name</p>
    <p>Email: $email</p>
    <p>Phone: $phone</p>
    <p>Country: $country</p>
    <p>Website: $website</p>
    <p>Fax: $fax</p>
    </body>
    </html>
    ";

    // Attempt to send email
    if ($mail->send()) {
        // Email sent successfully
        $message = 'Thank you! Your message has been sent.';
    } else {
        // Email sending failed
        $message = 'An error occurred. Please try again later.';
    }
    echo $message; // Display the message

} else {
    // If this page is accessed directly, return an error
    echo 'Direct access not allowed.';
}
?>
