
var rgbColors =[0,0,0]
var vecRangeColor = null
var vecTextColor=null
var color_box=null

window.addEventListener("load",start);
///////////////////////////////////////////////////


function start(){
    vecRangeColor = Array.from(document.querySelectorAll("input[type=range]"))
    vecTextColor = Array.from(document.querySelectorAll("input[type=text]"))
    color_box = document.querySelector(".color-box")
    console.log('Pagina carregada com sucesso')
    
    for(let i=0; i< vecRangeColor.length; i++){
        let c = vecRangeColor[i]
        rgbColors[i] = c.value
        c.addEventListener("input", getValue )
    }console.log(rgbColors)
    
}

function getValue(event){
    switch(event.target.id){
        case "IRed":
            console.log(vecRangeColor)
            rgbColors[0] = event.target.value;
            vecTextColor[0].value = event.target.value; 
            break;
        case "IGreen":
            rgbColors[1] = event.target.value;
            vecTextColor[1].value = event.target.value; 
            break;
        case "IBlue":
            rgbColors[2] = event.target.value;
            vecTextColor[2].value = event.target.value; 
            break;
    }
    var c = rgbColors;
    color_box.style = "background-color: rgb("+c[0]+","+c[1]+","+c[2]+")"
}