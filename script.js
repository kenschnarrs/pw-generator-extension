
function generatePW(mpw, site){
    var mpwv = mpw.value
    var sitev = site.value


    return "AHHHHH"
}

function getPW(event) {

    var label = document.getElementById("label")

    label.innerHTML = generatePW()
    event.preventDefault()
   
}

var sbutton = document.getElementById('submit');
sbutton.addEventListener('click', getPW);
