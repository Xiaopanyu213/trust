const link = document.getElementById('links');
const show = document.getElementById('show');  
const close = document.getElementById('close'); 

function showLink(){ 
	link.style.display="block"; 
	show.style.display="none";
	close.style.display="block"; 
}
function closeLink(){
	link.style.display="none";
	close.style.display="none";
	show.style.display="block";
}
function myFunction(x) {
    x.classList.toggle("change"); 
}

const sign = document.getElementById('signUp'); 
const log = document.getElementById('signIn');
const forge = document.getElementById('forgot');

function showSign(){
	sign.style.display="block";
	log.style.display="none";
}
function closeSign(){
	sign.style.display="none";
}

function showLog(){
	log.style.display="block";
	sign.style.display="none";
	forge.style.display="none";
}
function closeLog(){
	log.style.display="none";
}

function showForg(){
	forge.style.display="block";
	log.style.display="none";
}
function closeForg(){
	forge.style.display="none";
}