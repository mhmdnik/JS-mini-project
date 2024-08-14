let $ = document
const inputElem = $.getElementById('itemInput')
const addButton = $.getElementById('addButton')
const clearBtn = $.getElementById('clearButton')
const todoListElem = $.getElementById('todoList')

let todosArray = []

function addNewTodo(){
    let newTodoTitle = inputElem.value
    let newTodoObj = {
        id: todosArray.length + 1,
        title: newTodoTitle,
        complete: false
    }
    inputElem.value = ''
    todosArray.push(newTodoObj)
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
}

function setLocalStorage (todosList){
    localStorage.setItem('todos', JSON.stringify(todosList))
} 

function todosGenerator(todosList){
    let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn, newBtnHolder
    todoListElem.innerHTML = ''
    todosList.forEach(function (todo){
        newTodoLiElem = $.createElement('li')
        newTodoLiElem.className = 'completed well'

        newTodoLabalElem = $.createElement('labal')
        newTodoLabalElem.innerHTML = todo.title

        newTodoCompleteBtn = $.createElement('button')
        newTodoCompleteBtn.className = 'btn btn-success'
        newTodoCompleteBtn.innerText = 'Complete'
        newTodoCompleteBtn.setAttribute('onclick', "statusChanger(" + todo.id + ")")
        if(todo.complete){
            newTodoCompleteBtn.className = 'uncompleted well'
            newTodoCompleteBtn.innerHTML = 'Uncompleted'
        }

        newTodoDeleteBtn = $.createElement('button')
        newTodoDeleteBtn.className = 'btn btn-danger'
        newTodoDeleteBtn.innerText = 'Delete'
        newTodoDeleteBtn.setAttribute('onclick', "removeTodo(" + todo.id + ")")

        newBtnHolder = $.createElement('div')

        
        newBtnHolder.append(newTodoCompleteBtn, newTodoDeleteBtn)
        newTodoLiElem.append(newTodoLabalElem, newBtnHolder)
        todoListElem.append(newTodoLiElem)
    })
}

function statusChanger(todosId){
    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    todosArray = localStorageTodos

    todosArray.forEach(function (todo){
        if(todo.id == todosId)
            todo.complete = !todo.complete
    })
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
}

function removeTodo(todosId){
    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    todosArray = localStorageTodos
    
    let mainTodoIndex = todosArray.findIndex(function (todo){
        return todosId == todo.id
    })
    todosArray.splice(mainTodoIndex, 1)
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
}

function getLocalStorage(){

    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    if(localStorageTodos)
    todosArray = localStorageTodos
    else
    todosArray = []


    todosGenerator(todosArray)
}

function clearTodos(){
    todosArray = []
    todosGenerator(todosArray)
    localStorage.removeItem('todos')
}

addButton.addEventListener('click', addNewTodo)
window.addEventListener('load', getLocalStorage)
clearBtn.addEventListener('click', clearTodos)
inputElem.addEventListener('keypress', function(event){
    if(event.code === 'Enter'){
        addNewTodo()
    }
})