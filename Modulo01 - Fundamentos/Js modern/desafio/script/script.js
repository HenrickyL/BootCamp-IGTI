let countMatch = null //nº user match
let boxSearchResults=null // 
let boxStatistics = null

let search=null
let button=null

let allUsers = []
let matchUser=[]

let numberFormat =null

window.addEventListener("load", ()=>{
    countMatch = document.querySelector("#count-match")
    boxSearchResults= document.querySelector("#search-results")
    boxStatistics = document.querySelector("#search-data")
    search = document.querySelector("#text-input")
    button = document.querySelector("#button")
    search.focus()
    
    numberFormat = Intl.NumberFormat("pt-BR")

    handleInputs()
    doFetch()
    
})

function handleInputs(){

    search.addEventListener("keyup",()=>{
        let searchValue = search.value.trim().toLowerCase()
        matchUser=allUsers.filter(user=>{
            
            if(searchValue.length>0){
                return user.name.toLowerCase().includes(searchValue)
            }
            return false
        })
        countMatch.textContent = matchUser.length
        console.log(matchUser.length)
        render()
    })
    button.addEventListener("click",()=>{
        let searchValue = search.value.trim()
        matchUser=allUsers.filter(user=>{
            
            return user.name.toLowerCase().includes(searchValue)
        })
        console.log(matchUser.length)
    })
}



async function doFetch(){
    const res = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
    const json = await res.json()
    allUsers = json.results.map(user=>{
        const {name, gender, dob, picture} = user
        return{
            name: name.first+' '+name.last,
            gender: gender,
            age: dob.age,
            picture: picture.large
        }
    })
    render()
}

function render(){
    if(matchUser.length <1){
        renderEmpthMatch()
        renderEmpthStatistics()
    }else{
        renderMatchs()
        renderStatistics()
    }
    
}

function renderEmpthStatistics(){
    let statistictsHTML = `<div class="empth-statistics">
        Nada a ser exibido!
                </div>`
    boxStatistics.innerHTML = statistictsHTML  
}

function renderEmpthMatch(){
    let usersHTML = `<div class="empth-text">
        Nenhum Usuário Encontrado
                </div>`
    boxSearchResults.innerHTML = usersHTML        
}

function renderStatistics(){
    let sumAge = matchUser.reduce((acummulator, user) => {
        return acummulator+ user.age
    }, 0)
    let mens = matchUser.filter(user=>{
        return user.gender === "male"
    })
    let womans = matchUser.filter(user=>{
        return user.gender === "female"
    })


    let statistictsHTML = `<div class="data-info">
        <span>Sexo Masculido: <strong>${mens.length}</strong></span>
        <span>Sexo Feminino: <strong>${womans.length}</strong></span>
        <span>Soma da Idade: <strong>${sumAge}</strong></span>
        <span>Média das Idades: <strong>${(sumAge/matchUser.length).toFixed(2)}</strong></span>    
    </div>`
    boxStatistics.innerHTML = statistictsHTML  
}

function renderMatchs(){
    let usersHTML = '<div class="users">'
    matchUser.forEach(user=>{
        const {name, age, gender, picture} = user
        const userHTML = `
            <div class="user">
                <img src="${picture}" alt="${name}">
                <div>
                    <h4 id="name">${name}</h4>
                        <span id="idade">${age} anos</span>
                </div>
            </div>
        `
        usersHTML+=userHTML
    })
    
    
    usersHTML+= '</div>'
    boxSearchResults.innerHTML = usersHTML

}