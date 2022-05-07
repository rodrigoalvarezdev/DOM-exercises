export function lectorNarrador() {
    const $narradorSelect = document.getElementById("narrador-select");
    const $narradorTexto = document.getElementById("narrador-texto");
    const $narradorBtn = document.getElementById("narrador-btn");
    const narradorMensaje = new SpeechSynthesisUtterance();
    
    //console.log(narradorMensaje);

    let voices = [];

    document.addEventListener("DOMContentLoaded",(e)=>{
        //console.log(speechSynthesis.getVoices());


        window.speechSynthesis.addEventListener("voiceschanged",e=>{
            //console.log(e);
            voices = window.speechSynthesis.getVoices();
            //console.log(voices);

            voices.forEach((voice)=>{
                const $option = document.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name}-${voice.lang}`;

                $narradorSelect.appendChild($option);
            })
        })
    })

    document.addEventListener("change",(e)=>{
        if(e.target===$narradorSelect){
            narradorMensaje.voice = voices.find(
                (voice)=>voice.name === e.target.value
            );
        }
    })

    document.addEventListener("click",(e)=>{
        if(e.target===$narradorBtn){
            narradorMensaje.text= $narradorTexto.value;
            window.speechSynthesis.speak(narradorMensaje);
        }
    })
}