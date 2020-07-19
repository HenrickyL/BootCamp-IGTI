window.addEventListener("load",start)
//inicializar dados
var globalNotes = [];
//apontar pro input(quando iniciar)
var inputTitle = null;
// var inputDescription= null;
// var buttonInput= null;
var form = null 
var notas = null // tem uma div com #register
var noNotes = null

//popup
var popUp = null
var close = null


/////////////////////////
function start(){
    inputTitle = document.querySelector("#input-title");
    form = document.querySelector("form")
    notas = document.querySelector("#register")
    noNotes = document.querySelector("#noNotes")
    preventFormSubmit();
    // inputDescription =document.querySelector("#description-area")
    // buttonInput = document.que
    console.log(form, typeof(form))
    activateInput();
    designPopUp()
}

function preventFormSubmit(){ // tratar reload da pagina
    function handleFormSubmit(event){
        event.preventDefault(); //não fazer o padrão
    }

    form.addEventListener("submit", handleFormSubmit);
}
function activateInput(){
    //se clicar enter ir pro de baixo
    function handleTyping(event){
        if(event.key === "Enter" ){
            for(let i=0; i< form.length; i++){
                if(form[i].id === "input-title"){
                    form[id="description-area"].focus();
                }
            }
        }

    } 
    
    inputTitle.addEventListener("keyup", handleTyping)
    form[id="add-note"].addEventListener("click",saveData)
    inputTitle.focus();
}

function saveData(event){
    
    let button = event.target 
    //saber seobotão está editando ou não
    if(button.className === "editing"){
        button.textContent="adicionar"
        button.classList.remove("editing")
    }

    globalNotes.push({title:form[id="input-title"].value, description:form[id="description-area"].value})

    for(let i=0;i<form.length-1;i++){
        form[i].value=''
    }
    inputTitle.focus();

    //Depois de salvar renderiso as notas
    render();
}

//renderizar notas
function render(){
    function editeNoteContent(title,descript,index){
        h3 = title
        p = descript

        inputTitle.value = h3.textContent
        form[id="description-area"].value = p.textContent

        inputTitle.classList.add("editing")
        form[id="add-note"].classList.add("editing")
        
        form[id="add-note"].textContent="Editar"
        globalNotes.splice(i,1)
    }



    // trabalho com h3 p img.close
    notas.textContent=''
    notas.innerHTML = "<h2>Notas Cadastrados:</h2>"
    for(let i=0;i<globalNotes.length; i++){
        
        
        let n = globalNotes[i]
        //cria uma nota
        var note = document.createElement("div")
        note.classList.add("note")
            //crio os elementos
            let h3 = document.createElement("h3") ;
            h3.classList.add("clicable")
            h3.addEventListener("click",()=>{
                editeNoteContent(h3,p,i)
            })


            let p = document.createElement("p");
            p.classList.add("clicable")
            p.addEventListener("click",()=>{
                editeNoteContent(h3,p,i)
            })

            // let dateNote = document.createElement("span");
            // dateNote.classList.add("date")
            
            var imgClose = document.createElement("img");
            imgClose.classList.add("close")
            imgClose.addEventListener("click", ()=>{
                globalNotes.splice(i,1)
                console.log(globalNotes.length)
                if(globalNotes.length < 1){
                    noNotes.classList.remove("hide")
                }else{
                    noNotes.classList.add("hide")
                }
                render();
            })
        //atribuições
            h3.textContent = n.title
            p.textContent = n.description
            imgClose.src = "img/x.png"
            //dateNote.textContent = ""+Date()
        //coloco os elementos dentro de note
        note.appendChild(imgClose)
        note.appendChild(h3)
        note.appendChild(p)
        // note.appendChild(dateNote)
        //add função de remover
        
        
        //add a nota na lista
        notas.appendChild(note)
        console.log(">>add Note")
    }
}





////////////////    CHARMES /////////////
function designPopUp(){
    popUp = document.querySelector("#popUp")
    close = document.querySelector("#popUp #closePU")
    window.addEventListener("keyup",(event)=>{
        if( popUp.classList[0] != "hide"){
            popUp.classList.add("hide")
        }
    })
    
    form[id="add-note"].addEventListener("click",()=>{
        popUp.classList.remove("hide")
    })
    close.addEventListener("click",()=>{
        popUp.classList.add("hide")
    })
}
