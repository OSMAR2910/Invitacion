//Crarga
window.onload = function() {
	var loader = document.getElementById('loader');
	loader.style.visibility = 'hidden';
	loader.style.opacity = '0';
}
//Cursor
function isTouchDevice() {
return(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}
const isTouch = isTouchDevice();
if(!isTouch) {
const cursorEl = document.querySelector('.js-cursor');
const isClickedClass = 'is-clicked';
const isHiddenClass = 'is-hidden';
const isLinkHoveredClass = 'is-link-hovered';
const hasCustomCursorClass = 'has-custom-cursor';
const addEventListeners = () => {
	document.addEventListener("mousemove", onMouseMove);
	document.addEventListener("mousedown", onMouseDown);
	document.addEventListener("mouseup", onMouseUp);
	document.addEventListener("mouseenter", onMouseEnter);
	document.addEventListener("mouseleave", onMouseLeave);
	handleLinkHoverEvents();
};
const onMouseMove = (e) => {
	cursorEl.style.setProperty('--cursor-x', e.clientX + "px");
	cursorEl.style.setProperty('--cursor-y', e.clientY + "px");
};
const onMouseDown = () => {
	cursorEl.classList.add(isClickedClass);
};
const onMouseUp = () => {
	cursorEl.classList.remove(isClickedClass);
};
const onMouseEnter = () => {
	cursorEl.classList.remove(isHiddenClass);
};
const onMouseLeave = () => {
	cursorEl.classList.add(isHiddenClass);
};
const handleLinkHoverEvents = () => {
	document.querySelectorAll('a, button, .js-link, input[type="button"], input[type="submit"]').forEach((el) => {
		el.addEventListener("mouseover", () => cursorEl.classList.add(isLinkHoveredClass));
		el.addEventListener("mouseout", () => cursorEl.classList.remove(isLinkHoveredClass));
	});
};
addEventListeners();
document.body.classList.add(hasCustomCursorClass);
}

//Aniscroll nav
window.addEventListener("scroll", function() {
	var slogan = document.querySelector("#slogan");
	slogan.classList.toggle("abajo1", window.scrollY > 0);
})
window.addEventListener("scroll", function() {
	var btnmodalop = document.querySelector("#btn-modalop");
	btnmodalop.classList.toggle("abajo2", window.scrollY > 0);
})
window.addEventListener("scroll", function() {
	var btnclose = document.querySelector(".btn-close");
	btnclose.classList.toggle("abajo3", window.scrollY > 0);
})

/*//fullscreen
var box = document.getElementById('in'),
header = document.getElementById('header'),
contador = 0;

function cambio() {
if(contador == 0) {
	box.classList.add('fullscreen');
	header.classList.add('fullscreen');
	contador = 1;
} else {
	box.classList.remove('fullscreen');
	header.classList.remove('fullscreen');
	contador = 0;
}
}
btn1.addEventListener('click', cambio, true);
btn2.addEventListener('click', cambio, true);
btn3.addEventListener('click', cambio, true);
btn4.addEventListener('click', cambio, true);
btn5.addEventListener('click', cambio, true);
btn6.addEventListener('click', cambio, true);
*/

/*//Modo oscuro
const switchButton = document.getElementById('switch');
const nav = document.querySelector("header");
switchButton.addEventListener('click', () => {
document.body.classList.toggle('dark');
switchButton.classList.toggle('active');
nav.classList.toggle('dark');
});*/

//Boton animacion
var btnsubmit = document.getElementById('btn-submit'), 
    form = document.getElementById('formuario'),
	contador=0;

	function cambio()
	{
		if(contador==0)
		{
			form.classList.add('animacion')
			contador=1;
		}
		else{
			caja.classList.remove('animacion');
			contador=0;
		}
	}

	btnsubmit.addEventListener('click',cambio,'true');
	
//Formulario
 const formuario = document.getElementById('formuario');
 const exito = document.getElementById('exito');
 const database = document.getElementById('base');
 

 formuario.addEventListener('submit', async(e) => {
	e.preventDefault();
try {
	const respuesta = await fetch('https://api.sheetbest.com/sheets/84c5c2ef-9605-4500-b76e-555c83e9e5b9', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'Nombre': formuario.Nombre.value,
			'Numero': formuario.Numero.value,
			'NFamiliares': formuario.NF.value
		})
	});
	const contenido = await respuesta.json();
	console.log(contenido);
} 
catch(error){
	console.log(error);
}

	formuario.classList.remove('activof');
	exito.classList.add('activof');
	
 });

