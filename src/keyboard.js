const selectCase = (key, state) => {
  if (state.upperCase) return key.toUpperCase();
  return key;
};

const ARR_ENG = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '[', ']', ';', '\'', ',', '.', '`', '/'];
const ARR_RU = ['ф', 'и', 'с', 'в', 'у', 'а', 'п', 'р', 'ш', 'о', 'л', 'д', 'ь', 'т', 'щ', 'з', 'й', 'к', 'ы', 'е', 'г', 'м', 'ц', 'ч', 'н', 'я', 'х', 'ъ', 'ж', 'э', 'б', 'ю', 'ё', '.'];

const selectKeyLang = (lang, key) => (lang === 'eng' ? key : ARR_RU[ARR_ENG.indexOf(key)]);

const toRusLang = ARR_ENG.reduce((acc, c, i) => ({ ...acc, [c]: ARR_RU[i] }), {});
const toEngLang = ARR_RU.reduce((acc, c, i) => ({ ...acc, [c]: ARR_ENG[i] }), {});

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
    if (state.lang === 'ru') return selectCase('ё', state);
    return state.upperCase ? '~' : '`';
  },
  Digit1: (state) => (state.upperCase ? '!' : 1),
  Digit2: (state) => {
    const key = state.lang === 'eng' ? '@' : '"';
    return state.upperCase ? key : 2;
  },
  Digit3: (state) => {
    const key = state.lang === 'eng' ? '#' : '№';
    return state.upperCase ? key : 3;
  },
  Digit4: (state) => {
    const key = state.lang === 'eng' ? '$' : ';';
    return state.upperCase ? key : 4;
  },
  Digit5: (state) => (state.upperCase ? '%' : 5),
  Digit6: (state) => {
    const key = state.lang === 'eng' ? '^' : ':';
    return state.upperCase ? key : 6;
  },
  Digit7: (state) => {
    const key = state.lang === 'eng' ? '&' : '?';
    return state.upperCase ? key : 7;
  },
  Digit8: (state) => (state.upperCase ? '*' : 8),
  Digit9: (state) => (state.upperCase ? '(' : 9),
  Digit0: (state) => (state.upperCase ? ')' : 0),
  Minus: (state) => (state.upperCase ? '_' : '-'),
  Equal: (state) => (state.upperCase ? '+' : '='),
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
  Space: () => ' ',
  AltLeft: () => 'AltLeft',
  AltRight: () => 'AltRight',
  ShiftLeft: () => 'ShiftLeft',
  ShiftRight: () => 'ShiftRight',
  ArrowUp: () => '↑',
  ArrowLeft: () => '←',
  ArrowDown: () => '↓',
  ArrowRight: () => '→',
  MetaLeft: () => '',
  ControlLeft: () => '',
  NumpadEnter: () => '\n',
  Enter: () => '\n',
  Backspace: () => '',
  CapsLock: () => '',
};

