let hamburgerButton = document.querySelector(".hamburger-button .button");
 hamburgerButton.addEventListener('click',function(){
 	let hamburgerButtonUL = document.querySelector(".hamburger-button");
 	hamburgerButtonUL.classList.toggle("hamburger");
 	hamburgerButton.classList.toggle("no-margin");
 });   