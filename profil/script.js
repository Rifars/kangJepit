// tanggal 
let tanggalLahir=document.querySelector(".tanggal-lahir .tanggalL .tanggal select");
let tanggal = 1;
for (tanggal; tanggal <= 30; tanggal++) {
	let newTanggal = document.createElement("option");
	let tanggalNomor = document.createTextNode(tanggal);
	newTanggal.appendChild(tanggalNomor);
	tanggalLahir.appendChild(newTanggal);
}

// tahun
let tahun = document.querySelector(".tanggal-lahir .tanggalL .tahun select");
let awalTahun = 1950;
for(awalTahun; awalTahun <= 2020; awalTahun++){
	let tahunBaru = document.createElement("option");
	let nomorTahun = document.createTextNode(awalTahun);

	tahunBaru.appendChild(nomorTahun);
	tahun.appendChild(tahunBaru);

}