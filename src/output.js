export default () => {
  const outputWrap = document.createElement('div');
  outputWrap.className = 'output-wrapper';
  const output = '<textarea type="textarea" rows="10" class="output">';
  outputWrap.innerHTML = output;
  return outputWrap;
};
