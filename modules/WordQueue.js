import {CircularQueue} from './CircularQueue.js';
import {setOptionsOfQuestion} from './OptionsOfQuestion.js';
import {getRandomInt, getRandomIntFromInterval} from './RandFunctions.js';
import {TAM_WENGLIST, TAM_MAIN_QUEUE} from './Definitions.js';
import {wengList} from './WengList.js';
import {countWord} from './MainCounter.js'
import {mainQueue} from './MainQueue.js';

var wordQueue = {};
{
	wordQueue.q = new CircularQueue(TAM_WENGLIST);
	wordQueue.chargeRandomNumbersToQueue = () => 
	{
		let i = 0, weng;
		while(!mainQueue.q.isEmpty() && i < TAM_WENGLIST)
		{
			weng = mainQueue.q.dequeue();
			wordQueue.q.enqueue(weng);
			wengList.appendChildToWengList(weng.ans.weng,
						        weng.ans.level);
			++i;
		}
		if(i < TAM_WENGLIST)
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

	  
	  if(wordEv.ans.wspa != strSpa)
	  {
	  	mainQueue.q.enqueue(wordEv);
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
	  		wordEv.ans.weng, wordEv.ans.level);
	  }
	  setOptionsOfQuestion();
	};
}

export {wordQueue};
