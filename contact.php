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
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($email)) {
            $message = "Invalid email format.";
            $messageClass = 'alert-danger';
        } else {
            $mail = new PHPMailer(true);

            try {
                //Server settings
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->SMTPAuth = true;
                $mail->Username = 'shafeeqlm11@gmail.com'; // Your Gmail address
                $mail->Password = 'jviz ptdz gxvb bvcq'; // Your Gmail password or app-specific password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port = 587;

                // Enable verbose debug output

                // Recipients
                $mail->setFrom($email, $name);
                $mail->addAddress('shafeeqlm11@gmail.com'); // Add a recipient

                // Content
                $mail->isHTML(false);
                $mail->Subject = 'New Contact Form Submission';
                $mail->Body    = "Type of query: $queryType\n"
                                . "How can we help you: $help\n"
                                . "Name: $name\n"
                                . "Email: $email\n"
                                . "Phone: $phone\n"
                                . "Country: $country\n"
                                . "Website: $website\n"
                                . "Fax: $fax";

                $mail->send();
                $message = "Thank you for contacting us. We will get back to you shortly.";
                $messageClass = 'alert-success';
            } catch (Exception $e) {
                $message = "There was an error sending your message. Please try again later.<br>";
                $message .= "Mailer Error: " . $mail->ErrorInfo;
                $messageClass = 'alert-danger';
            }
        }
    }
}
?>

<div class="alert <?php echo $messageClass; ?>">
    <?php echo $message; ?>
</div>
