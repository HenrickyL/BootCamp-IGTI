var buttons= null
var interval = null



window.addEventListener("load",()=>{
    const timer = document.querySelector("#timer")
    let count = 0
    buttons =Array.from( document.querySelectorAll("button") )
    for(let i in buttons){
        buttons[i].addEventListener("click",(event)=>{
            let  bt = event.target
            if(bt.className === "activate"){
                bt.classList.remove("activate")
                if(bt.id === "start"){
                    bt.textContent = "start"
                }
            }else{
                bt.classList.add("activate")
                if(bt.id === "start"){
                    bt.textContent = "pausar"
                }
            }
            if(buttons[0].className=="activate" && buttons[1].className=="activate"){
                if( i == 0 && bt.className==="activate"){
                    buttons[1].classList.remove("activate")
                }else if(i==1 && bt.className=="activate"){
                    buttons[0].classList.remove("activate")
                }
            }
            //ativar
            if(buttons[0].className==="activate" && interval ==null){
                interval = setInterval(() => {
                    if(buttons[0].className=="activate"){
                        ++count
                    }
                    timer.textContent= count 

             
             
                 }, 1000);
            }else if(buttons[1].className==="activate"){
                clearInterval(interval)
                interval=null
                count=0 
                timer.textContent= count 
            }
           
        })
    }


    //salva o setInterval para poder encerrar depois
    

})