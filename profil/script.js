// tanggal 
let tanggalLahir=document.querySelector(".tanggal-lahir .tanggalL .tanggal select") ;

let tanggal = 1;
for (tanggal; tanggal <= 30; tanggal++) {
	let newTanggal = document.createElement("option");
	let tanggalNomor = document.createTextNode(tanggal);
	newTanggal.appendChild(tanggalNomor);
	tanggalLahir.appendChild(newTanggal);
}