const keyboardBuild = (lang) => {
  const keyboard = `<div class="keyboard--row">
  <div class="keyboard--btn" data-key="alphabet" id="Backquote">${selectKeyLang(lang, '`')}</div>
  <div class="keyboard--btn" id="Digit1">1</div>
  <div class="keyboard--btn" id="Digit2">2<sup>@</sup><sub>"</sub></div>
  <div class="keyboard--btn" id="Digit3">3<sup>#</sup><sub>№</sub></div>
  <div class="keyboard--btn" id="Digit4">4<sup>$</sup><sub>;</sub></div>
  <div class="keyboard--btn" id="Digit5">5<sup>%</sup></div>
  <div class="keyboard--btn" id="Digit6">6<sup>^</sup><sub>:</sub></div>
  <div class="keyboard--btn" id="Digit7">7<sup>&</sup><sub>?</sub></div>
  <div class="keyboard--btn" id="Digit8">8<sup>*</sup></div>
  <div class="keyboard--btn" id="Digit9">9<sup>(</sup></div>
  <div class="keyboard--btn" id="Digit0">0<sup>)</sup></div>
  <div class="keyboard--btn" id="Minus">-<sup>_</sup></div>
  <div class="keyboard--btn" id="Equal">=<sup>+</sup></div>
  <div class="keyboard--btn" id="Backspace">← Backspace</div>
</div>
<div class="keyboard--row">
  <div class="keyboard--btn" id="Tab">tab</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyQ">${selectKeyLang(lang, 'q')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyW">${selectKeyLang(lang, 'w')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyE">${selectKeyLang(lang, 'e')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyR">${selectKeyLang(lang, 'r')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyT">${selectKeyLang(lang, 't')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyY">${selectKeyLang(lang, 'y')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyU">${selectKeyLang(lang, 'u')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyI">${selectKeyLang(lang, 'i')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyO">${selectKeyLang(lang, 'o')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyP">${selectKeyLang(lang, 'p')}</div>
  <div class="keyboard--btn"data-key="alphabet" id="BracketLeft">${selectKeyLang(lang, '[')}</div>
  <div class="keyboard--btn"data-key="alphabet" id="BracketRight">${selectKeyLang(lang, ']')}</div>
  <div class="keyboard--btn" id="Backslash">\\</div>
</div>
<div class="keyboard--row">
  <div class="keyboard--btn" id="CapsLock">CapsLock</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyA">${selectKeyLang(lang, 'a')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyS">${selectKeyLang(lang, 's')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyD">${selectKeyLang(lang, 'd')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyF">${selectKeyLang(lang, 'f')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyG">${selectKeyLang(lang, 'g')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyH">${selectKeyLang(lang, 'h')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyJ">${selectKeyLang(lang, 'j')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyK">${selectKeyLang(lang, 'k')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyL">${selectKeyLang(lang, 'l')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="Semicolon">${selectKeyLang(lang, ';')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="Quote">${selectKeyLang(lang, '\'')}</div>
  <div class="keyboard--btn" id="Enter">enter</div>
</div>
<div class="keyboard--row">
  <div class="keyboard--btn" id="ShiftLeft">shift</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyZ">${selectKeyLang(lang, 'z')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyX">${selectKeyLang(lang, 'x')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyC">${selectKeyLang(lang, 'c')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyV">${selectKeyLang(lang, 'v')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyB">${selectKeyLang(lang, 'b')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyN">${selectKeyLang(lang, 'n')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="KeyM">${selectKeyLang(lang, 'm')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="Comma">${selectKeyLang(lang, ',')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="Period">${selectKeyLang(lang, '.')}</div>
  <div class="keyboard--btn" data-key="alphabet" id="Slash">${selectKeyLang(lang, '/')}</div>
  <div class="keyboard--btn" id="ArrowUp">↑</div>
  <div class="keyboard--btn" id="ShiftRight">shift</div>
</div>
<div class="keyboard--row">
  <div class="keyboard--btn" id="ControlLeft">ctrl</div>
  <div class="keyboard--btn" id="MetaLeft">win</div>
  <div class="keyboard--btn" id="AltLeft">alt</div>
  <div class="keyboard--btn" id="Space"> </div>
  <div class="keyboard--btn" id="AltRight">alt</div>
  <div class="keyboard--btn" id="ArrowLeft">←</div>
  <div class="keyboard--btn" id="ArrowDown">↓</div>
  <div class="keyboard--btn" id="ArrowRight">→</div>
</div>
<div class="change-lang-disc">Change Lang: "AltLeft + ShiftLeft"</div>`;
  return keyboard;
};

export default () => {
  const lang = localStorage.getItem('lang') || 'eng';
  const state = {
    lang,
    upperCase: false,
    keyPressed: [],
    shift: false,
  };
  const specialKeys = ['AltLeft', 'AltRight', 'ShiftLeft', 'ShiftRight', 'Tab', 'Backspace', 'CapsLock'];
  const keybordWrap = document.createElement('div');
  keybordWrap.className = 'keyboard-wrapper';
  const keyboard = keyboardBuild(state.lang);
  keybordWrap.innerHTML = keyboard;

  const output = document.querySelector('.output');

  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    const { code } = e;
    state.keyPressed.push(code);
    if (state.keyPressed.includes('AltLeft') && state.keyPressed.includes('ShiftLeft')) {
      state.lang = state.lang === 'eng' ? 'ru' : 'eng';
      localStorage.setItem('lang', state.lang);
      const alphabet = Array.from(document.querySelectorAll('[data-key="alphabet"]'));
      alphabet.forEach((key, i) => {
        if (state.lang === 'ru') {
          alphabet[i].textContent = toRusLang[key.textContent];
        } else {
          alphabet[i].textContent = toEngLang[key.textContent];
        }
      });
    }
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      state.upperCase = true;
      state.shift = true;
    }
    if (code === 'Backspace') {
      output.value = output.value.slice(0, output.value.length - 1);
    }
    if (code === 'CapsLock') state.upperCase = !state.upperCase;
    const key = map[code] ? map[code](state) : '';
    output.value = specialKeys.includes(key) ? output.value : output.value + key;
    const currentBtn = document.querySelector(`#${code}`);
    if (currentBtn) currentBtn.classList.add('keyboard--btn__active');
  });
  document.addEventListener('keyup', (e) => {
    e.preventDefault();
    const { code } = e;
    state.keyPressed = state.keyPressed.filter((k) => k !== code);
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      state.upperCase = false;
      state.shift = false;
      document.querySelector('#ShiftLeft').classList.remove('keyboard--btn__active');
      document.querySelector('#ShiftRight').classList.remove('keyboard--btn__active');
    }
    const key = document.querySelector(`#${code}`);
    if (key) key.classList.remove('keyboard--btn__active');
  });

  keybordWrap.addEventListener('mousedown', ({ target: { id } }) => {
    if (!id) return;
    if (id === 'CapsLock') state.upperCase = !state.upperCase;
    if (id === 'Backspace') {
      output.value = output.value.slice(0, output.value.length - 1);
    }
    if (id === 'ShiftLeft' || id === 'ShiftRight') {
      state.upperCase = !state.upperCase;
      state.shift = !state.shift;
      document.querySelector(`#${id}`).classList.add('keyboard--btn__active');
      return;
    }
    const key = map[id](state);
    output.value = specialKeys.includes(key) ? output.value : output.value + key;
    document.querySelector(`#${id}`).classList.add('keyboard--btn__active');
  });
  document.addEventListener('mouseup', () => {
    const activeKeys = document.querySelectorAll('.keyboard--btn__active');
    if (state.keyPressed.includes('ShiftLeft') || state.keyPressed.includes('ShiftRight')) {
      activeKeys.forEach((k) => {
        if (k.textContent === 'shift') return;
        k.classList.remove('keyboard--btn__active');
      });
      return;
    }
    if (state.shift && activeKeys.length > 1) {
      state.shift = false;
      state.upperCase = !state.upperCase;
      activeKeys.forEach((k) => k.classList.remove('keyboard--btn__active'));
      return;
    }
    if (state.shift) {
      return;
    }
    activeKeys.forEach((k) => k.classList.remove('keyboard--btn__active'));
    output.focus();
  });

  return keybordWrap;
};
