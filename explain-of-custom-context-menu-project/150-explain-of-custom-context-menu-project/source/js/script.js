let body = document.querySelector('body')
let contextMenu = document.querySelector('#contextMenu')


body.addEventListener('contextmenu', function(event){
    event.preventDefault()
    if(contextMenu.style.display === 'none'){
        contextMenu.style.display = 'flex'
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    } else {
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }
})

body.addEventListener('click', function () {
    if(contextMenu.style.display !== 'none'){
        contextMenu.style.display = 'none'
    }
})

body.addEventListener('keydown', function (event) {
    if(event.keyCode == 27){
        contextMenu.style.display = 'none'
    }
})