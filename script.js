function shuffle(site, mpw) {

    var news = ""

    var using = site.lenth > mpw.length && site || mpw
    var other = using == site && mpw || site

    var j = 0

    for (var i = 0; i < using.length; i++){


        news += using.charAt(i)

        if (other.length > j){
            news += other.charAt(j)
        }
        else {
            j = 0
        }

        j++
    }

    console.log(news)
    return news
  }

function generatePW(){
    var mpw = document.getElementById("mpw").value
    var site = document.getElementById("site").value
    var cl = document.getElementById("charlim").value

    
    console.log("PASSWORD", mpw)
    console.log("SITE", site)

    site = site.toLowerCase()


    var shuffled = shuffle(site, mpw)

    if (cl){
        return shuffled.substring(0, cl)
    }


    return shuffled
}

function setPW() {
    var label = document.getElementById("label")
    label.innerHTML = generatePW()
}

function handleClick(event){
    setPW()
}

var sbutton = document.getElementById('submit');
sbutton.addEventListener('click', setPW);
