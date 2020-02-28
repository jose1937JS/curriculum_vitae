$(() => {

	// Este script se encarga de inyectar las imagenes correspondiente del proyecto que el usuario quiere ver en el modal.

	let imagenes = [
		{
			src: ['Software_Educativo-Login.png', 'Software_Educativo_Inicio_profesor.png', 'Software_Educativo_Contenido_Profesor.png', 'Software_Educativo_Profesor_Crear_Evaluaciones.png', 'Software_Educativo_Profesor_Evaluaciones.png', 'Software_Educativo_Docente_Asignaciones.png', 'Software_Educativo_Docente_Chat.png']
		},
		{
			src: ['Aula_Virtual_Login.png', 'Aula_Virtual_Inicio.png', 'Aula_Virtual_Notas.png']
		},
		{
			src: ['Fundapi_doctors.png', 'Fundapi_services.png', 'Fundapi_specialties.png', 'Fundapi_json.png']
		},
		{
			src: ['Rosas_De_America_Inicio.jpg', 'Rosas_De_America_Productos.png', 'Rosas_De_America_Carrito_de_Compra.png']
		},
		{
			src: ['SoftwareEducativo_2_Inicio.png']
		},
		{
			src: ['CLAP_Login.png', 'CLAP_Inicio.png', 'CLAP_transferencias.png']
		}
	];

	$('.btn-dark').click(function(){
		let pos = $(this).data('pos');

		$('#imagenes').html('');

		for (let img of imagenes[pos].src) {
			$('#imagenes').append(`
				<div class="d-flex justify-content-center mb-5 shadow-sm view overlay zoom">
					<img src="assets/images/${img}" class="img-fluid img-thumbnail" alt="login">
				</div>
			`);
		}

	});

});