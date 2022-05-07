const selectCase = (key, state) => {
  if (state.upperCase) return key.toUpperCase();
  return key;
};

const arrEng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '[', ']', ';', '\'', ',', '.', '`', '/'];
const arrRu = ['ф', 'и', 'с', 'в', 'у', 'а', 'п', 'р', 'ш', 'о', 'л', 'д', 'ь', 'т', 'щ', 'з', 'й', 'к', 'ы', 'е', 'г', 'м', 'ц', 'ч', 'н', 'я', 'х', 'ъ', 'ж', 'э', 'б', 'ю', 'ё', '.'];

const toRusLang = arrEng.reduce((acc, c, i) => ({ ...acc, [c]: arrRu[i] }), {});
const toEngLang = arrRu.reduce((acc, c, i) => ({ ...acc, [c]: arrEng[i] }), {});
console.log(toRusLang, toEngLang);

const map = {
  KeyQ: (state) => {
    const key = state.lang === 'eng' ? 'q' : 'й';
    return selectCase(key, state);
  },
  KeyW: (state) => {
    const key = state.lang === 'eng' ? 'w' : 'ц';
    return selectCase(key, state);
  },
  KeyE: (state) => {
    const key = state.lang === 'eng' ? 'e' : 'у';
    return selectCase(key, state);
  },
  KeyR: (state) => {
    const key = state.lang === 'eng' ? 'r' : 'к';
    return selectCase(key, state);
  },
  KeyT: (state) => {
    const key = state.lang === 'eng' ? 't' : 'е';
    return selectCase(key, state);
  },
  KeyY: (state) => {
    const key = state.lang === 'eng' ? 'y' : 'н';
    return selectCase(key, state);
  },
  KeyU: (state) => {
    const key = state.lang === 'eng' ? 'u' : 'г';
    return selectCase(key, state);
  },
  KeyI: (state) => {
    const key = state.lang === 'eng' ? 'i' : 'ш';
    return selectCase(key, state);
  },
  KeyO: (state) => {
    const key = state.lang === 'eng' ? 'o' : 'щ';
    return selectCase(key, state);
  },
  KeyP: (state) => {
    const key = state.lang === 'eng' ? 'p' : 'з';
    return selectCase(key, state);
  },
  KeyA: (state) => {
    const key = state.lang === 'eng' ? 'a' : 'ф';
    return selectCase(key, state);
  },
  KeyS: (state) => {
    const key = state.lang === 'eng' ? 's' : 'ы';
    return selectCase(key, state);
  },
  KeyD: (state) => {
    const key = state.lang === 'eng' ? 'd' : 'в';
    return selectCase(key, state);
  },
  KeyF: (state) => {
    const key = state.lang === 'eng' ? 'f' : 'а';
    return selectCase(key, state);
  },
  KeyG: (state) => {
    const key = state.lang === 'eng' ? 'g' : 'п';
    return selectCase(key, state);
  },
  KeyH: (state) => {
    const key = state.lang === 'eng' ? 'h' : 'р';
    return selectCase(key, state);
  },
  KeyJ: (state) => {
    const key = state.lang === 'eng' ? 'j' : 'о';
    return selectCase(key, state);
  },
  KeyK: (state) => {
    const key = state.lang === 'eng' ? 'k' : 'л';
    return selectCase(key, state);
  },
  KeyL: (state) => {
    const key = state.lang === 'eng' ? 'l' : 'д';
    return selectCase(key, state);
  },
  KeyZ: (state) => {
    const key = state.lang === 'eng' ? 'z' : 'я';
    return selectCase(key, state);
  },
  KeyX: (state) => {
    const key = state.lang === 'eng' ? 'x' : 'ч';
    return selectCase(key, state);
  },
  KeyC: (state) => {
    const key = state.lang === 'eng' ? 'c' : 'с';
    return selectCase(key, state);
  },
  KeyV: (state) => {
    const key = state.lang === 'eng' ? 'v' : 'м';
    return selectCase(key, state);
  },
  KeyB: (state) => {
    const key = state.lang === 'eng' ? 'b' : 'и';
    return selectCase(key, state);
  },
  KeyN: (state) => {
    const key = state.lang === 'eng' ? 'n' : 'т';
    return selectCase(key, state);
  },
  KeyM: (state) => {
    const key = state.lang === 'eng' ? 'm' : 'ь';
    return selectCase(key, state);
  },
  Backquote: (state) => {
    const key = state.lang === 'eng' ? '`' : 'ё`';
    return selectCase(key, state);
  },
  Digit1: (state) => {
    const key = 1;
    return key;
  },
  Digit2: (state) => {
    const key = 2;
    return key;
  },
  Digit3: (state) => {
    const key = 3;
    return key;
  },
  Digit4: () => 4,
  Digit5: () => 5,
  Digit6: () => 6,
  Digit7: () => 7,
  Digit8: () => 8,
  Digit9: () => 9,
  Digit0: () => 0,
  Minus: () => '-',
  Equal: () => '=',
  Tab: () => '\t',
  BracketLeft: (state) => {
    const key = state.lang === 'eng' ? '[' : 'х';
    return selectCase(key, state);
  },
  BracketRight: (state) => {
    const key = state.lang === 'eng' ? ']' : 'ъ';
    return selectCase(key, state);
  },
  Backslash: () => '\\',
  Semicolon: (state) => {
    const key = state.lang === 'eng' ? ';' : 'ж';
    return selectCase(key, state);
  },
  Quote: (state) => {
    const key = state.lang === 'eng' ? '\'' : 'э';
    return selectCase(key, state);
  },
  Comma: (state) => {
    const key = state.lang === 'eng' ? ',' : 'б';
    return selectCase(key, state);
  },
  Period: (state) => {
    const key = state.lang === 'eng' ? '.' : 'ю';
    return selectCase(key, state);
  },
  Slash: (state) => {
    const key = state.lang === 'eng' ? '/' : '.';
    return selectCase(key, state);
  },
  Enter: () => '\n',
  Space: () => ' ',
  AltLeft: () => 'AltLeft',
  AltRight: () => 'AltRight',
  ShiftLeft: () => 'ShiftLeft',
  ShiftRight: () => 'ShiftRight',
};

