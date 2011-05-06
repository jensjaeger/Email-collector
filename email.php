<!DOCTYPE html>
<html>
<head>

<title>Email collector</title>

<link href="style.css" rel="stylesheet" type="text/css" /> <!-- AJAX Contact Form Stylesheet -->

<!--[if IE]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</head>
<body>

	<section id="email_collector">
		<?php
		        $email    = '';
		        $email    = $_POST['email'];
		
						// Configuration option.
						// Enter the email address that you want to emails to be sent to.
						// Example $address = "nospeedlimit@autobahn81.com";

					  $address = "your@adress.here";

  	        $subject = 'This is BIG email collector on your website';

 					  $body = 'Sombody submitted the adress: ' . $email . '.\r\n\n';

					  mail($address, $subject, $body, "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\n");

		?>
		<header>
			<h1>BIG email collector</h1>
		</header>
		<article>
			<p>Thanks for register:</p> 
			<p id="show_mail"><?php echo $email?></p>
			<p>You will hear from us soon.</p>
		</article>                
	</section>

</body>
</html>