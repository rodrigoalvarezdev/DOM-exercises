export function temaOscuro(selector,temadark) {
	const botontemadark = document.querySelector(selector);
	const body = document.querySelector("body");
	
const darkTheme =()=>{
	body.classList.add(temadark);
	botontemadark.textContent="☀️";
	localStorage.setItem("tema","oscuro");
}

const lightTheme =()=>{
	body.classList.remove(temadark);
	botontemadark.textContent="🌙";	
	localStorage.setItem("tema","claro");
}

botontemadark.addEventListener("click",(e)=>{
	if(botontemadark.textContent==="🌙"){
		darkTheme();
	}else{
		lightTheme();
	}	
})

document.addEventListener("DOMContentLoaded",(e)=>{
	if(localStorage.getItem("tema")==="null"){
		localStorage.setItem("tema","claro");
	}
	if(localStorage.getItem("tema")==="claro"){
		lightTheme();
	}
	if(localStorage.getItem("tema")==="oscuro"){
		darkTheme();
	}
})





}

