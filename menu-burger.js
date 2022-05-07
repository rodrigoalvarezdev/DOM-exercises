export function menuBurger(panelbtn,panel) {
	const $panelbtn = document.getElementById(panelbtn);
	const $panel = document.getElementById(panel);
	$panelbtn.addEventListener("click",(e)=>{
		$panel.classList.toggle("active");
		$panel.classList.toggle("opacity");

	})
}


export function menuBurger2(link) {
	const menuLink = document.querySelectorAll(link);
menuLink.forEach((e)=>{
	e.addEventListener("click",(e)=>{
	panel.classList.toggle("active");
});
})
}
