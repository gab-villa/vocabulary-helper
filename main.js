/*Main file*/
"use strict";

import {setOptionsOfQuestion} from './modules/OptionsOfQuestion.js'
import {PATH_TO_WORDLIST} from './modules/Definitions.js';
import {wordQueue} from './modules/WordQueue.js';
import {mainQueue} from './modules/MainQueue.js';


//if you are testing in a local environment try:
//const myRequest = new Request("./resources/wordLists/listaTraducidaEngSpaArrA12B12.json");

const myRequest = new Request(PATH_TO_WORDLIST);
fetch(myRequest)
.then(res => res.json())
.then(data => {
      let dataRef = { 
          data : data.slice()
      };
      
      mainQueue.loadFromWordList(dataRef);
      wordQueue.loadFromMainQueue();
      setOptionsOfQuestion();
});