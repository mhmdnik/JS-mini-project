let btnElem = document.querySelectorAll('button')

btnElem.forEach(function(btn){
    btn.addEventListener('click', function(){
        let btnColor = btn.getAttribute('data-color')
        document.documentElement.style.setProperty('--theme-color', btnColor)
    })
})