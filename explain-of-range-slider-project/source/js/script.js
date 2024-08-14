let inputElem = document.querySelector('input')
let containerElem = document.querySelector('.container')

inputElem.addEventListener('change', function (event){
    let brigtnessValue = event.target.value
    containerElem.style.filter = "brightness(" + brigtnessValue + "%)"
})

