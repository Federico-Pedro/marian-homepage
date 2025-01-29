const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-bar');
const x = document.querySelector('.close');


menu.addEventListener('click', () =>{
    nav.classList.toggle('show');
	x.classList.toggle('show');
});


x.onclick = function() {
  
    nav.classList.remove('show');
	x.classList.remove('show');
};


document.addEventListener("keydown", function() {

  if (event.key === "Escape") {

    nav.classList.remove('show');
	  x.classList.remove('show');

  }

});