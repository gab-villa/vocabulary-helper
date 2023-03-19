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

//var mainQueue = new CircularQueue(MAXLENGTHMAIN);
//var wengQueue = new CircularQueue(MAXLENGTHWENG);
//var ulWordList = document.getElementById("wordList");
//var ul = createWengList();

/*
for(let i = 0;i < MAXLENGTHWENG;i++)
{
  appendChildToWengList("nue");
}*/


//const myRequest = new Request("listaTraducidaEngSpaArr.json");
fetch("./resources/wordLists/listaTraducidaEngSpaArrA12B12.json")
.then(res => res.json())
.then(data => {
      let dataRef = { 
          data : data.slice()
      };
      
      // take in account array limit and index
      
      mainQueue.chargeRandomNumbersToMainQueue(dataRef);
      wordQueue.chargeRandomNumbersToQueue();
      //const firstOption = wordQueue.q.getFront();

      //console.log(firstWord.idword);
      //take a random word from the left and right extreme
      //let wordsInSpa = createOptions(dataRef, firstOption[IDWORD] -1);
      //console.log(wordsInSpa);
      //console.log(data[numWrong1][WSPA]);
      
      setOptionsOfQuestion();
      //setGlobalValue(0,wengQueue);
});

function mostrar(weng)
{
  console.log(weng[WENG] + " " + weng[WSPA]);
}

/*
var readJson = (path, cb) => {
  fs.readFile(require.resolve(path), (err, data) => {
    if (err)
      cb(err)
    else
      cb(null, JSON.parse(data))
  })
}*/