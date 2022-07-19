var darkMode = document.querySelector(".darkmode")
var h5s = document.querySelectorAll("h5")
var h3s = document.querySelectorAll("h3")
var circle = document.querySelector(".circle")
var body = document.querySelector("body")
var p = document.querySelector("p")
circle.onclick = function(){
    return turnRight()
}
function turnRight(){
    circle.classList.toggle("right0")
   
    body.classList.toggle("bg")
    h5s.forEach((h5)=>{
        h5.classList.toggle("text-white")
    })
    h3s.forEach((h3)=>{
        h3.classList.toggle("text-white")
    })
    p.classList.toggle("text-white")
}



