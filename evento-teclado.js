

let x = 0;
let y = 0;
export function move(e,lugar,bola){
	

	
	const stage = document.querySelector(lugar);
	const ball = document.querySelector(bola);
	const limitball = ball.getBoundingClientRect();
	const limitstage = stage.getBoundingClientRect();



	switch (e.keyCode) {
		case 38:
			if(limitball.top >limitstage.top){
				y--;
				e.preventDefault();
			};
			
			break;
		
		case 40:
			if(limitball.bottom <limitstage.bottom){
				y++;
				e.preventDefault();
			};
			break;

		case 39:
			if(limitball.right <limitstage.right){
				x++;
				e.preventDefault();
			};
			break;

		case 37:
			if(limitball.left >limitstage.left){
				x--;
				e.preventDefault();
			};
			break;

		default:
			break;
	}
	ball.style.transform = `translate(${x*10}px,${y*10}px)`

} 