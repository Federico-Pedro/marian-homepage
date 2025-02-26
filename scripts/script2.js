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

//script para guardar en local storage las preferencias sobre el theme
(function() {
  let onpageLoad = localStorage.getItem("theme") || "";
  let element = document.body;
  element.classList.add(onpageLoad);
  document.getElementById("theme").textContent =
    localStorage.getItem("theme") || "light";
})();

function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-mode") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "dark-mode");
  }

  document.getElementById("theme").textContent = localStorage.getItem("theme");
}