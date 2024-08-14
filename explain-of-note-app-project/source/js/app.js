let $ = document
let divElem = $.getElementsByClassName('color-box')
let inputElem = $.querySelector('#input-field')
let listed = $.querySelector('#listed')
let selectedColor = null

function newElemFactory(input, color=null){
    
    let newDivElem = document.createElement('div')
    console.log(newDivElem)
    let newPElem = document.createElement('p')
    newPElem.innerHTML = input
    newDivElem.append(newPElem)
    listed.append(newDivElem)
    newDivElem.className = 'card shadow-sm rounded'
    newPElem.className = 'card-text p-3'
    if(color != null){
        newDivElem.style.backgroundColor = color
    }
}

for(let i = 0; i < divElem.length; i++){
    divElem[i].addEventListener('click', function(){
        selectedColor = divElem[i].style.backgroundColor
        inputElem.style.backgroundColor = selectedColor
    })
}
inputElem.addEventListener('keypress', function(event){
    if(event.keyCode == 13 && inputElem.value != null){
        newElemFactory(inputElem.value, selectedColor)
        inputElem.value = ''
    }
})