const keyboardBuild = () => {
  const keyboard = `<div class="keyboard--row">
  <div class="keyboard--btn" data-key="alphabet" id="backquote">\`</div>
  <div class="keyboard--btn" id="1">1</div>
  <div class="keyboard--btn" id="2">2</div>
  <div class="keyboard--btn" id="3">3</div>
  <div class="keyboard--btn" id="4">4</div>
  <div class="keyboard--btn" id="5">5</div>
  <div class="keyboard--btn" id="6">6</div>
  <div class="keyboard--btn" id="7">7</div>
  <div class="keyboard--btn" id="8">8</div>
  <div class="keyboard--btn" id="9">9</div>
  <div class="keyboard--btn" id="0">0</div>
  <div class="keyboard--btn" id="minus">-</div>
  <div class="keyboard--btn" id="equal">=</div>
  <div class="keyboard--btn" id="backspace">backspase</div>
</div>
<div class="keyboard--row">
  <div class="keyboard--btn" id="Tab">tab</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyQ">q</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyW">w</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyE">e</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyR">r</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyT">t</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyY">y</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyU">u</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyI">i</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyO">o</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyP">p</div>
  <div class="keyboard--btn"data-key="alphabet" id="BracketLeft">[</div>
  <div class="keyboard--btn"data-key="alphabet" id="BracketRight">]</div>
  <div class="keyboard--btn" id="Backslash">\\</div>
</div>
<div class="keyboard--row">
  <div class="keyboard--btn" id="Caps">Caps Lock</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyA">a</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyS">s</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyD">d</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyF">f</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyG">g</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyH">h</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyJ">j</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyK">k</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyL">l</div>
  <div class="keyboard--btn" data-key="alphabet" id="Semicolon">;</div>
  <div class="keyboard--btn" data-key="alphabet" id="Quote">'</div>
  <div class="keyboard--btn" id="Enter">enter</div>
</div>
<div class="keyboard--row">
  <div class="keyboard--btn" id="ShiftLeft">shift</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyZ">z</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyX">x</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyC">c</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyV">v</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyB">b</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyN">n</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyM">m</div>
  <div class="keyboard--btn" data-key="alphabet" id="Comma">,</div>
  <div class="keyboard--btn" data-key="alphabet" id="Period">.</div>
  <div class="keyboard--btn" data-key="alphabet" id="Slash">/</div>
  <div class="keyboard--btn" id="arrow-up">↑</div>
  <div class="keyboard--btn" id="ShiftRight">shift</div>
</div>
<div class="keyboard--row">
  <div class="keyboard--btn" id="CtrlLeft">ctrl</div>
  <div class="keyboard--btn" id="Win">win</div>
  <div class="keyboard--btn" id="AltLeft">alt</div>
  <div class="keyboard--btn" id="Space"> </div>
  <div class="keyboard--btn" id="AltRight">alt</div>
  <div class="keyboard--btn" id="arrow-left">←</div>
  <div class="keyboard--btn" id="arrow-bot">↓</div>
  <div class="keyboard--btn" id="arrow-right">→</div>
</div>`;
  return keyboard;
};

export default () => {
  const state = {
    lang: 'eng',
    toUpper: 'false',
    keyPressed: [],
  };
  const specialKeys = ['AltLeft', 'AltRight', 'ShiftLeft', 'ShiftRight', 'Tab'];
  const keybordWrap = document.createElement('div');
  keybordWrap.className = 'keyboard-wrapper';
  const keyboard = keyboardBuild();
  keybordWrap.innerHTML = keyboard;

  const output = document.querySelector('.output');

  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    const { code } = e;
    console.log(code);
    state.keyPressed.push(code);
    if (state.keyPressed.includes('AltLeft') && state.keyPressed.includes('ShiftLeft')) {
      state.lang = state.lang === 'eng' ? 'ru' : 'eng';
      const alphabet = Array.from(document.querySelectorAll('[data-key="alphabet"]'));
      alphabet.forEach((key) => {
        if (state.lang === 'ru') {
          // eslint-disable-next-line no-param-reassign
          key.textContent = toRusLang[key.textContent];
        } else {
          // eslint-disable-next-line no-param-reassign
          key.textContent = toEngLang[key.textContent];
        }
      });
    }
    const key = map[code](state);
    output.value = specialKeys.includes(key) ? output.value : output.value + key;
    document.querySelector(`#${code}`).classList.add('keyboard--btn__active');
  });
  document.addEventListener('keyup', (e) => {
    e.preventDefault();
    const { code } = e;
    state.keyPressed = state.keyPressed.filter((k) => k !== code);
    const key = document.querySelector(`#${code}`);
    if (key) key.classList.remove('keyboard--btn__active');
  });

  keybordWrap.addEventListener('mousedown', ({ target: { id } }) => {
    if (!id) return;
    const key = map[id](state);
    output.value = specialKeys.includes(key) ? output.value : output.value + key;
    document.querySelector(`#${id}`).classList.add('keyboard--btn__active');
  });
  document.addEventListener('mouseup', () => {
    document.querySelector('.keyboard--btn__active').classList.remove('keyboard--btn__active');
  });

  return keybordWrap;
};
