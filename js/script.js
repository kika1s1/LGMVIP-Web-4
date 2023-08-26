const buttons = document.querySelectorAll('button')
const screen = document.getElementById('screen')


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
        } else if (number === 'delete') {
            screen.textContent = '0'
        }
    })
    
})

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {

        const prev = eval(screen.textContent)
        screen.textContent = prev
        
    } else if (e.key !== 'Enter') {
        if (screen.textContent === '0') {
                screen.textContent = ''
        }
        screen.textContent +=e.key
    
    }
})