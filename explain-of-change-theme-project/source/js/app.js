const switchElement = document.querySelector('.switch')
let flicker = document.querySelector('.flicker')
let moon = document.querySelector('.moon')
let bodyElem = document.querySelector('body')


switchElement.addEventListener('click', function () {
  document.body.classList.toggle('dark')
  if(document.body.className.includes('dark'))
  localStorage.setItem('theme', 'dark')
  else
  localStorage.setItem('theme', 'light')
})

window.onload = function() {
  if(localStorage.getItem('theme') == 'dark')
  document.body.classList.add('dark')
  else
  document.body.classList.remove('dark')
}