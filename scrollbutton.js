export function scrollToUp(selector,clase,) {
	const $scroll = document.querySelector(selector);
window.addEventListener("scroll",(e)=>{
	const $scrollTop = document.documentElement.scrollTop;


	if ($scrollTop > 900){
		$scroll.classList.remove(clase);
	}else {
		$scroll.classList.add(clase);
	}
});

document.addEventListener("click", (e)=>{
	if(e.target.matches(".scrollTop")){
		window.scrollTo(0,0);
	}
})
}
