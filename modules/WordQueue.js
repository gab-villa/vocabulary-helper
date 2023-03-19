import {CircularQueue} from './CircularQueue.js';
import {setOptionsOfQuestion} from './OptionsOfQuestion.js';
import {getRandomInt, getRandomIntFromInterval} from './RandFunctions.js';
import {MAXLENGTHWENG, MAXLENGTHMAIN, MAXQUANTQUESTIONS, IDWORD, WENG, WSPA} 
       from './Definitions.js';
import {wengList} from './WengList.js';
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
			wengList.appendChildToWengList(weng.ans[WENG]);
			++i;
		}
		if(i < MAXLENGTHWENG)
		{
			//throw exception in the future
			console.log("mainQueue with less elements than required!");
		}
		/*
		let numRand = getRandomIntFromInterval(minInterval, maxInterval), numRand2;
		wordQueue.q.enqueue(dataRef.data[numRand]);
		wengList.appendChildToWengList(dataRef.data[numRand][WENG], true);
		while(!wordQueue.q.isFull())
		{
			do
			{
			    numRand2 = getRandomIntFromInterval(minInterval, maxInterval);
			}while(numRand == numRand2);
			wordQueue.q.enqueue(dataRef.data[numRand2]);
			wengList.appendChildToWengList(dataRef.data[numRand2][WENG], false);
			numRand = numRand2;
		}*/
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
	  wengList.removeChildOfWengList();

	  if(!mainQueue.q.isEmpty())
	  {
	  	wordEv = mainQueue.q.dequeue();
	  	wordQueue.q.enqueue(wordEv);
	  	wengList.appendChildToWengList(wordEv.ans[WENG], false);
	  }
	  

	  setOptionsOfQuestion();
	};
}


export {wordQueue};
/*
function evalAns(e)
	{
	  let weng, strSpa;
	  if(wengQueue.isEmpty())
	  {
	    return;
	  }
	  weng = wengQueue.dequeue();
	  strSpa = e.target.innerText;


	  if(weng[WSPA] == strSpa)
	  {
	       
	  }
	  else
	  {
	    //deleteOpcIfAnsWrong();
	  }
	}*/
