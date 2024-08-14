let $ = document

let btnElem = $.querySelector('button')
let secElem = $.querySelector('section')

let modalParent = $.querySelector('.modal-parent')
let spanElem = $.querySelector('.X')

btnElem.addEventListener('click', function(){
    modalParent.style.display = 'block'
    secElem.style.filter = 'blur(10px)'
})

spanElem.addEventListener('click', function(){
    console.log('hi')
    modalParent.style.display = 'none'
    secElem.style.filter = 'blur(0px)'
})