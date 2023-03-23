import {CircularQueue} from './CircularQueue.js';
import {TAM_WENGLIST, TAM_MAIN_QUEUE} from './Definitions.js';
import {wengList} from './WengList.js';
import {mainQueue} from './MainQueue.js';

// wordqueue have variations with queue and dequeue so
// i think this is OK
var wordQueue = {};
{
	wordQueue.q = new CircularQueue(TAM_WENGLIST);
	wordQueue.loadFromMainQueue = () => 
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
	};
	wordQueue.dequeue = () =>
	{
		//if dequeue fails, it'll handle the error
		//before the next line can be executed;
		let deletedElem = wordQueue.q.dequeue();
		wengList.removeChildOfWengList();
		return deletedElem;
	}
	wordQueue.enqueueFromMainQueue = () =>
	{
		let wordEv = mainQueue.q.dequeue();
	  	wordQueue.q.enqueue(wordEv);
	  	wengList.appendChildToWengList(wordEv.ans.weng, 
	  					   wordEv.ans.level);
	}
}

export {wordQueue};
