import Button from './classes';
import svg from '../assets/svg/1.svg';

const buttonSize20 = new Button(50, 50);

const KEYBOARDDATA = [{ Backquote: '`' }, { Digit1: '1' }, { Digit2: '2' }, { Digit3: '3' }, { Digit4: '4' }, { Digit5: '5' },
  { Digit6: '6' }, { Digit7: '7' }, { Digit8: '8' }, { Digit9: '9' }, { Digit0: '0' }, { Minus: '-' }, { Equal: '=' },
  { Backspace: 'Backspace' }, { Tab: 'Tab' }, { KeyQ: 'q' }, { KeyW: 'w' }, { KeyE: 'e' }, { KeyR: 'r' }, { KeyT: 't' },
  { KeyY: 'y' }, { KeyU: 'u' }, { KeyI: 'i' }, { KeyO: 'o' }, { KeyP: 'p' }, { BracketLeft: '[' }, { BracketRight: ']' },
  { Backslash: '\\' }, { Delete: 'DEL' }, { CapsLock: 'Caps Lock' }, { KeyA: 'a' }, { KeyS: 's' }, { KeyD: 'd' },
  { KeyF: 'f' }, { KeyG: 'g' }, { KeyH: 'h' }, { KeyJ: 'j' }, { KeyK: 'k' }, { KeyL: 'l' }, { Semicolon: ';' },
  { Quote: "'" }, { Enter: 'ENTER' }, { ShiftLeft: 'Shift' }, { Backslash: '\\' }, { KeyZ: 'z' }, { KeyX: 'x' },
  { KeyC: 'c' }, { KeyV: 'v' }, { KeyB: 'b' }, { KeyN: 'n' }, { KeyM: 'm' }, { Period: '.' }, { Comma: ',' }, { Slash: '/' },
  { ArrowUp: svg }, { ShiftRight: 'Shift' }, { ControlLeft: 'Ctrl' }, { MetaLeft: 'Win' }, { AltLeft: 'Alt' },
  { Space: ' ' }, { AltRight: 'Alt' }, { ControlRight: 'Ctrl' }, { ArrowLeft: svg }, { ArrowDown: svg }, { ArrowRight: svg },
];

const KEYBOARDDATARUS = [{ Backquote: 'ё' }, { Digit1: '1' }, { Digit2: '2' }, { Digit3: '3' }, { Digit4: '4' }, { Digit5: '5' },
  { Digit6: '6' }, { Digit7: '7' }, { Digit8: '8' }, { Digit9: '9' }, { Digit0: '0' }, { Minus: '-' }, { Equal: '=' },
  { Backspace: 'Backspace' }, { Tab: 'Tab' }, { KeyQ: 'й' }, { KeyW: 'ц' }, { KeyE: 'у' }, { KeyR: 'к' }, { KeyT: 'е' },
  { KeyY: 'н' }, { KeyU: 'г' }, { KeyI: 'ш' }, { KeyO: 'щ' }, { KeyP: 'з' }, { BracketLeft: 'х' }, { BracketRight: 'ъ' },
  { Backslash: '\\' }, { Delete: 'DEL' }, { CapsLock: 'Caps Lock' }, { KeyA: 'ф' }, { KeyS: 'ы' }, { KeyD: 'в' },
  { KeyF: 'а' }, { KeyG: 'п' }, { KeyH: 'р' }, { KeyJ: 'о' }, { KeyK: 'л' }, { KeyL: 'д' }, { Semicolon: 'ж' },
  { Quote: 'э' }, { Enter: 'ENTER' }, { ShiftLeft: 'Shift' }, { Backslash: '\\' }, { KeyZ: 'я' }, { KeyX: 'ч' },
  { KeyC: 'с' }, { KeyV: 'м' }, { KeyB: 'и' }, { KeyN: 'т' }, { KeyM: 'ь' }, { Period: 'б' }, { Comma: 'ю' }, { Slash: '.' },
  { ArrowUp: svg }, { ShiftRight: 'Shift' }, { ControlLeft: 'Ctrl' }, { MetaLeft: 'Win' }, { AltLeft: 'Alt' },
  { Space: ' ' }, { AltRight: 'Alt' }, { ControlRight: 'Ctrl' }, { ArrowLeft: svg }, { ArrowDown: svg }, { ArrowRight: svg },
];

function createKeyboard() {
  const buttonsArr = [];
  const validArrForColor = ['`', 'ё', 'Ё', 'Tab', 'Caps Lock', 'Shift', 'Ctrl', 'ENTER', 'DEL', 'Win', 'Backspace', 'Alt'];
  const validArrForSize = ['Tab', 'Caps Lock', 'Ctrl', 'ENTER', 'Backspace', ' '];

  for (let i = 0; i < KEYBOARDDATA.length; i += 1) {
    const button = document.createElement('button');

    if (localStorage.getItem('language') === 'eng') {
      const [key, value] = Object.entries(KEYBOARDDATA[i])[0];
      button.innerHTML = value;
      button.setAttribute('data-key', key);
    } else {
      const [key, value] = Object.entries(KEYBOARDDATARUS[i])[0];
      button.innerHTML = value;
      button.setAttribute('data-key', key);
    }

    button.className = 'keyboard__btn';

    // eslint-disable-next-line max-len
    const shadedButtons = buttonsArr.filter((btn) => validArrForColor.some((value) => btn.innerHTML.includes(value)));

    shadedButtons.forEach((btn) => {
      const buttonShaded = btn;
      buttonShaded.className = 'keyboard__btn keyboard__btn_color';
    });

    const ordinaryButtons = buttonsArr.filter((btn) => {
      const textContent = btn.innerHTML;
      return !validArrForSize.includes(textContent);
    });
    ordinaryButtons.forEach((btn) => {
      const buttonOrdinary = btn;
      buttonOrdinary.style.width = buttonSize20.width;
      buttonOrdinary.style.height = buttonSize20.height;
    });
    if (button.textContent === 'Backspace' || button.textContent === 'Caps Lock') {
      button.style.width = '115px';
    }
    if (button.textContent === 'Tab') {
      button.style.width = '60px';
    }
    if (button.textContent === 'ENTER') {
      button.style.width = '107px';
    }
    const shiftButton = buttonsArr.find((btn) => btn.innerText === 'Shift');
    if (shiftButton) {
      shiftButton.style.width = '115px';
    }

    if (button.textContent === 'Ctrl') {
      button.style.width = '82px';
    }
    if (button.innerHTML === svg) {
      button.style.width = '50px';
    }
    if (button.textContent === ' ') {
      button.style.width = '335px';
    }
    if (button.getAttribute('data-key') === 'ArrowLeft') {
      button.style.transform = 'rotate(-90deg)';
    }
    if (button.getAttribute('data-key') === 'ArrowRight') {
      button.style.transform = 'rotate(90deg)';
    }
    if (button.getAttribute('data-key') === 'ArrowDown') {
      button.style.transform = 'rotate(180deg)';
    }

    buttonsArr.push(button);
  }

  return buttonsArr;
}

export default createKeyboard;
