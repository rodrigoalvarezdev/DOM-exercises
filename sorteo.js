export function sorteoDigital(btn,selector) {
    const obtenerGanador=(selector)=>{
        const $jugadores = document.querySelectorAll(selector);
        const $ramdom = Math.floor(Math.random()*$jugadores.length);
        const $ganador = $jugadores[$ramdom];

        return `el ganador es ${$ganador.textContent}`;
    }

    document.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let result = obtenerGanador(selector);
            alert(result);
            console.log(result);
        }
    })
}