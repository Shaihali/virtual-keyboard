import { createKeyboard } from "./create-keyboard"



const buttons = createKeyboard()

function createDomElement() {
	const wrapper = document.createElement('div')
	const textarea = document.createElement('div')
	const keyboard = document.createElement('div')
	const mainTitle = document.createElement('h1')
	const textDesc = document.createElement('p')
	const textLang = document.createElement('p')

	const textareaItem = document.createElement('textarea')

	wrapper.className = 'wrapper'
	textarea.className = 'textarea'
	keyboard.className = 'keyboard'
	textareaItem.className = 'textarea__item'
	mainTitle.className = 'main-title'
	textDesc.className = 'description'
	textLang.className = 'language'

	mainTitle.innerText = 'Виртуальная клавиатура'
	textDesc.innerText = 'Клавиатура создана в операционной системе Windows'
	textLang.innerText = 'Для переключения языка комбинация: ctrl + alt'


	textareaItem.setAttribute('autofocus', '')

	textarea.append(textareaItem)

	buttons.forEach((button) => {
		keyboard.append(button)
	})
	
	wrapper.append(textarea)
	wrapper.append(keyboard)
	wrapper.append(textDesc)
	wrapper.append(textLang)

	const firstChildWrapper = wrapper.firstChild
	wrapper.insertBefore(mainTitle, firstChildWrapper)

	return wrapper
}

export { createDomElement }