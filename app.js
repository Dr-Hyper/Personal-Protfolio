const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const cursor = document.querySelector('.cursor');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

window.addEventListener('mousemove', (e)=>{
	cursor.style.left = e.pageX + 'px';
	cursor.style.top = e.pageY + 'px';
	cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
	console.log(e.pageX, e.pageY);
});

window.addEventListener('scroll', () => {
	const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
	cursor.style.top = scrollY + fromTop + "px";
	console.log(scrollY);
});

window.addEventListener('click', ()=>{
	if(cursor.classList.contains('click')){
		cursor.classList.remove("click");
		//trigerin g a dom refolow
		void cursor.offsetWidth;
		cursor.classList.add('click');
	}else {
		cursor.classList.add("click");
	}
});






