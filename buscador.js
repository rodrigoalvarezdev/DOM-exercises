export function buscar(buscador,imagenes,filter) {
    const $buscador = document.querySelector(buscador);
    const $imagenes = document.querySelectorAll(imagenes);

    document.addEventListener("keydown",(e)=>{
        if(e.target===$buscador.buscar){
            $imagenes.forEach((el)=>{
                if(el.textContent.includes($buscador.buscar.value)){
                    el.classList.remove(filter)
                }else{
                    el.classList.add(filter)
                }
            })
        }
    })

}