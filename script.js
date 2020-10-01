// hamburger button
let hamburgerButton = document.querySelector(".hamburger-button .button");
 hamburgerButton.addEventListener('click',function(){
 	let hamburgerButtonUL = document.querySelector(".hamburger-button .list");
 	hamburgerButtonUL.classList.toggle("hamburger");
 	hamburgerButton.classList.toggle("no-margin");
 });  


// butuh pembenaran script
let warna = document.querySelectorAll(".pilihan-warna .warna");
let img = document.querySelectorAll(".card-img img");
let angka = [
				[0,1,2],
				[3,4,5],
				[6,7,8]
];
let angkaWarna = [0,1,2];
angkaWarna.forEach(function(e){
		angka[e].forEach(function(i) {
		warna[i].addEventListener('click',function(){
			img[e].setAttribute('src', 'img/' + warna[i].className + ".png");
			img[e].classList.add("animasi");
			setTimeout(function() {
				img[e].classList.remove("animasi");
			}, 200);
		});	
	});
});

// code sebelumnya
// angka[0].forEach(function(i){
// 	warna[i].addEventListener('click',function(){
// 		img[0].setAttribute('src', 'img/' + warna[i].className + ".png");
// 	});	
// });
// angka[1].forEach(function(i){
// 	warna[i].addEventListener('click',function(){
// 		img[1].setAttribute('src', 'img/' + warna[i].className + ".png");
// 	});	
// });

// angka[2].forEach(function(i){
// 	warna[i].addEventListener('click',function(){
// 		img[2].setAttribute('src', 'img/' + warna[i].className + ".png");
// 	});	
// });



// sosial media 
let sosialMedia = document.querySelectorAll(".sosial-media ul li");
sosialMedia.forEach(function(i){
	i.addEventListener('click', function(){
		i.classList.toggle('new');
	});
});

