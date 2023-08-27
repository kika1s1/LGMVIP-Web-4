const buttons = document.querySelectorAll('button')
const screen = document.getElementById('screen')
const historyDisplay = document.getElementById('history--display')



buttons.forEach(button => {
    button.addEventListener(('click'), ()=> {
        const number = button.value
        if (number !== "=" && number !== 'delete') {
            if (screen.textContent === '0') {
                screen.textContent = ''
            }
            screen.textContent += number.toString()
            
        } else if (number === '=') {
            const prev = screen.textContent

            screen.textContent = eval(prev)
            historyDisplay.innerHTML += prev.toString() + " = " + eval(prev) + "<br/>"
            
        } else if (number === 'delete') {
            screen.textContent = '0'
        }
    })
    
})

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {

        const dsply = screen.textContent
        const prev = eval(screen.textContent)

        historyDisplay.innerHTML += screen.textContent.toString() +" = "+ prev +"<br/>"

        screen.textContent = prev
        
    } else if (e.key !== 'Enter') {
        if (screen.textContent === '0') {
                screen.textContent = ''
        }
        screen.textContent +=e.key
    
    }
})