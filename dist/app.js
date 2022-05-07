"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;const keyboardBuild=()=>{const keyboard=`<div><div class="keyboard--btn" id="tilda">~</div>
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
    <div class="keyboard--btn" id="-">-</div>
    <div class="keyboard--btn" id="=">=</div>
    <div class="keyboard--btn" id="backspace">backspase</div><div/>
  <div></div>
  <div></div>
  <div></div>
  <div></div>`;return keyboard};var _default=()=>{const state={lang:"eng"};const{body}=document;const container=document.createElement("section");container.className="container";const keybordWrap=document.createElement("div");keybordWrap.className="keyboard-wrapper";container.append(keybordWrap);body.append(container);const keyboard=keyboardBuild();keybordWrap.innerHTML=keyboard};exports.default=_default;
//# sourceMappingURL=app.js.map