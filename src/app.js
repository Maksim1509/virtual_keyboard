import buildKeyboard from './keyboard.js';
import buildOutput from './output.js';

export default () => {
  const { body } = document;
  const title = document.createElement('h1');
  title.textContent = 'Virtual Keyboard OS Windows';
  body.append(title);
  const container = document.createElement('section');
  container.className = 'container';
  body.append(container);
  const output = buildOutput();
  container.append(output);
  const keyboard = buildKeyboard();
  container.append(keyboard);
  document.querySelector('.output').focus();
};
