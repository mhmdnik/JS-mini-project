let inputElem = document.querySelector('#text')
let spanElem = document.querySelector('.counter')
let maxLength = inputElem.getAttribute('maxlength')


inputElem.addEventListener('keyup', function(){
   spanElem.innerHTML = maxLength - inputElem.value.length
})