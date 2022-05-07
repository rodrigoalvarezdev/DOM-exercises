export default function responsiveMedia(id,mq,movil,pc) {
    
    const responsive=(e)=>{
        if(e.matches){
            document.getElementById(id).innerHTML=pc;
        }else{
            document.getElementById(id).innerHTML=movil;
        }
    }
    window.matchMedia(mq).addListener(responsive);
    responsive(window.matchMedia(mq));

}



