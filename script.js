
function generatePW(){
    var mpw = document.getElementById("mpw").value
    var site = document.getElementById("site").value
    console.log("PASSWORD", mpw)
    console.log("SITE", site)

    return site+mpw
}

function setPW() {
    var label = document.getElementById("label")
    label.innerHTML = generatePW()
}

function handleClick(event){
    setPW()
}

//var sbutton = document.getElementById('submit');
//sbutton.addEventListener('click', getPW);
