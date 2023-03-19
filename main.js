/*Main file*/
"use strict";

//import {CircularQueue} from './modules/CircularQueue.js';
//import {Global} from './modules/Global.js';
import {setOptionsOfQuestion} from './modules/OptionsOfQuestion.js'
import {MAXLENGTHWENG, MAXLENGTHMAIN, MAXQUANTQUESTIONS, IDWORD, WENG, WSPA} 
       from './modules/Definitions.js';
import {getRandomInt, getRandomIntFromInterval} from './modules/RandFunctions.js'
import {wordQueue} from './modules/WordQueue.js';
import {mainQueue} from './modules/MainQueue.js'


//if you are testing in a local environment try:
//const myRequest = new Request("./resources/wordLists/listaTraducidaEngSpaArrA12B12.json");

const myRequest = new Request("resources/wordLists/listaTraducidaEngSpaArrA12B12.json");
fetch(myRequest)
.then(res => res.json())
.then(data => {
      let dataRef = { 
          data : data.slice()
      };
      
      mainQueue.chargeRandomNumbersToMainQueue(dataRef);
      wordQueue.chargeRandomNumbersToQueue();
      setOptionsOfQuestion();
});