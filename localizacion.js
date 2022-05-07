export function localizacion(id) {
    const $id = document.getElementById(id);
    
    let options={
        enableHighAccuracy:true,
        timeOut:5000,
        maximumAge:0
    };
    const exito = (position)=>{
        //console.log(position);
        let coords = position.coords;
        $id.innerHTML=`<b>tu posicion es: </b><br>
        <b>latitud:</b> ${coords.latitude}<br>
        <b>longitud:</b>${coords.longitude}<br>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude}" target="_blank">ver en google maps</a>`
    };
    const error = (err)=>{
       // console.log(err);
    };

    
    navigator.geolocation.getCurrentPosition(exito,error,options);
}