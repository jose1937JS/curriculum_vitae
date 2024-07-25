$(() => {
	// Este script se encarga de inyectar las imágenes correspondiente del proyecto que el usuario quiere ver en el modal.

	let imagenes = [
		{
			src: [
				'm2m/Screenshot_1677978167.png',
				'm2m/m2mapp_2.png',
				'm2m/Screenshot_1677978173.png',
				'm2m/Screenshot_1677978404.png',
				'm2m/m2mapp_3.png',
				'm2m/m2mapp_8.png',
				'm2m/m2mapp_9.png',
				'm2m/Screenshot_1677978449.png',
				'm2m/Screenshot_1677978495.png',
				'm2m/m2mapp_10.png',
				'm2m/m2mapp_4.png',
				'm2m/m2mapp_5.png',
				'm2m/m2mapp_6.png',
				'm2m/m2mapp_7.png',
				'm2m/Screenshot_1677978429.png'
			]
		},
		{
			src: [
				'halaken/Screenshot_1677955415.png',
				'halaken/Screenshot_1677955411.png',
				'halaken/Screenshot_1677953899.png',
				'halaken/Screenshot_1677953903.png',
				'halaken/Screenshot_1677953936.png',
				'halaken/Screenshot_1677953942.png',
				'halaken/Screenshot_1677955298.png',
				'halaken/Screenshot_1677955305.png',
				'halaken/Screenshot_1677955318.png',
				'halaken/Screenshot_1677955344.png',
				'halaken/Screenshot_1677955388.png'
			]
		},
		{ src: [
			'miekipo/Screenshot_1677974901.png',
			'miekipo/Screenshot_1677974972.png'
			]
		},
		{
			src: ['promartv/promartv.png']},
		{
			src: [
				'tierraXtierra/Screenshot_1677958523.png',
				'tierraXtierra/Screenshot_1677958526.png',
				'tierraXtierra/Screenshot_1677958598.png',
				'tierraXtierra/Screenshot_1677958609.png',
				'tierraXtierra/Screenshot_1677958613.png',
				'tierraXtierra/Screenshot_1677958668.png'
			]
		},
		{
			src: [
				'SistemaEducativo/SE_Login.png',
				'SistemaEducativo/SE_Inicio.png',
				'SistemaEducativo/SE_Profesor_Contenido.png',
				'SistemaEducativo/SE_Profesor_Crear_Evaluacion.png',
				'SistemaEducativo/SE_Estudiante_Evaluacion.png',
				'SistemaEducativo/SE_Estudiante_Evaluacion_Resultado.png',
				'SistemaEducativo/SE_Profesor_Asignaciones.png',
				'SistemaEducativo/SE_Chat.png',
				'SistemaEducativo/SE_Perfil.png'
			]
		},
		{
			src: [
				'AulaVirtual/Aula_Virtual_Login.png',
				'AulaVirtual/Aula_Virtual_Notas.png'
			]
		},
		{
			src: [
				'Fundapi/Fundapi_doctors.png',
				'Fundapi/Fundapi_services.png',
				'Fundapi/Fundapi_specialties.png',
				'Fundapi/Fundapi_json.png'
			]
		},
		{
			src: [
				'RosasDeAmerica/Rosas_De_America_Inicio.jpg',
				'RosasDeAmerica/Rosas_De_America_Productos.png',
				'RosasDeAmerica/Rosas_De_America_Carrito_de_Compra.png'
			]
		},
		{
			src: [
				'Clap/CLAP_Login.png',
				'Clap/CLAP_Inicio.png',
				'Clap/CLAP_transferencias.png'
			]
		},
		{
			src: [
				'metrovacesa/app/1.png',
				'metrovacesa/app/2.png',
				'metrovacesa/app/3.png',
				'metrovacesa/app/4.png',
				'metrovacesa/app/5.png',
				'metrovacesa/app/6.png',
				'metrovacesa/app/7.png',
				'metrovacesa/app/8.png',
				'metrovacesa/app/9.png',
				'metrovacesa/app/10.png',
				'metrovacesa/app/11.png',
				'metrovacesa/app/12.png',
				'metrovacesa/app/13.png',
				'metrovacesa/web/1.png',
				'metrovacesa/web/2.png',
				'metrovacesa/web/3.png',
				'metrovacesa/web/4.png',
				'metrovacesa/web/5.png',
				'metrovacesa/web/6.png',
				'metrovacesa/web/7.png',
				'metrovacesa/web/8.png',
				'metrovacesa/web/9.png'
			]
		},
		{
			src: [
				'reservatum/1.png',
				'reservatum/2.png',
				'reservatum/3.png',
				'reservatum/4.png',
				'reservatum/5.png',
				'reservatum/6.png',
				'reservatum/7.png',
				'reservatum/8.png',
				'reservatum/9.png',
				'reservatum/10.png',
				'reservatum/11.png',
				'reservatum/12.png',
				'reservatum/13.png',
				'reservatum/14.png',
			]
		},
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