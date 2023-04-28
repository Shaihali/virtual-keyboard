import './styles/style.css'
import { createDomElement } from "./js/create-dom-element.js";
import { KEYBOARDDATA, KEYBOARDDATARUS } from './js/create-keyboard';




const dom = createDomElement()
document.body.append(dom)



const buttons = document.querySelectorAll('.keyboard__btn')
const textArea = document.querySelector('.textarea__item')
const capsLock = document.querySelector('[data-key="CapsLock"]')

const KEYBOARDWORD = [{KeyQ: 'q'}, {KeyW: 'w'}, {KeyE: 'e'}, {KeyR: 'r'}, {KeyT: 't'},
                      {KeyY: 'y'}, {KeyU: 'u'}, {KeyI: 'i'}, {KeyO: 'o'}, {KeyP: 'p'},
                      {KeyA: 'a'}, {KeyS: 's'}, {KeyD: 'd'}, {KeyF: 'f'}, {KeyG: 'g'}, 
                      {KeyH: 'h'}, {KeyJ: 'j'}, {KeyK: 'k'}, {KeyL: 'l'}, {KeyZ: 'z'}, 
                      {KeyX: 'x'}, {KeyC: 'c'}, {KeyV: 'v'}, {KeyB: 'b'}, {KeyN: 'n'}, 
                      {KeyM: 'm'}, {Period: '.'}, {Comma: ','}, {BracketLeft: '['}, 
                      {BracketRight: ']'}, {Backquote: '`'}, {Semicolon: ';'}, {Quote: "'"},
]
const KEYBOARDWORDRus = [{KeyQ: 'й'}, {KeyW: 'ц'}, {KeyE: 'у'}, {KeyR: 'к'}, {KeyT: 'е'},
                      {KeyY: 'н'}, {KeyU: 'г'}, {KeyI: 'ш'}, {KeyO: 'щ'}, {KeyP: 'з'}, 
                      {KeyA: 'ф'}, {KeyS: 'ы'}, {KeyD: 'в'}, {KeyF: 'а'}, {KeyG: 'п'}, 
                      {KeyH: 'р'}, {KeyJ: 'о'}, {KeyK: 'л'}, {KeyL: 'д'}, {KeyZ: 'я'}, 
                      {KeyX: 'ч'}, {KeyC: 'с'}, {KeyV: 'м'}, {KeyB: 'и'}, {KeyN: 'т'}, 
                      {KeyM: 'ь'}, {Period: 'б'}, {Comma: 'ю'}, {BracketLeft: 'х'}, 
                      {BracketRight: 'ъ'}, {Backquote: 'ё'}, {Semicolon: 'ж'}, {Quote: "э"}
]

let lang = ['рус', 'eng']
let off = 0;

  document.addEventListener('keydown', event => {
    if (event.altKey && event.ctrlKey) {
      if(localStorage.getItem('language') === lang[0]) {
				off = 1
				localStorage.setItem('language', lang[off])
			} else {
				off = 0
				localStorage.setItem('language', lang[off])
			}
    }
	})


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
					if(off === 1) {
						KEYBOARDWORD.forEach((item) => {
							if(capsLock.classList.contains('keyboard__btn_activ')) {
								if(btn.getAttribute('data-key') === Object.keys(item)[0]) {
									btn.textContent = Object.values(item)[0]
								}
							} else {
								if(btn.getAttribute('data-key') === Object.keys(item)[0]) {
									btn.textContent = Object.values(item)[0].toUpperCase()
								}
							}
						})
					} else {
						KEYBOARDWORDRus.forEach((item) => {
							if(capsLock.classList.contains('keyboard__btn_activ')) {
								if(btn.getAttribute('data-key') === Object.keys(item)[0]) {
									btn.textContent = Object.values(item)[0]
								}
							} else {
								if(btn.getAttribute('data-key') === Object.keys(item)[0]) {
									btn.textContent = Object.values(item)[0].toUpperCase()
								}
							}
						})
					}
					
				})

				buttons.forEach((btn) => {
					if(event.code === btn.getAttribute('data-key')) {
						btn.classList.toggle('keyboard__btn_activ')
						event.preventDefault()
					}
				})
				




			}else if(event.altKey && event.ctrlKey) {
				buttons.forEach((btn) => {
					if(capsLock.classList.contains('keyboard__btn_activ')) {
						if(off === 1) {
							KEYBOARDWORD.forEach((engWord) => {
								if(btn.getAttribute('data-key') === Object.keys(engWord)[0]) {
									btn.textContent = Object.values(engWord)[0].toUpperCase()
								}
							})
						} else {
							KEYBOARDWORDRus.forEach((rusWord) => {
								if(btn.getAttribute('data-key') === Object.keys(rusWord)[0]) {
									btn.textContent = Object.values(rusWord)[0].toUpperCase()
								}
							})
						}
					} else {
						if(off === 1) {
							KEYBOARDWORD.forEach((engWord) => {
								if(btn.getAttribute('data-key') === Object.keys(engWord)[0]) {
									btn.textContent = Object.values(engWord)[0]
								}
							})
						} else {
							KEYBOARDWORDRus.forEach((rusWord) => {
								if(btn.getAttribute('data-key') === Object.keys(rusWord)[0]) {
									btn.textContent = Object.values(rusWord)[0]
								}
							})
						}
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
				buttons.forEach((btn) => {
					if(event.code === btn.getAttribute('data-key')) {
						textArea.value += btn.textContent
						event.preventDefault();
					}
				})
			}
    }
		textArea.focus();
  })


	
