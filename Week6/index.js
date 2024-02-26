var container = document.getElementById("container")
var btn = document.getElementById("btn");
btn.onclick = function(){
    var col = document.createElement("div")
    col.classList.add("col")
    container.appendChild(col)

}

function getRandomColor(){
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)

    return '#' + ('000000' + randomColor).slice(-6);
}

function generateColor(event){
    if (event.keyCode === 32) {
        var colorBox = document.querySelectorAll('.col');
        for(i in colorBox){

            colorBox[i].style.backgroundColor = getRandomColor();
        }
    }
}
document.addEventListener('keydown', generateColor)
