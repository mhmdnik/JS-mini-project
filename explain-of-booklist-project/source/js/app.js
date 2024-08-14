let $ = document

let titleElem = $.querySelector('#title')
let authorElem = $.querySelector('#author')
let yearElem = $.querySelector('#year')
let bookListElem = $.querySelector('#book-list')
let bodyElem = $.querySelector('body')

let submitBtn = $.querySelector('#submit')

let bookArray = []

submitBtn.addEventListener('click', function(){
    if(titleElem.value == '' || authorElem.value == '' || yearElem.value == ''){
        alert('no one of inputs must be empty')
        return
    } if(isNaN(yearElem.value)){
        alert('please edit releas date')
        return
    }
    let newRecord = {id: IDGenerator(),title: titleElem.value, author: authorElem.value, year: yearElem.value}
    bookArray.push(newRecord)
    recordGenerator(titleElem.value, authorElem.value, yearElem.value)
    titleElem.value = ''
    authorElem.value = ''
    yearElem.value = ''

})

function IDGenerator(){
    let newGeneratedID = 1
    if(bookArray.length === 0){
        return 1
    } else{
        let usedID = []
        bookArray.forEach(function(item){
            usedID.push(item.id)
        })
        let sortedUsedID = usedID.sort()
        for(i = 0; i <= sortedUsedID.length; i++){
            if(sortedUsedID[i] != newGeneratedID)
                return newGeneratedID
            newGeneratedID++
        }
    }
}

function recordGenerator(title, author, year){
    
    let trElem = document.createElement("tr")
    let titleField = document.createElement("p")
    let authorField = document.createElement("th")
    let yearField = document.createElement("th")
    
    titleField.innerHTML = title
    authorField.innerHTML = author
    yearField.innerHTML = year
    trElem.append(titleField, authorField, yearField)
    bookListElem.append(trElem)

    localStorage.setItem('books', JSON.stringify(bookArray))

}

function getLocalStorage(){
    let localStorageArray = JSON.parse(localStorage.getItem('books'))
    return localStorageArray
}

window.addEventListener('load', function(){
    let localStorageArray = getLocalStorage()
    bookArray = localStorageArray
    if(localStorageArray.length != 0){
        localStorageArray.forEach(function(item){
            recordGenerator(item.title, item.author, item.year)
        })
    }
})
