import {menuBurger,menuBurger2} from "./menu-burger.js";
import {watch,alarma} from "./reloj.js";
import {move} from "./evento-teclado.js";
import {countdown} from "./contdown.js";
import {scrollToUp} from "./scrollbutton.js";
import {temaOscuro} from "./tema-oscuro.js";
import responsiveMedia from "./responsive.js";
//import {conexion} from "./conexion.js"
import {webCam} from "./deteccion-cam.js";
import {localizacion} from "./localizacion.js";
import {buscar} from "./buscador.js";
 import {sorteoDigital} from "./sorteo.js";
 import {carruselSlide} from "./carrusel.js";
 import {scrollSpy} from "./scrollSpy.js";
import { smartVideo } from "./video-inteligente.js";
import { validFormulario } from "./validacion.js";
import { lectorNarrador } from "./narrador.js";

document.addEventListener("DOMContentLoaded", (e)=>{
	menuBurger("panelbtn","panel");
	menuBurger2(".link");
	watch(".mostrar","reloj","#esconder");
	alarma(".play","#stop");
	countdown(".cRegresiva","fri dec 24 2021 23:45:00","hora del polvito, ahre, te amo");
	scrollToUp(".scrollTop","esconderse");
	responsiveMedia(
		"youtube",
	"(min-width:500px)",
	`<a href="https://www.youtube.com/embed/Lo4BYcK0w7I">link video</a>`,
	`<iframe width="560" height="315" src="https://www.youtube.com/embed/Lo4BYcK0w7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
	)
	webCam("webcam");
	localizacion("localizacion");
	buscar(".buscador",".card","filter");
	sorteoDigital(".btnGanador",".jugador");
	carruselSlide(".diapos",".prev",".next","diaposActive");
	scrollSpy();
	smartVideo();
	validFormulario();

	
});
	temaOscuro(".btn-temadark","tema-dark");
document.addEventListener("keydown",(e)=>{
	move(e,".stage",".ball");
});

// conexion();

const $form = document.getElementById("form");

let tester;

document.addEventListener("submit",(e)=>{
	if(e.target===$form){
		e.preventDefault();
		tester = open($form.direccion.value,
			"tester",
			`innerWidth=${$form.ancho.value},
		innerHeight=${$form.alto.value}`)
	}
})

document.addEventListener("click",(e)=>{
	if(e.target===$form.cerrar){
		tester.close()
	}
})

lectorNarrador();


















 











