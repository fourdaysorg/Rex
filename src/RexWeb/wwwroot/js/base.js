(function () {
	// Toasts
	$('.toast').toast('show');

	// Form validation
	$('form').on("submit", function (evt) {
		let valid = this.checkValidity();
		$(this).find(":submit").prop("disabled", valid);
		if (!valid) {
			evt.preventDefault();
			evt.stopPropagation();
		}
		this.classList.add('was-validated');
	});

	//Datatables
	$('table').DataTable();
})();
