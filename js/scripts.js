

(function(){
	const menu = document.querySelector('.pop-c-nav-cont');
	const particles = document.querySelectorAll('.pop-c-nav-lnk');
	let activator = false;

	if(menu === null){return}
	menu.addEventListener('click', function(){
	let pL = particles.length;
		if(!activator){
			for(let i = 0 ; i < pL ; i++){
				const PI = Math.PI
				let newX = Math.cos(i * ((PI / 2) / 2.8)) * 111;
				let newY = Math.sin(i * ((PI / 2) / 2.8)) * 111;
				particles[i].style.transform = "translate("+newX+"px,"+newY+"px)";
			}
		}else{
			for(let i = 0 ; i < pL ; i++){
				particles[i].style.transform = "none";
			}
		}
		activator = !activator;
	});
})();

(function(){
  const burger = document.querySelector('.tc-burger');
  burger.addEventListener('click',() => {
    burger.classList.toggle('opened');
  });
})();
