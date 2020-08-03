const tombolUbahWarna = document.getElementById('tombolUbahWarna');
tombolUbahWarna.onclick = function(){
	document.body.classList.toggle('biruMuda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tombolUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);

	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', ' + b +')';
});

const sliderMerah = document.querySelector('input[name=sliderMerah]');

sliderMerah.addEventListener('input', function(){
	const r = sliderMerah.value;
	const g = sliderHijau.value;
	const b = sliderBiru.value;
	document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});

const sliderHijau = document.querySelector('input[name=sliderHijau]');

sliderHijau.addEventListener('input',  function(){
	const r = sliderMerah.value;
	const g = sliderHijau.value;
	const b = sliderBiru.value;
	document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});

const sliderBiru = document.querySelector('input[name=sliderBiru]');

sliderBiru.addEventListener('input', function(){
	const r = sliderMerah.value;
	const g = sliderHijau.value;
	const b = sliderBiru.value;
	document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});

document.body.addEventListener('mousemove', function(event){
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = 'rgb('+xPos+', '+yPos+', 100)';
});

