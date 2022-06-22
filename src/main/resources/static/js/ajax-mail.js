$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.form-message');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		const formData = $(form).serializeArray();

		const askSelect = document.querySelector("#ask-select")
		const consultingSelect = document.querySelector("#consulting-select")

		const askSelectValue = askSelect.options[askSelect.selectedIndex].text

		if (askSelectValue === '상담종목') {
			alert('상담종목을 선택해주세요.')
			return
		}

		let consultingSelectValue = null

		if (consultingSelect !== null) {
			consultingSelectValue = consultingSelect.options[consultingSelect.selectedIndex].text
			if (askSelectValue === '의대 컨설팅' && consultingSelectValue === '세부상담') {
				alert('세부 상담 종목을 선택해주세요.')
				return
			}
		}

		const parse = {
			firstOption: askSelectValue,
			secondOption: consultingSelectValue,
			name: formData[0].value,
			cellPhone: formData[1].value,
			email: formData[2].value,
			askTitle: formData[3].value,
			askContent: formData[4].value
		}
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: JSON.stringify(parse),
			dataType: 'json',
			contentType: 'application/json'
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});

});
