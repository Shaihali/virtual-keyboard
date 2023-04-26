import './styles/style.css'
import { createDomElement } from "./js/create-dom-element.js";


const dom = createDomElement()
document.body.append(dom)



const buttons = document.querySelectorAll('.keyboard__btn')

document.addEventListener('keydown', (e) => {

	const validArr = ['Tab', 'CapsLock', 'Shift', 'Control', 'Enter', 'Delete', 'Meta', 'Backspace', 'Alt']
	let keyName = ''
	buttons.forEach((btn) => {
		if(validArr.includes(e.key)){
			keyName = e.key
			if(btn.innerHTML === keyName) {
				btn.classList.add('keyboard__btn_activ')
			}
		} else {
			keyName = e.key.toUpperCase()
			if(btn.innerHTML === keyName) {
				btn.classList.add('keyboard__btn_activ')
			}
		}
	})
})

document.addEventListener('keyup', (e) => {
	const validArr = ['Tab', 'CapsLock', 'Shift', 'Ctrl', 'Enter', 'Delete', 'Meta', 'Backspace', 'Alt']
	let keyName = ''
	buttons.forEach((btn) => {
		if(validArr.includes(e.key)){
			keyName = e.key
			if(btn.innerHTML === keyName) {
				btn.classList.remove('keyboard__btn_activ')
			}
		} else {
			keyName = e.key.toUpperCase()
			if(btn.innerHTML === keyName) {
				btn.classList.remove('keyboard__btn_activ')
			}
		}
	})
})