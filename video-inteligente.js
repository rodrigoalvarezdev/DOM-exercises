export function smartVideo() {
    const vd = document.querySelectorAll("video[data-video]");
    //console.log(vd);
    const cb = (entries)=>{
        //console.log(entries);
        entries.forEach((entry)=>{
            //console.log(entry);
            if(entry.isIntersecting){
                entry.target.play()
            }else{
                entry.target.pause()
            }
            window.addEventListener("visibilitychange",(e)=>{
                if(document.visibilityState==="visible"){
                    entry.target.play();
                }else{
                    entry.target.pause();
                }
            })
        })
    }

    const observer = new IntersectionObserver(cb,{threshold:0.8});
    vd.forEach(el=>observer.observe(el));
}