import {TAM_MAIN_QUEUE, NUMBER_OF_OPTIONS} from "./Definitions.js";
import {CircularQueue} from "./CircularQueue.js";
import {countWord} from './MainCounter.js';
import {getArrOfRandomInt} from "./RandFunctions.js";

//mainqueue should be a class that extends circularQueue
var mainQueue = {};
{
	mainQueue.q = new CircularQueue(TAM_MAIN_QUEUE);

	mainQueue.loadFromWordList = (dataRef) =>
	{
		const tamArrRand = TAM_MAIN_QUEUE*NUMBER_OF_OPTIONS;
		let arrRandomIndex = getArrOfRandomInt(tamArrRand, 
											dataRef.data.length-1);

		for(let i = 0;i < tamArrRand;i+=NUMBER_OF_OPTIONS)
		{	
			mainQueue.q.enqueue({
				ans: dataRef.data[arrRandomIndex[i]],
				wrong1: dataRef.data[arrRandomIndex[i+1]], 
				wrong2: dataRef.data[arrRandomIndex[i+2]] 
			});
		}
		countWord.setRemCounter();
	}
}
export {mainQueue};