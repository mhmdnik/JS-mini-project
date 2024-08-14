let $ = document
let navElem = $.querySelector('nav')
let aElem = $.querySelectorAll('a')
let imgElem = $.querySelector('img')

$.addEventListener('scroll', function (event){
    if(document.documentElement.scrollTop > 1){
        navElem.style.backgroundColor = '#333'
        aElem.forEach(function(item) {
            item.style.color = '#eee'
        })
        imgElem.style.height = '64px'        
    }
    else{
        navElem.style.backgroundColor  = '#eee'
        aElem.forEach(function(item) {
            item.style.color = '#333'
        })
        imgElem.style.height = '84px'    
    }
})