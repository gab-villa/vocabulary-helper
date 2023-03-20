/*treatment of global variables*/
"use strict";

export const Global = (function(){
  const context = {};
  function setGlobalValue(key, value) {
    context[key] = value;
  }
  function getGlobalValue(key) {
    return context[key];
  }
  window.setGlobalValue = setGlobalValue;
  window.getGlobalValue = getGlobalValue;
})();


