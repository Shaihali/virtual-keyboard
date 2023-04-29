/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _js_create_dom_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/create-dom-element.js */ \"./js/create-dom-element.js\");\n/* harmony import */ var _js_create_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/create-keyboard */ \"./js/create-keyboard.js\");\n\n\n\nconst dom = (0,_js_create_dom_element_js__WEBPACK_IMPORTED_MODULE_1__.createDomElement)();\ndocument.body.append(dom);\nconst keyboard = document.querySelector('.keyboard');\nconst buttons = document.querySelectorAll('.keyboard__btn');\nconst textArea = document.querySelector('.textarea__item');\nconst capsLock = document.querySelector('[data-key=\"CapsLock\"]');\nconst KEYBOARDWORD = [{\n  KeyQ: 'q'\n}, {\n  KeyW: 'w'\n}, {\n  KeyE: 'e'\n}, {\n  KeyR: 'r'\n}, {\n  KeyT: 't'\n}, {\n  KeyY: 'y'\n}, {\n  KeyU: 'u'\n}, {\n  KeyI: 'i'\n}, {\n  KeyO: 'o'\n}, {\n  KeyP: 'p'\n}, {\n  KeyA: 'a'\n}, {\n  KeyS: 's'\n}, {\n  KeyD: 'd'\n}, {\n  KeyF: 'f'\n}, {\n  KeyG: 'g'\n}, {\n  KeyH: 'h'\n}, {\n  KeyJ: 'j'\n}, {\n  KeyK: 'k'\n}, {\n  KeyL: 'l'\n}, {\n  KeyZ: 'z'\n}, {\n  KeyX: 'x'\n}, {\n  KeyC: 'c'\n}, {\n  KeyV: 'v'\n}, {\n  KeyB: 'b'\n}, {\n  KeyN: 'n'\n}, {\n  KeyM: 'm'\n}, {\n  Period: '.'\n}, {\n  Comma: ','\n}, {\n  BracketLeft: '['\n}, {\n  BracketRight: ']'\n}, {\n  Backquote: '`'\n}, {\n  Semicolon: ';'\n}, {\n  Quote: \"'\"\n}];\nconst KEYBOARDWORDRus = [{\n  KeyQ: 'й'\n}, {\n  KeyW: 'ц'\n}, {\n  KeyE: 'у'\n}, {\n  KeyR: 'к'\n}, {\n  KeyT: 'е'\n}, {\n  KeyY: 'н'\n}, {\n  KeyU: 'г'\n}, {\n  KeyI: 'ш'\n}, {\n  KeyO: 'щ'\n}, {\n  KeyP: 'з'\n}, {\n  KeyA: 'ф'\n}, {\n  KeyS: 'ы'\n}, {\n  KeyD: 'в'\n}, {\n  KeyF: 'а'\n}, {\n  KeyG: 'п'\n}, {\n  KeyH: 'р'\n}, {\n  KeyJ: 'о'\n}, {\n  KeyK: 'л'\n}, {\n  KeyL: 'д'\n}, {\n  KeyZ: 'я'\n}, {\n  KeyX: 'ч'\n}, {\n  KeyC: 'с'\n}, {\n  KeyV: 'м'\n}, {\n  KeyB: 'и'\n}, {\n  KeyN: 'т'\n}, {\n  KeyM: 'ь'\n}, {\n  Period: 'б'\n}, {\n  Comma: 'ю'\n}, {\n  BracketLeft: 'х'\n}, {\n  BracketRight: 'ъ'\n}, {\n  Backquote: 'ё'\n}, {\n  Semicolon: 'ж'\n}, {\n  Quote: \"э\"\n}];\nconst KEYBOARDWORDSHIFTRUS = [['Backquote', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma'], [{\n  Digit1: '!'\n}, {\n  Digit2: '\"'\n}, {\n  Digit3: '№'\n}, {\n  Digit4: ';'\n}, {\n  Digit5: '%'\n}, {\n  Digit6: ':'\n}, {\n  Digit7: '?'\n}, {\n  Digit8: '*'\n}, {\n  Digit9: '('\n}, {\n  Digit0: ')'\n}, {\n  Minus: '_'\n}, {\n  Equal: '+'\n}], [{\n  Digit1: '1'\n}, {\n  Digit2: '2'\n}, {\n  Digit3: '3'\n}, {\n  Digit4: '4'\n}, {\n  Digit5: '5'\n}, {\n  Digit6: '6'\n}, {\n  Digit7: '7'\n}, {\n  Digit8: '8'\n}, {\n  Digit9: '9'\n}, {\n  Digit0: '0'\n}, {\n  Minus: '-'\n}, {\n  Equal: '='\n}], [{\n  Backquote: '~'\n}, {\n  Digit1: '!'\n}, {\n  Digit2: '@'\n}, {\n  Digit3: '#'\n}, {\n  Digit4: '$'\n}, {\n  Digit5: '%'\n}, {\n  Digit6: '^'\n}, {\n  Digit7: '&'\n}, {\n  Digit8: '*'\n}, {\n  Digit9: '('\n}, {\n  Digit0: ')'\n}, {\n  Minus: '_'\n}, {\n  Equal: '+'\n}, {\n  BracketLeft: '{'\n}, {\n  BracketRight: '}'\n}, {\n  Backslash: '|'\n}, {\n  Semicolon: ':'\n}, {\n  Quote: '\"'\n}, {\n  Period: '<'\n}, {\n  Comma: '>'\n}, {\n  Slash: '\\\\'\n}], [{\n  Backquote: '`'\n}, {\n  Digit1: '1'\n}, {\n  Digit2: '2'\n}, {\n  Digit3: '3'\n}, {\n  Digit4: '4'\n}, {\n  Digit5: '5'\n}, {\n  Digit6: '6'\n}, {\n  Digit7: '7'\n}, {\n  Digit8: '8'\n}, {\n  Digit9: '9'\n}, {\n  Digit0: '0'\n}, {\n  Minus: '-'\n}, {\n  Equal: '='\n}, {\n  BracketLeft: '['\n}, {\n  BracketRight: ']'\n}, {\n  Backslash: '/'\n}, {\n  Semicolon: ';'\n}, {\n  Quote: \"'\"\n}, {\n  Period: ','\n}, {\n  Comma: '.'\n}, {\n  Slash: '/'\n}]];\nlet lang = ['рус', 'eng'];\nlet off = 0;\ndocument.addEventListener('keydown', event => {\n  if (event.altKey && event.ctrlKey) {\n    if (localStorage.getItem('language') === lang[0]) {\n      off = 1;\n      localStorage.setItem('language', lang[off]);\n    } else {\n      off = 0;\n      localStorage.setItem('language', lang[off]);\n    }\n  }\n});\ndocument.addEventListener('keydown', e => {\n  if (e.code === 'CapsLock') return;\n  buttons.forEach(btn => {\n    if (btn.getAttribute('data-key') === e.code) {\n      btn.classList.add('keyboard__btn_activ');\n    }\n    if (e.key === 'Shift') {\n      if (localStorage.getItem('language') === 'рус') {\n        KEYBOARDWORDSHIFTRUS[0].forEach(elem => {\n          if (btn.getAttribute('data-key') === elem) {\n            if (btn.innerHTML === btn.innerHTML.toUpperCase()) {\n              btn.innerHTML = btn.innerHTML.toLowerCase();\n            } else {\n              btn.innerHTML = btn.innerHTML.toUpperCase();\n            }\n          }\n        });\n        if (btn.getAttribute('data-key') === 'Slash') {\n          btn.innerHTML = ',';\n        }\n        if (btn.getAttribute('data-key') === 'Backslash') {\n          btn.innerHTML = '/';\n        }\n        KEYBOARDWORDSHIFTRUS[1].forEach(elem => {\n          const [key, value] = Object.entries(elem)[0];\n          if (btn.getAttribute('data-key') === key) {\n            btn.innerHTML = value;\n          }\n        });\n      } else {\n        KEYBOARDWORDSHIFTRUS[0].forEach(elem => {\n          if (btn.getAttribute('data-key') === elem) {\n            if (btn.innerHTML === btn.innerHTML.toUpperCase()) {\n              btn.innerHTML = btn.innerHTML.toLowerCase();\n            } else {\n              btn.innerHTML = btn.innerHTML.toUpperCase();\n            }\n          }\n        });\n        KEYBOARDWORDSHIFTRUS[3].forEach(elem => {\n          const [key, value] = Object.entries(elem)[0];\n          if (btn.getAttribute('data-key') === key) {\n            btn.innerHTML = value;\n          }\n        });\n      }\n    }\n  });\n});\ndocument.addEventListener('keyup', e => {\n  if (e.code === 'CapsLock') return;\n  buttons.forEach(btn => {\n    if (btn.getAttribute('data-key') === e.code) {\n      btn.classList.remove('keyboard__btn_activ');\n    }\n    if (e.key === 'Shift') {\n      if (localStorage.getItem('language') === 'рус') {\n        KEYBOARDWORDSHIFTRUS[0].forEach(elem => {\n          if (btn.getAttribute('data-key') === elem) {\n            if (btn.innerHTML === btn.innerHTML.toLowerCase()) {\n              btn.innerHTML = btn.innerHTML.toUpperCase();\n            } else {\n              btn.innerHTML = btn.innerHTML.toLowerCase();\n            }\n          }\n        });\n        if (btn.getAttribute('data-key') === 'Slash') {\n          btn.innerHTML = '.';\n        }\n        if (btn.getAttribute('data-key') === 'Backslash') {\n          btn.innerHTML = '\\\\';\n        }\n        KEYBOARDWORDSHIFTRUS[2].forEach(elem => {\n          const [key, value] = Object.entries(elem)[0];\n          if (btn.getAttribute('data-key') === key) {\n            btn.innerHTML = value;\n          }\n        });\n      } else {\n        KEYBOARDWORDSHIFTRUS[0].forEach(elem => {\n          if (btn.getAttribute('data-key') === elem) {\n            if (btn.innerHTML === btn.innerHTML.toLowerCase()) {\n              btn.innerHTML = btn.innerHTML.toUpperCase();\n            } else {\n              btn.innerHTML = btn.innerHTML.toLowerCase();\n            }\n          }\n        });\n        KEYBOARDWORDSHIFTRUS[4].forEach(elem => {\n          const [key, value] = Object.entries(elem)[0];\n          if (btn.getAttribute('data-key') === key) {\n            btn.innerHTML = value;\n          }\n        });\n      }\n    }\n  });\n});\ndocument.addEventListener('keydown', event => {\n  if (event.key === 'ArrowLeft') {\n    textArea.selectionStart--;\n    textArea.selectionEnd--;\n    event.preventDefault();\n  } else if (event.key === 'ArrowRight') {\n    textArea.selectionStart++;\n    textArea.selectionEnd++;\n    event.preventDefault();\n  } else if (event.key === 'ArrowUp') {\n    let currentPos = textArea.selectionStart;\n    let lineStart = textArea.value.lastIndexOf('\\n', currentPos - 2);\n    if (lineStart === -1) {\n      lineStart = 0;\n    }\n    textArea.selectionStart = lineStart;\n    textArea.selectionEnd = lineStart;\n    event.preventDefault();\n  } else if (event.key === 'ArrowDown') {\n    let currentPos = textArea.selectionStart;\n    let lineEnd = textArea.value.indexOf('\\n', currentPos);\n    if (lineEnd === -1) {\n      lineEnd = textArea.value.length;\n    }\n    textArea.selectionStart = lineEnd + 1;\n    textArea.selectionEnd = lineEnd + 1;\n    event.preventDefault();\n  } else {\n    if (event.key === 'Backspace') {\n      let currentPos = textArea.selectionStart;\n      if (currentPos > 0) {\n        let before = textArea.value.substring(0, currentPos - 1);\n        let after = textArea.value.substring(currentPos);\n        textArea.value = before + after;\n        textArea.selectionStart = currentPos - 1;\n        textArea.selectionEnd = currentPos - 1;\n        event.preventDefault();\n      }\n    } else if (event.code === 'CapsLock') {\n      buttons.forEach(btn => {\n        if (off === 1) {\n          KEYBOARDWORD.forEach(item => {\n            if (capsLock.classList.contains('keyboard__btn_activ')) {\n              if (btn.getAttribute('data-key') === Object.keys(item)[0]) {\n                btn.textContent = Object.values(item)[0];\n              }\n            } else {\n              if (btn.getAttribute('data-key') === Object.keys(item)[0]) {\n                btn.textContent = Object.values(item)[0].toUpperCase();\n              }\n            }\n          });\n        } else {\n          KEYBOARDWORDRus.forEach(item => {\n            if (capsLock.classList.contains('keyboard__btn_activ')) {\n              if (btn.getAttribute('data-key') === Object.keys(item)[0]) {\n                btn.textContent = Object.values(item)[0];\n              }\n            } else {\n              if (btn.getAttribute('data-key') === Object.keys(item)[0]) {\n                btn.textContent = Object.values(item)[0].toUpperCase();\n              }\n            }\n          });\n        }\n      });\n      buttons.forEach(btn => {\n        if (event.code === btn.getAttribute('data-key')) {\n          btn.classList.toggle('keyboard__btn_activ');\n          event.preventDefault();\n        }\n      });\n    } else if (event.altKey && event.ctrlKey) {\n      buttons.forEach(btn => {\n        if (capsLock.classList.contains('keyboard__btn_activ')) {\n          if (off === 1) {\n            KEYBOARDWORD.forEach(engWord => {\n              if (btn.getAttribute('data-key') === Object.keys(engWord)[0]) {\n                btn.textContent = Object.values(engWord)[0].toUpperCase();\n              }\n            });\n          } else {\n            KEYBOARDWORDRus.forEach(rusWord => {\n              if (btn.getAttribute('data-key') === Object.keys(rusWord)[0]) {\n                btn.textContent = Object.values(rusWord)[0].toUpperCase();\n              }\n            });\n          }\n        } else {\n          if (off === 1) {\n            KEYBOARDWORD.forEach(engWord => {\n              if (btn.getAttribute('data-key') === Object.keys(engWord)[0]) {\n                btn.textContent = Object.values(engWord)[0];\n              }\n            });\n          } else {\n            KEYBOARDWORDRus.forEach(rusWord => {\n              if (btn.getAttribute('data-key') === Object.keys(rusWord)[0]) {\n                btn.textContent = Object.values(rusWord)[0];\n              }\n            });\n          }\n        }\n      });\n    } else if (event.key === 'Enter') {\n      textArea.value += '\\n';\n      event.preventDefault();\n    } else if (event.key === \"Tab\") {\n      event.preventDefault();\n      let start = textArea.selectionStart;\n      textArea.value = textArea.value.substring(0, start) + \"\\t\";\n      textArea.selectionStart = textArea.selectionEnd = start + 1;\n    } else if (event.key === 'Delete') {\n      let currentPos = textArea.selectionStart;\n      if (currentPos > 0) {\n        let before = textArea.value.substring(0, currentPos);\n        let after = textArea.value.substring(currentPos + 1);\n        textArea.value = before + after;\n        textArea.selectionStart = currentPos;\n        textArea.selectionEnd = currentPos;\n        event.preventDefault();\n      }\n    } else if (event.key === 'Shift' || event.key === 'Alt' || event.key === 'Control' || event.key === 'Meta') {\n      event.preventDefault();\n    } else {\n      buttons.forEach(btn => {\n        if (event.code === btn.getAttribute('data-key')) {\n          textArea.value += btn.textContent;\n          event.preventDefault();\n        }\n      });\n    }\n  }\n  textArea.focus();\n});\nconst exceptions = ['Tab', 'Caps Lock', 'Ctrl', 'ENTER', 'Backspace', ' '];\nkeyboard.addEventListener('click', e => {\n  // console.log(e.target)\n});\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./js/classes.js":
/*!***********************!*\
  !*** ./js/classes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\nclass Button {\n  constructor(width, height) {\n    this.width = `${width}px`, this.height = `${height}px`;\n  }\n}\n\n//# sourceURL=webpack:///./js/classes.js?");

/***/ }),

