const titleElem = document.querySelector('.title')

document.addEventListener('keyup', function (event){

    addToTitleElem(event)
    let keyValue = event.key.toUpperCase()
    let keyElem = document.getElementById(keyValue)

    keyElem.classList.add('hit')
    keyElem.addEventListener('animationend', function(){
        keyElem.classList.remove('hit')
    })

})

function addToTitleElem(event){
    let enteredKey = event.key
    if(event.code == 'Backspace'){
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        return
    }
    titleElem.innerHTML += event.key

}