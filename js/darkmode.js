const Lon = document.getElementById('lightOn');
const Loff = document.getElementById('lightOff');
const mainBody = document.getElementById('light');
const textCol1 = document.getElementById('textCol1');
const textCol2 = document.getElementById('textCol2');
const textCol3 = document.getElementById('textCol3');
const navTab = document.getElementById('navTab'); 
const mode = document.getElementById('modeOpt');
const On = document.getElementById('on');
const Off = document.getElementById('off');

Lon.style.display = 'none';
mode.style.display = 'none';
On.style.display = 'none';

function showmode(){
	mode.style.display = 'block';
}

function hidemode(){
	mode.style.display = 'none';
}

function darkMode(){
	mainBody.style.background = 'black'; 
	navTab.style.background = 'black';
	Loff.style.display = 'none';
	Lon.style.display = 'block';
	textCol1.style.color = 'white';
	textCol2.style.color = 'white';
	textCol3.style.color = 'white';
	mode.style.display = 'none'; 
	On.style.display = 'block';
	Off.style.display = 'none';
} 

function lightMode(){
	mainBody.style.background = 'white';
	navTab.style.background = 'white'; 
	Loff.style.display = 'block';
	Lon.style.display = 'none';
	textCol1.style.color = 'black';
	textCol2.style.color = 'black';
	textCol3.style.color = 'black';
	mode.style.display = 'none';
	On.style.display = 'none';
	Off.style.display = 'block';
} 