export function carruselSlide(diapos,btnprev,btnnext,active) {
    const $diapos = document.querySelectorAll(diapos);
    const $btnprev = document.querySelector(btnprev);
    const $btnnext = document.querySelector(btnnext);

    let i = 0;

    document.addEventListener("click",(e)=>{
        if(e.target===$btnprev){
            $diapos[i].classList.remove(active);
            i--;
            if(i<0){
                i=$diapos.length-1;
            }
            $diapos[i].classList.add(active);
        }
        if(e.target===$btnnext){
            $diapos[i].classList.remove(active);
            i++;
            if(i>=$diapos.length-1){
                i=0;
            }
            $diapos[i].classList.add(active);
        }
    })
}