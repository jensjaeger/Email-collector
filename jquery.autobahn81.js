jQuery(document).ready(function(){
	
	$('#email_wrong').hide();
	$('#email_right').hide();
	
	// Validate as you type

	$('#email').focusout(function() {
		if (!isEmail($(this).val())) {
			$('#email_wrong').show();
			$('#email_right').hide();
			$(this).addClass('error');
		}
			
		else {
			$('#email_wrong').hide();
		    $('#email_right').show();
			$(this).removeClass('error');
		}
	});
	
	$('#contactform').submit(function(){
		$('#email').triggerHandler("focusout");
		if (isEmail($('#email').val())){
		  return true;	
		}
		else {						
		  return false;
		}
	});

	function isEmail(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
	}

});