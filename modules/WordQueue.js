import {CircularQueue} from './CircularQueue.js';
import {setOptionsOfQuestion} from './OptionsOfQuestion.js';
import {getRandomInt, getRandomIntFromInterval} from './RandFunctions.js';
import {MAXLENGTHWENG, MAXLENGTHMAIN, MAXQUANTQUESTIONS, IDWORD, WENG, WSPA,LEVEL} 
       from './Definitions.js';
import {wengList} from './WengList.js';
import {countWord} from './MainCounter.js'
import {mainQueue} from './MainQueue.js';

var wordQueue = {};
{
	wordQueue.q = new CircularQueue(MAXLENGTHWENG);
	wordQueue.chargeRandomNumbersToQueue = () => 
	{
		let i = 0, weng;
		while(!mainQueue.q.isEmpty() && i < MAXLENGTHWENG)
		{
			weng = mainQueue.q.dequeue();
			wordQueue.q.enqueue(weng);
			wengList.appendChildToWengList(weng.ans[WENG],
						        weng.ans[LEVEL],
						        false);
			
			++i;
		}
		if(i < MAXLENGTHWENG)
		{
			//throw exception in the future
			console.log("mainQueue with less elements than required!");
		}

	};
	wordQueue.evalAns = (e) =>
	{
	  let wordEv, optEv, strSpa;
	  if(wordQueue.q.isEmpty())
	  {
	    return;
	  }
	  wordEv = wordQueue.q.dequeue();
	  strSpa = e.target.innerText;
	  //alert(strSpa);

	  
	  if(wordEv.ans[WSPA] != strSpa)
	  {
	  	mainQueue.q.enqueue(wordEv);
	  	//wengList.appendChildToWengList(wordEv[WENG], true);
	  }
	  else
	  {
	  	countWord.decAndSet();
	  }
	  wengList.removeChildOfWengList();

	  if(!mainQueue.q.isEmpty())
	  {
	  	wordEv = mainQueue.q.dequeue();
	  	wordQueue.q.enqueue(wordEv);
	  	wengList.appendChildToWengList(
	  		wordEv.ans[WENG], wordEv.ans[LEVEL], false);
	  }
	  

	  setOptionsOfQuestion();
	};
}

export {wordQueue};
