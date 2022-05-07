export function validFormulario() {
    const $form = document.querySelector(".form2");
    const $inputs = document.querySelectorAll(".form2 [required]");

    //console.log($form);
    //console.log($inputs);
    $inputs.forEach((input)=>{
        const $span = document.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        input.insertAdjacentElement("afterend",$span);
        $span.classList.add("form2-error","oculto");

    });

    document.addEventListener("keyup",(e)=>{
        if(e.target.matches(".form2 [required]")){
            let $input = e.target;
            let pattern = $input.pattern||$input.dataset.pattern;
            //console.log($input);
            //console.log(pattern);

            if(pattern && $input.value!==""){
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ?document.getElementById($input.name).classList.add("is-active")
                :document.getElementById($input.name).classList.remove("is-active");
            }
            if(!pattern){
                return $input.value===""
                ?document.getElementById($input.name).classList.add("is-active")
                :document.getElementById($input.name).classList.remove("is-active");
                
            }
        }
    });

    document.addEventListener("submit",e=>{
        //e.preventDefault();
        alert("enviando formulario");
        const $loader = document.querySelector(".form-loader");
        const $respuesta = document.querySelector(".form-respuesta");
        $loader.classList.remove("oculto");

        setTimeout(()=>{
            $loader.classList.add("oculto");
            $respuesta.classList.remove("oculto");
            $form.reset();
            setTimeout(()=> $respuesta.classList.add("oculto"),3000)
        },3000);
    });
}