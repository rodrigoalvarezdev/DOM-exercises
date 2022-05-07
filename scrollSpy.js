export function scrollSpy() {
    const $secciones = document.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries)=>{
        //console.log(entries);
        entries.forEach(entry=>{
            //console.log(entry);
            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add("scroll-spy")
            }else{document.querySelector(`a[data-scroll-spy][href="#${id}"]`).
            classList.remove("scroll-spy")

            }
        })
    }


    const observer = new IntersectionObserver(cb,{threshold:0.5});

    $secciones.forEach(el=>{observer.observe(el)});

}
