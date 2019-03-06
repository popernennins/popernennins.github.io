var loader = document.getElementById("loader");
loader.style.display = "none";

function doesntWork(){
  alert("Doesn't work yet");
}

function play(){
  var fpelements = document.getElementById("frontpage");
  fpelements.parentNode.removeChild(fpelements);
  loader.style.display = "flex";
}
