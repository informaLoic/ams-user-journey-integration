let wHeight,
	wWidth,
	burgerBtn,
	mainNav,
	eye,
	passInput;

//DOM LOAD
document.addEventListener('DOMContentLoaded', chargementDOM, false);
function chargementDOM(e) {

	wHeight = window.innerHeight || document.body.clientHeight;
	wWidth = window.innerWidth || document.body.clientWidth;
	burgerBtn = document.getElementById('nav-icon');
	mainNav = document.getElementById('main-nav');
	eye = document.getElementById('eye');

	window.addEventListener('resize', resizeWindow, false);
	burgerBtn.addEventListener('click', animationBouton, false);
	burgerBtn.addEventListener('click', openHideNav1, false);
	eye.addEventListener('click', showHidePass, false);
	
}

//Fonctions
function resizeWindow(e) {
	wHeight = window.innerHeight || document.body.clientHeight;
	wWidth = window.innerWidth || document.body.clientWidth;
	burgerBtn = document.getElementById('nav-icon');
	mainNav = document.getElementById('main-nav');

	if(wWidth >= 992) {
		mainNav.classList.remove('transition-nav');
	}
	if(wWidth >= 992 && mainNav.classList.contains('main-nav-open')) {
		burgerBtn.classList.toggle('open');
		mainNav.classList.remove('main-nav-open');
	}
	if(wWidth<992) {
		mainNav.classList.remove('transition-nav');
	}
}

function animationBouton(e) {
	burgerBtn.classList.toggle('open');
}

function openHideNav1(e) {
	mainNav.classList.toggle('main-nav-open');
}
function showHidePass(e) {
	passInput= document.getElementById('password');
	if(passInput.type === 'password') {
		passInput.type = 'texte';	
	} 
	else {
		passInput.type = 'password';
	}
}