export function watch(mostrar,reloji,esconder) {
	let hora;
let reloj;

document.addEventListener("click",(e)=>{
	if(e.target.matches(mostrar)){
		 reloj = setInterval(()=>{
		 hora = new Date().toLocaleTimeString();
		document.getElementById(reloji).innerHTML=`<h3>${hora}</h3>`
		},1000);
		e.target.disabled=true;	
	}

	if(e.target.matches(esconder)){
		clearInterval(reloj);
		document.getElementById(reloji).innerHTML=null;
		document.querySelector(mostrar).disabled=false;
	}
});
}

export function alarma(play,stop) {
	const audio = document.createElement("audio");
audio.src="alarm.mp3"

document.addEventListener("click",(e)=>{
	if(e.target.matches(play)){
		audio.play();
		e.target.disabled=true;
	}
	if(e.target.matches(stop)){
		audio.pause();
		audio.currentTime=0;
		document.querySelector(play).disabled=false;

	}
})
}
