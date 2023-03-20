import {MAXLENGTHMAIN, NUMBEROFOPTIONS, MAXLENGTHARROPTS} from "./Definitions.js";
import {CircularQueue} from "./CircularQueue.js";
import {countWord} from './MainCounter.js'
import {getArrOfRandomInt} from "./RandFunctions.js";

var mainQueue = {};

{
	mainQueue.q = new CircularQueue(MAXLENGTHMAIN);

	mainQueue.chargeRandomNumbersToMainQueue = (dataRef) =>
	{
		let mainElemArr;
		let arrRandomIndex = getArrOfRandomInt(MAXLENGTHARROPTS, 
											dataRef.data.length-1);
		let j;
		//console.log(arrRandomIndex);
		for(let i = 0;i < MAXLENGTHARROPTS;i+=NUMBEROFOPTIONS)
		{	
			mainQueue.q.enqueue({
				ans: dataRef.data[arrRandomIndex[i]],
				wrong1: dataRef.data[arrRandomIndex[i+1]], 
				wrong2: dataRef.data[arrRandomIndex[i+2]] 
			});
		}
		countWord.setRemCounter();
		//console.log(mainQueue.q.getFront());
		
	}

}
export {mainQueue};