

export function countdown(selector,limtitDate,mje) {
	const cRegresiva = document.querySelector(selector);
const mensaje = mje;
let fechaLimite = new Date(limtitDate).getTime();
let fechaActual = new Date().getTime();
let tiempoRestante = fechaLimite-fechaActual;
let audio2 = document.createElement("audio");
audio2.src="paja.opus";

const cuentaRegresiva = setInterval((e)=>{
	fechaLimite = new Date(limtitDate).getTime();
	fechaActual = new Date().getTime();
	tiempoRestante = fechaLimite-fechaActual;

	let dia = Math.floor(tiempoRestante/(1000*60*60*24));
	let hor = Math.floor(tiempoRestante%(1000*60*60*24)/(1000*60*60));
	let min = Math.floor(tiempoRestante%(1000*60*60)/(1000*60));
	let seg = Math.floor(tiempoRestante%(1000*60)/(1000));

	cRegresiva.innerHTML= `<h3>faltan ${dia} dias ${hor} horas ${min} minutos ${seg} segundos</h3>`;
	
	/*if(tiempoRestante<0){
	clearInterval(cuentaRegresiva);
	cRegresiva.innerHTML=`<h3>${mensaje}</h3>`;
	}*/

	if(tiempoRestante<0){
		clearInterval(cuentaRegresiva);
		audio2.play()
	
	}
},1000);
}