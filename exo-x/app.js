const imagebouton = document.getElementById("imagebouton");
const bouton = document.getElementById("bouton");

imagebouton.addEventListener("click", function() {
  const nouvelleimage = document.createElement("nouvelleimage");
  nouvelleimage.src = "bouton.jpg";
  bouton.appendChild(nouvelleimage);
});


//getElementById pour récupérer les éléments HTML 
//correspondants à notre bouton et à notre div
