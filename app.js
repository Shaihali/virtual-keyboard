import './styles/style.css'
import { createDomElement } from "./js/create-dom-element.js";


const dom = createDomElement()
document.body.append(dom)



const buttons = document.querySelectorAll('.keyboard__btn')
const textArea = document.querySelector('.textarea__item')




document.addEventListener('keydown', (e) => {
	if (e.code === 'CapsLock') return
	buttons.forEach((btn) => {
		if(btn.getAttribute('data-key') === e.code) {
			btn.classList.add('keyboard__btn_activ')
		}
  })
})


document.addEventListener('keyup', (e) => {
	if (e.code === 'CapsLock') return;
	buttons.forEach((btn) => {
		if(btn.getAttribute('data-key') === e.code) {
			btn.classList.remove('keyboard__btn_activ')
		}
	})
})




  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      textArea.selectionStart--
      textArea.selectionEnd--
      event.preventDefault()

    } else if (event.key === 'ArrowRight') {
      textArea.selectionStart++
      textArea.selectionEnd++
      event.preventDefault()

    } else if (event.key === 'ArrowUp') {
      let currentPos = textArea.selectionStart
      let lineStart = textArea.value.lastIndexOf('\n', currentPos - 2)
      if (lineStart === -1) {
        lineStart = 0
      }
      textArea.selectionStart = lineStart
      textArea.selectionEnd = lineStart
      event.preventDefault()

    } else if (event.key === 'ArrowDown') {
      let currentPos = textArea.selectionStart
      let lineEnd = textArea.value.indexOf('\n', currentPos)
      if (lineEnd === -1) {
        lineEnd = textArea.value.length
      }
      textArea.selectionStart = lineEnd + 1
      textArea.selectionEnd = lineEnd + 1
      event.preventDefault()




    } else {
      if (event.key === 'Backspace') { 
        let currentPos = textArea.selectionStart
        if (currentPos > 0) {
					let before = textArea.value.substring(0, currentPos - 1)
					let after = textArea.value.substring(currentPos)
					textArea.value = before + after
					textArea.selectionStart = currentPos - 1
					textArea.selectionEnd = currentPos - 1
					event.preventDefault()
    		}




			} else if(event.code === 'CapsLock') {
				buttons.forEach((btn) => {
					if(event.code === btn.getAttribute('data-key')) {
						btn.classList.toggle('keyboard__btn_activ')
						event.preventDefault()
					}
				})
				




			}else if (event.key === 'Enter') {
				textArea.value += '\n'
				event.preventDefault()




			} else if (event.key === "Tab") {
				event.preventDefault()
				let start = textArea.selectionStart
				textArea.value = textArea.value.substring(0, start) + "\t"
				textArea.selectionStart = textArea.selectionEnd = start + 1




			}else if (event.key === 'Delete') { 
        let currentPos = textArea.selectionStart
        if (currentPos > 0) {
					let before = textArea.value.substring(0, currentPos)
					let after = textArea.value.substring(currentPos + 1)
					textArea.value = before + after;
					textArea.selectionStart = currentPos
					textArea.selectionEnd = currentPos
					event.preventDefault();
    		}

				

			} else if(event.key === 'Shift' || event.key === 'Alt' || event.key === 'Control' || event.key === 'Meta') {
				event.preventDefault();

				
			}else {
				textArea.value += event.key
				event.preventDefault();
			}
    }
		textArea.focus();
  })






	
