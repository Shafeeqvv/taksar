<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

$message = '';
$messageClass = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $queryType = $_POST['queryType'] ?? '';
    $help = $_POST['help'] ?? '';
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $country = $_POST['country'] ?? '';
    $website = $_POST['website'] ?? '';
    $fax = $_POST['fax'] ?? '';

    if (empty($name) || empty($phone) || empty($queryType)) {
        $message = "Name, phone, and query type are required fields.";
        $messageClass = 'alert-danger';
    } else {
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $message = "Invalid email format.";
            $messageClass = 'alert-danger';
        } else {
            try {
                $mail = new PHPMailer(true);
                
                $mail->isSMTP(); // Set mailer to use SMTP
                $mail->CharSet = "utf-8"; // Set charset to utf8
                $mail->SMTPAuth = true; // Enable SMTP authentication
                $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted

                $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
                $mail->Port = 587; // TCP port to connect to
                $mail->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );

                $mail->Username = 'shafeeqlm11@gmail.com'; // SMTP username
                $mail->Password = 'umta mvsg eahs djmh'; // SMTP password

                $mail->setFrom($email,$name); // Your application NAME and EMAIL
                $mail->addAddress('shafeeqlm11@gmail.com'); // Target email
                $mail->Subject = 'New Query from ' . $name; // Message subject
                $mail->isHTML(true); // Set email format to HTML

                // Compose email body
                $emailBody = "<p><strong>Name:</strong> {$name}</p>
                              <p><strong>Email:</strong> {$email}</p>
                              <p><strong>Phone:</strong> {$phone}</p>
                              <p><strong>Country:</strong> {$country}</p>
                              <p><strong>Website:</strong> {$website}</p>
                              <p><strong>Fax:</strong> {$fax}</p>
                              <p><strong>Query Type:</strong> {$queryType}</p>
                              <p><strong>Help:</strong> {$help}</p>";

                $mail->Body = $emailBody;

                if ($mail->send()) {
                    $message = "Your query has been sent successfully.";
                    $messageClass = 'alert-success';
                } else {
                    $message = "There was an error sending your query.";
                    $messageClass = 'alert-danger';
                }
            } catch (Exception $e) {
                $message = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                $messageClass = 'alert-danger';
            }
        }
    }
}
?>

<div class="alert <?php echo htmlspecialchars($messageClass); ?>">
    <?php echo htmlspecialchars($message); ?>
</div>

