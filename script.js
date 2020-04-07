const keyboradContainer = document.createElement('div');
keyboradContainer.classList = 'keyboard__container';

document.body.insertAdjacentElement('afterbegin', keyboradContainer);
let lang = localStorage.getItem('lang');

const keyboardObject = {
    eng: [
        [
            ['`', '~'],
            ['1', '!'],
            ['2', '@'],
            ['3', '#'],
            ['4', '$'],
            ['5', '%'],
            ['6', '^'],
            ['7', '&'],
            ['8', '*'],
            ['9', '('],
            ['0', ')'],
            ['-', '_'],
            ['=', '+'],
            ['backspace', 'backspace']
        ],
        [
            ['Tab', 'Tab'],
            ['q', 'Q'],
            ['w', 'W'],
            ['e', 'E'],
            ['r', 'R'],
            ['t', 'T'],
            ['y', 'Y'],
            ['u', 'U'],
            ['i', 'I'],
            ['o', 'O'],
            ['p', 'P'],
            ['[', '{'],
            [']', '}'],
            ['\\', '|'],
            ['del', 'del']
        ],
        [
            ['capslock', 'capslock'],
            ['a', 'A'],
            ['s', 'S'],
            ['d', 'D'],
            ['f', 'F'],
            ['g', 'G'],
            ['h', 'H'],
            ['j', 'J'],
            ['k', 'K'],
            ['l', 'L'],
            [';', ':'],
            ['\'', '"'],
            ['enter ↵', 'enter ↵']
        ],
        [
            ['shift   ⇧', 'shift   ⇧'],
            ['z', 'Z'],
            ['x', 'X'],
            ['c', 'C'],
            ['v', 'V'],
            ['b', 'B'],
            ['n', 'N'],
            ['m', 'M'],
            [',', '<'],
            ['.', '>'],
            ['/', '?'],
            ['shift   ⇧', 'shift   ⇧'],
            ['▲', '▲']
        ],
        [
            ['ctrl', 'ctrl'],
            ['alt', 'alt'],
            ['', ''],
            ['alt', 'alt'],
            ['◄', '◄'],
            ['▼', '▼'],
            ['►', '►'],
            ['ctrl', 'ctrl']
        ]
    ],
    rus: [
        [
            ['ё', 'Ё'],
            ['1', '!'],
            ['2', '"'],
            ['3', '№'],
            ['4', ';'],
            ['5', '%'],
            ['6', ':'],
            ['7', '?'],
            ['8', '*'],
            ['9', '('],
            ['0', ')'],
            ['-', '_'],
            ['=', '+'],
            ['backspace', 'backspace']
        ],
        [
            ['Tab', 'Tab'],
            ['й', 'Й'],
            ['ц', 'Ц'],
            ['у', 'У'],
            ['к', 'К'],
            ['е', 'Е'],
            ['н', 'Н'],
            ['г', 'Г'],
            ['ш', 'Ш'],
            ['щ', 'Щ'],
            ['з', 'З'],
            ['х', 'Х'],
            ['ъ', 'Ъ'],
            ['\\', '/'],
            ['del', 'del']
        ],
        [
            ['capslock', 'capslock'],
            ['ф', 'Ф'],
            ['ы', 'Ы'],
            ['в', 'В'],
            ['а', 'А'],
            ['п', 'П'],
            ['р', 'Р'],
            ['о', 'О'],
            ['л', 'Л'],
            ['д', 'Д'],
            ['ж', 'Ж'],
            ['э', 'Э'],
            ['enter ↵', 'enter ↵']
        ],
        [
            ['shift   ⇧', 'shift   ⇧'],
            ['я', 'Я'],
            ['ч', 'Ч'],
            ['с', 'С'],
            ['м', 'М'],
            ['и', 'И'],
            ['т', 'Т'],
            ['ь', 'Ь'],
            ['б', 'Б'],
            ['ю', 'Ю'],
            ['.', ','],
            ['shift   ⇧', 'shift   ⇧'],
            ['▲', '▲']
        ],
        [
            ['ctrl', 'ctrl'],
            ['alt', 'alt'],
            ['', ''],
            ['alt', 'alt'],
            ['◄', '◄'],
            ['▼', '▼'],
            ['►', '►'],
            ['ctrl', 'ctrl']
        ]
    ],
    keysName: [
        ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
        ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'BackLash', 'Delete'],
        ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semilicon', 'Quote', 'Enter'],
        ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
        ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
    ],

};
const getKeys = (keys, index) => keys.reduce((acc, key, idx) => acc + `
<div class="key ${key}">
<span class="rus${lang === 'rus' ? '' : ' hidden'}">
    <span class="keyDown">${keyboardObject.rus[index][idx][0]}</span>
    <span class="keyUp hidden">${keyboardObject.rus[index][idx][1]}</span>
</span>
<span class="eng${lang !== 'rus' ? '' : ' hidden'}">
    <span class="keyDown">${keyboardObject.eng[index][idx][0]}</span>
    <span class="keyUp hidden">${keyboardObject.eng[index][idx][1]}</span>
</span>
</div>`, '');

const getkeyboardRow = (keyboardRow) => keyboardRow.reduce((acc, row, index) => acc + `<div class="row">${getKeys(row,index)}</div>`, '');
const keyboardTemplate = `<textarea class="textarea" id="textarea" rows="5" cols="50"></textarea>
<div class="keyboard" id = "keyboard">${getkeyboardRow(keyboardObject.keysName)}</div>`;

keyboradContainer.innerHTML = keyboardTemplate;


const textValue = document.getElementById('textarea');
const keyboard = document.querySelector('#keyboard');
const englishLangauge = document.querySelectorAll('.eng > span');
const rusLangauge = document.querySelectorAll('.rus > span');
const language = document.querySelectorAll('.key > span');
const shift = document.querySelector('.ShiftLeft')
const capslock = document.querySelector('.CapsLock');
const arrayKey = ['Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ControlLeft', 'Delete', 'Enter', 'ShiftRight', 'ArrowUp', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

