let number = document.querySelector('#num')
let start = document.querySelector('#btn-start')
let stop = document.querySelector('#btn-stop')
let reset = document.querySelector('#btn-reset')
let value = 0
let interval
console.log('hello')
start.addEventListener('click', ()=>{
   interval = setInterval(()=>{
        number.textContent = value
        value++
    }, 10)
})

stop.addEventListener('click',()=>{
    clearInterval(interval)
})

reset.addEventListener('click',()=>{
    clearInterval(interval)
    number.textContent = 0
    value = 0
})

