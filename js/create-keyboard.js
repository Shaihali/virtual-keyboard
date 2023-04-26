import { Button } from "./classes"
import svg from '../assets/svg/1.svg'


const buttonSize20 = new Button(50, 50)


const KEYBOARDDATA = [{Backquote: '`'}, {Digit1: '1'}, {Digit2: '2'}, {Digit3: '3'}, {Digit4: '4'}, {Digit5: '5'},
                      {Digit6: '6'}, {Digit7: '7'}, {Digit8: '8'}, {Digit9: '9'}, {Digit0: '0'}, {Minus: '-'}, {Equal: '='},
                      {Backspace: 'Backspace'}, {Tab: 'Tab'}, {KeyQ: 'Q'}, {KeyW: 'W'}, {KeyE: 'E'}, {KeyR: 'R'}, {KeyT: 'T'},
                      {KeyY: 'Y'}, {KeyU: 'U'}, {KeyI: 'I'}, {KeyO: 'O'}, {KeyP: 'P'}, {BracketLeft: '['}, {BracketRight: ']'},
                      {Backslash: '\\'}, {Delete: 'DEL'}, {CapsLock: 'Caps Lock'}, {KeyA: 'A'}, {KeyS: 'S'}, {KeyD: 'D'},
                      {KeyF: 'F'}, {KeyG: 'G'}, {KeyH: 'H'}, {KeyJ: 'J'}, {KeyK: 'K'}, {KeyL: 'L'}, {Semicolon: ';'},
                      {Quote: "'"}, {Enter: 'ENTER'}, {ShiftLeft: 'Shift'}, {Backslash: '\\'}, {KeyZ: 'Z'}, {KeyX: 'X'},
                      {KeyC: 'C'}, {KeyV: 'V'}, {KeyB: 'B'}, {KeyN: 'N'}, {KeyM: 'M'}, {Period: '.'}, {Comma: ','}, {Slash: '/'},
                      {ArrowUp: svg}, {ShiftRight: 'Shift'}, {ControlLeft: 'Ctrl'}, {MetaLeft: 'Win'}, {AltLeft: 'Alt'},
                      {Space: ' '}, {AltRight: 'Alt'}, {ControlRight: 'Ctrl'}, {ArrowLeft: svg}, {ArrowDown: svg}, {ArrowRight: svg},
]


function createKeyboard() {
	let buttonsArr = []
	const validArrForColor = ['`', 'Tab', 'Caps Lock', 'Shift', 'Ctrl', 'ENTER', 'DEL', 'Win', 'Backspace', 'Alt']
	const validArrForSize = ['Tab', 'Caps Lock', 'Ctrl', 'ENTER', 'Backspace', ' ']

	for(let i = 0; i < KEYBOARDDATA.length; i++) {
		const [key, value] = Object.entries(KEYBOARDDATA[i])[0]
	
		const button = document.createElement('button')


		button.innerHTML = value
		button.setAttribute('data-key', key)
		button.className = 'keyboard__btn'
	

		let shadedButtons = buttonsArr.filter((btn) => {
			return validArrForColor.some((value) => {
				return btn.innerHTML.includes(value);
			})
		})
		shadedButtons.forEach((button) => {
			button.className = 'keyboard__btn keyboard__btn_color'
		})


		let ordinaryButtons = buttonsArr.filter((btn) => {
			let textContent = btn.innerHTML
			return !validArrForSize.includes(textContent);
		})
		ordinaryButtons.forEach((btn) => {
			btn.style.width = buttonSize20.width
			btn.style.height = buttonSize20.height
		})
		if(button.textContent === 'Backspace' || button.textContent === 'Caps Lock') {
			button.style.width = '115px'
		}
		if(button.textContent === 'Tab') {
			button.style.width = '60px'
		}
		if(button.textContent === 'ENTER') {
			button.style.width = '107px'
		}
		for (let button of buttonsArr) {
			if (button.innerText === 'Shift') {
				button.style.width = '115px'
				break
			}
		}
		if(button.textContent === 'Ctrl') {
			button.style.width = '82px'
		}
		if(button.innerHTML === svg) {
			button.style.width = '50px'
		}
		if(button.textContent === ' ') {
			button.style.width = '335px'
		}


		
		buttonsArr.push(button)
	}
 
	return buttonsArr
}



export { createKeyboard }