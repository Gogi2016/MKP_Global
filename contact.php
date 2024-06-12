<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Create the email content
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Message:\n$message";

    // Recipient Email Address
    $to = "vuyokazigogi@gmail.com"; // Change this to your email address

    // Email Headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    // If not submitted, redirect back to the form
    header("Location: index.html"); // Change this to your form page
}
?>