/***/ "./js/create-dom-element.js":
/*!**********************************!*\
  !*** ./js/create-dom-element.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDomElement\": () => (/* binding */ createDomElement)\n/* harmony export */ });\n/* harmony import */ var _create_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-keyboard */ \"./js/create-keyboard.js\");\n\nconst buttons = (0,_create_keyboard__WEBPACK_IMPORTED_MODULE_0__.createKeyboard)();\nfunction createDomElement() {\n  const wrapper = document.createElement('div');\n  const textarea = document.createElement('div');\n  const keyboard = document.createElement('div');\n  const mainTitle = document.createElement('h1');\n  const textDesc = document.createElement('p');\n  const textLang = document.createElement('p');\n  const textareaItem = document.createElement('textarea');\n  wrapper.className = 'wrapper';\n  textarea.className = 'textarea';\n  keyboard.className = 'keyboard';\n  textareaItem.className = 'textarea__item';\n  mainTitle.className = 'main-title';\n  textDesc.className = 'description';\n  textLang.className = 'language';\n  mainTitle.innerText = 'Виртуальная клавиатура';\n  textDesc.innerText = 'Клавиатура создана в операционной системе Windows';\n  textLang.innerText = 'Для переключения языка комбинация: ctrl + alt';\n  textareaItem.setAttribute('autofocus', '');\n  textarea.append(textareaItem);\n  buttons.forEach(button => {\n    keyboard.append(button);\n  });\n  wrapper.append(textarea);\n  wrapper.append(keyboard);\n  wrapper.append(textDesc);\n  wrapper.append(textLang);\n  const firstChildWrapper = wrapper.firstChild;\n  wrapper.insertBefore(mainTitle, firstChildWrapper);\n  return wrapper;\n}\n\n\n//# sourceURL=webpack:///./js/create-dom-element.js?");

