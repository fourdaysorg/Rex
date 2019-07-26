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
	$('table').DataTable({
		language: {
			processing: "Cargando...",
			lengthMenu: "Mostrar _MENU_ elementos",
			info: "Mostrando _START_ a _END_ de _TOTAL_ elementos",
			infoEmpty: "Mostrando 0 elementos",
			infoFiltered: "(filtrados de _MAX_ elementos totales)",
			infoPostFix: "",
			loadingRecords: "Cargando...",
			zeroRecords: "No hay registros que mostrar",
			emptyTable: "No hay registros disponibles",
			search: "Buscar:",
			paginate: {
				first: "Primero",
				previous: "Anterior",
				next: "Siguiente",
				last: "Último"
			}
		}
	});
})();
