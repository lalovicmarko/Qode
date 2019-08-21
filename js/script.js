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
		
var bigNewsNumber = document.querySelectorAll('.news-big').length;
if (bigNewsNumber % 2 == 0) {
	var element = document.getElementById("double-small");
   	element.classList.add("double-small");
}