/***/ }),

/***/ "./js/create-keyboard.js":
/*!*******************************!*\
  !*** ./js/create-keyboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KEYBOARDDATA\": () => (/* binding */ KEYBOARDDATA),\n/* harmony export */   \"KEYBOARDDATARUS\": () => (/* binding */ KEYBOARDDATARUS),\n/* harmony export */   \"createKeyboard\": () => (/* binding */ createKeyboard)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./js/classes.js\");\n/* harmony import */ var _assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/svg/1.svg */ \"./assets/svg/1.svg\");\n/* harmony import */ var _assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst buttonSize20 = new _classes__WEBPACK_IMPORTED_MODULE_0__.Button(50, 50);\nconst KEYBOARDDATA = [{\n  Backquote: '`'\n}, {\n  Digit1: '1'\n}, {\n  Digit2: '2'\n}, {\n  Digit3: '3'\n}, {\n  Digit4: '4'\n}, {\n  Digit5: '5'\n}, {\n  Digit6: '6'\n}, {\n  Digit7: '7'\n}, {\n  Digit8: '8'\n}, {\n  Digit9: '9'\n}, {\n  Digit0: '0'\n}, {\n  Minus: '-'\n}, {\n  Equal: '='\n}, {\n  Backspace: 'Backspace'\n}, {\n  Tab: 'Tab'\n}, {\n  KeyQ: 'q'\n}, {\n  KeyW: 'w'\n}, {\n  KeyE: 'e'\n}, {\n  KeyR: 'r'\n}, {\n  KeyT: 't'\n}, {\n  KeyY: 'y'\n}, {\n  KeyU: 'u'\n}, {\n  KeyI: 'i'\n}, {\n  KeyO: 'o'\n}, {\n  KeyP: 'p'\n}, {\n  BracketLeft: '['\n}, {\n  BracketRight: ']'\n}, {\n  Backslash: '\\\\'\n}, {\n  Delete: 'DEL'\n}, {\n  CapsLock: 'Caps Lock'\n}, {\n  KeyA: 'a'\n}, {\n  KeyS: 's'\n}, {\n  KeyD: 'd'\n}, {\n  KeyF: 'f'\n}, {\n  KeyG: 'g'\n}, {\n  KeyH: 'h'\n}, {\n  KeyJ: 'j'\n}, {\n  KeyK: 'k'\n}, {\n  KeyL: 'l'\n}, {\n  Semicolon: ';'\n}, {\n  Quote: \"'\"\n}, {\n  Enter: 'ENTER'\n}, {\n  ShiftLeft: 'Shift'\n}, {\n  Backslash: '\\\\'\n}, {\n  KeyZ: 'z'\n}, {\n  KeyX: 'x'\n}, {\n  KeyC: 'c'\n}, {\n  KeyV: 'v'\n}, {\n  KeyB: 'b'\n}, {\n  KeyN: 'n'\n}, {\n  KeyM: 'm'\n}, {\n  Period: '.'\n}, {\n  Comma: ','\n}, {\n  Slash: '/'\n}, {\n  ArrowUp: (_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default())\n}, {\n  ShiftRight: 'Shift'\n}, {\n  ControlLeft: 'Ctrl'\n}, {\n  MetaLeft: 'Win'\n}, {\n  AltLeft: 'Alt'\n}, {\n  Space: ' '\n}, {\n  AltRight: 'Alt'\n}, {\n  ControlRight: 'Ctrl'\n}, {\n  ArrowLeft: (_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default())\n}, {\n  ArrowDown: (_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default())\n}, {\n  ArrowRight: (_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default())\n}];\nconst KEYBOARDDATARUS = [{\n  Backquote: 'ё'\n}, {\n  Digit1: '1'\n}, {\n  Digit2: '2'\n}, {\n  Digit3: '3'\n}, {\n  Digit4: '4'\n}, {\n  Digit5: '5'\n}, {\n  Digit6: '6'\n}, {\n  Digit7: '7'\n}, {\n  Digit8: '8'\n}, {\n  Digit9: '9'\n}, {\n  Digit0: '0'\n}, {\n  Minus: '-'\n}, {\n  Equal: '='\n}, {\n  Backspace: 'Backspace'\n}, {\n  Tab: 'Tab'\n}, {\n  KeyQ: 'й'\n}, {\n  KeyW: 'ц'\n}, {\n  KeyE: 'у'\n}, {\n  KeyR: 'к'\n}, {\n  KeyT: 'е'\n}, {\n  KeyY: 'н'\n}, {\n  KeyU: 'г'\n}, {\n  KeyI: 'ш'\n}, {\n  KeyO: 'щ'\n}, {\n  KeyP: 'з'\n}, {\n  BracketLeft: 'х'\n}, {\n  BracketRight: 'ъ'\n}, {\n  Backslash: '\\\\'\n}, {\n  Delete: 'DEL'\n}, {\n  CapsLock: 'Caps Lock'\n}, {\n  KeyA: 'ф'\n}, {\n  KeyS: 'ы'\n}, {\n  KeyD: 'в'\n}, {\n  KeyF: 'а'\n}, {\n  KeyG: 'п'\n}, {\n  KeyH: 'р'\n}, {\n  KeyJ: 'о'\n}, {\n  KeyK: 'л'\n}, {\n  KeyL: 'д'\n}, {\n  Semicolon: 'ж'\n}, {\n  Quote: \"э\"\n}, {\n  Enter: 'ENTER'\n}, {\n  ShiftLeft: 'Shift'\n}, {\n  Backslash: '\\\\'\n}, {\n  KeyZ: 'я'\n}, {\n  KeyX: 'ч'\n}, {\n  KeyC: 'с'\n}, {\n  KeyV: 'м'\n}, {\n  KeyB: 'и'\n}, {\n  KeyN: 'т'\n}, {\n  KeyM: 'ь'\n}, {\n  Period: 'б'\n}, {\n  Comma: 'ю'\n}, {\n  Slash: '.'\n}, {\n  ArrowUp: (_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default())\n}, {\n  ShiftRight: 'Shift'\n}, {\n  ControlLeft: 'Ctrl'\n}, {\n  MetaLeft: 'Win'\n}, {\n  AltLeft: 'Alt'\n}, {\n  Space: ' '\n}, {\n  AltRight: 'Alt'\n}, {\n  ControlRight: 'Ctrl'\n}, {\n  ArrowLeft: (_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default())\n}, {\n  ArrowDown: (_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default())\n}, {\n  ArrowRight: (_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default())\n}];\nfunction createKeyboard() {\n  let buttonsArr = [];\n  const validArrForColor = ['`', 'ё', 'Ё', 'Tab', 'Caps Lock', 'Shift', 'Ctrl', 'ENTER', 'DEL', 'Win', 'Backspace', 'Alt'];\n  const validArrForSize = ['Tab', 'Caps Lock', 'Ctrl', 'ENTER', 'Backspace', ' '];\n  for (let i = 0; i < KEYBOARDDATA.length; i++) {\n    const button = document.createElement('button');\n    if (localStorage.getItem('language') === 'eng') {\n      const [key, value] = Object.entries(KEYBOARDDATA[i])[0];\n      button.innerHTML = value;\n      button.setAttribute('data-key', key);\n    } else {\n      const [key, value] = Object.entries(KEYBOARDDATARUS[i])[0];\n      button.innerHTML = value;\n      button.setAttribute('data-key', key);\n    }\n    button.className = 'keyboard__btn';\n    let shadedButtons = buttonsArr.filter(btn => {\n      return validArrForColor.some(value => {\n        return btn.innerHTML.includes(value);\n      });\n    });\n    shadedButtons.forEach(button => {\n      button.className = 'keyboard__btn keyboard__btn_color';\n    });\n    let ordinaryButtons = buttonsArr.filter(btn => {\n      let textContent = btn.innerHTML;\n      return !validArrForSize.includes(textContent);\n    });\n    ordinaryButtons.forEach(btn => {\n      btn.style.width = buttonSize20.width;\n      btn.style.height = buttonSize20.height;\n    });\n    if (button.textContent === 'Backspace' || button.textContent === 'Caps Lock') {\n      button.style.width = '115px';\n    }\n    if (button.textContent === 'Tab') {\n      button.style.width = '60px';\n    }\n    if (button.textContent === 'ENTER') {\n      button.style.width = '107px';\n    }\n    for (let button of buttonsArr) {\n      if (button.innerText === 'Shift') {\n        button.style.width = '115px';\n        break;\n      }\n    }\n    if (button.textContent === 'Ctrl') {\n      button.style.width = '82px';\n    }\n    if (button.innerHTML === (_assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1___default())) {\n      button.style.width = '50px';\n    }\n    if (button.textContent === ' ') {\n      button.style.width = '335px';\n    }\n    if (button.getAttribute('data-key') === 'ArrowLeft') {\n      button.style.transform = 'rotate(-90deg)';\n    }\n    if (button.getAttribute('data-key') === 'ArrowRight') {\n      button.style.transform = 'rotate(90deg)';\n    }\n    if (button.getAttribute('data-key') === 'ArrowDown') {\n      button.style.transform = 'rotate(180deg)';\n    }\n    buttonsArr.push(button);\n  }\n  return buttonsArr;\n}\n\n\n//# sourceURL=webpack:///./js/create-keyboard.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/button/button.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/button/button.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".keyboard {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-wrap: wrap;\\r\\n\\tcolumn-gap: 7px;\\r\\n\\trow-gap: 10px;\\r\\n\\tbackground-color: darkgray;\\r\\n  padding: 5px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n#Capa_1 {\\r\\n\\twidth: 10px;\\r\\n\\theight: 10px;\\r\\n}\\r\\n.keyboard__btn {\\r\\n\\tbackground-color: gray;\\r\\n\\tcolor: white;\\r\\n\\tborder-radius: 5px;\\r\\n\\tcursor: pointer;\\r\\n\\ttransition: all 0.2s ease-out;\\r\\n\\tbox-shadow: inset 1px 1px 0px;\\r\\n}\\r\\n.keyboard__btn:hover {\\r\\n\\tbackground-color: blue;\\r\\n}\\r\\n.keyboard__btn_color {\\r\\n\\tbackground-color: black;\\r\\n\\tcolor: rgb(181, 190, 187);\\r\\n}\\r\\n.keyboard__btn_activ {\\r\\n\\tbackground-color: blue;\\r\\n\\tborder-radius: 25px;\\r\\n\\t\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/button/button.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/common/common.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/common/common.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\nbody {\\r\\n\\tfont-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n.wrapper {\\r\\n\\twidth: 858px;\\r\\n\\tmargin: 0 auto;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\trow-gap: 10px;\\r\\n\\talign-items: center;\\r\\n}\\r\\n.keyboard {\\r\\n\\twidth: 100%;\\r\\n}\\r\\n.textarea {\\r\\n\\twidth: 100%;\\r\\n}\\r\\n.textarea__item {\\r\\n\\twidth: 100%;\\r\\n\\theight: 100px;\\r\\n\\tbox-sizing: border-box;\\r\\n}\\r\\np {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/common/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./common/common.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/common/common.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./button/button.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/button/button.css\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_common_common_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_button_button_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/svg/1.svg":
/*!**************************!*\
  !*** ./assets/svg/1.svg ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"Capa_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 16 16\\\" style=\\\"enable-background:new 0 0 16 16;\\\" xml:space=\\\"preserve\\\"><g><polygon style=\\\"fill:#030104;\\\" points=\\\"8,0 0,16 16,16 \\\"></polygon></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/1.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;