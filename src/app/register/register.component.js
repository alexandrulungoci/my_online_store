$(function () {
	$.validator.setDefaults({
		highlight: function (element) {
			$(element)
				.closest('.form-group')
				.addClass('has-error')
		},
		unhighlight: function (element) {
			$(element)
				.closest('.form-group')
				.removeClass('has-error')
		}
	});

	$.validate({
		rules:
		{
			password: "required",
			email: "required",
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				password: true
			}
		},
		messages: {
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				password: true
			}
		},
		password: {
			required: " Please enter password"
		},
		email: {
			required: ' Please enter email',
			email: ' Please enter valid email'
		}

	});
});