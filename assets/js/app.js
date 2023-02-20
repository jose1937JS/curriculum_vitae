$(() => {
	// Este script se encarga de inyectar las imagenes correspondiente del proyecto que el usuario quiere ver en el modal.

	let imagenes = [
		{ src: ['m2mapp_2.png', 'm2mapp_3.png', 'm2mapp_8.png', 'm2mapp_9.png', 'm2mapp_10.png', 'm2mapp_4.png', 'm2mapp_5.png', 'm2mapp_6.png', 'm2mapp_7.png']},
		{ src: ['promartv.png']},
		{ src: ['SE_Login.png', 'SE_Inicio.png', 'SE_Profesor_Contenido.png', 'SE_Profesor_Crear_Evaluacion.png', 'SE_Estudiante_Evaluacion.png', 'SE_Estudiante_Evaluacion_Resultado.png', 'SE_Profesor_Asignaciones.png', 'SE_Chat.png', 'SE_Perfil.png']},
		{ src: ['Aula_Virtual_Login.png', 'Aula_Virtual_Notas.png']},
		{ src: ['Fundapi_doctors.png', 'Fundapi_services.png', 'Fundapi_specialties.png', 'Fundapi_json.png']},
		{ src: ['Rosas_De_America_Inicio.jpg', 'Rosas_De_America_Productos.png', 'Rosas_De_America_Carrito_de_Compra.png']},
		{ src: ['CLAP_Login.png', 'CLAP_Inicio.png', 'CLAP_transferencias.png']}
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
						<div class="w-100 d-flex justify-content-center">
						
							<img src="./assets/images/${img}" 
								style="border: 2px solid black; border-radius: 5px;" 
								class="img-fluid text-center" 
								alt="No se encontró la imagen"
							>
						</div>
					</div>
				`);
			}
			else {
				$('#indicators').append(`
					<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>
				`)

				$('#imagenes').append(`
					<div class="carousel-item">
						<div class="w-100 d-flex justify-content-center">
						
							<img src="./assets/images/${img}" 
								style="border: 2px solid black; border-radius: 5px;" 
								class="img-fluid text-center" 
								alt="No se encontró la imagen"
							>
						</div>
					</div>
				`);
			}
			
			i++
		}
	});
});