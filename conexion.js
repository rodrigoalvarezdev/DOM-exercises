const $div = document.createElement("div");
const $body = document.querySelector("body");

export function conexion() {
	const isOnline =()=>{
		if(navigator.onLine){
			$div.textContent="estas conectado";
           
			
            
	
		}else{
			$div.textContent="estas desconectado";
           
			
		}
	}
	window.addEventListener("online",(e)=> isOnline()
	);
	
	window.addEventListener("offline",(e)=> isOnline()
	);
	$body.insertBefore($div,$body.firstElementChild)

}

