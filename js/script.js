function burgerMenu() {
	var x = document.getElementById("burger");
	if (x.style.display === "block") {  
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

window.onresize = function(){
	if (window.innerWidth > 1035) {
		document.getElementById("burger").style.display = "none";
	}
}