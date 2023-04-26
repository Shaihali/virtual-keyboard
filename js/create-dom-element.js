import { createKeyboard } from "./create-keyboard"

const buttons = createKeyboard()

function createDomElement() {
	const wrapper = document.createElement('div')
	const textarea = document.createElement('div')
	const keyboard = document.createElement('div')

	const textareaItem = document.createElement('textarea')

	wrapper.className = 'wrapper'
	textarea.className = 'textarea'
	keyboard.className = 'keyboard'
	textareaItem.className = 'textarea__item'

	textarea.append(textareaItem)

	buttons.forEach((button) => {
		keyboard.append(button)
	})
	
	wrapper.append(textarea)
	wrapper.append(keyboard)

	return wrapper
}

export { createDomElement }