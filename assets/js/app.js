$(() => {

	// Este script se encarga de inyectar las imagenes correspondiente del proyecto que el usuario quiere ver en el modal.

	let imagenes = [
		{
			src: ['SE_Login.png', 'SE_Inicio.png', 'SE_Profesor_Contenido.png', 'SE_Profesor_Crear_Evaluacion.png', 'SE_Profesor_Evaluaciones.png', 'SE_Estudiante_Evaluacion.png', 'SE_Estudiante_Evaluacion_Resultado.png', 'SE_Profesor_Asignaciones.png', 'SE_Chat.png', 'SE_Perfil.png']
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
		let i = 0;

		$('#imagenes').html('');
		$('#indicators').html('')

		for (let img of imagenes[pos].src) {
			
			if (i == 0) {
				$('#indicators').append(`
					<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="active"></li>
				`)

				$('#imagenes').append(`
					<div class="carousel-item active">
						<img src="./assets/images/${img}" class="d-block w-100" alt="...">
					</div>
				`);
			}
			else {
				$('#indicators').append(`
					<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>
				`)

				$('#imagenes').append(`
					<div class="carousel-item">
						<img src="./assets/images/${img}" class="d-block w-100" alt="...">
					</div>
				`);
			}
			
			i++
		}


	});

});