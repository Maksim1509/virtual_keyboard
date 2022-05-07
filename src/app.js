import buildKeyboard from './keyboard.js';
import buildOutput from './output.js';

export default () => {
  const { body } = document;
  const container = document.createElement('section');
  container.className = 'container';
  body.append(container);
  const output = buildOutput();
  container.append(output);
  const keyboard = buildKeyboard();
  container.append(keyboard);
};
