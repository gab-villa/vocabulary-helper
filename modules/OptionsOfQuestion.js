/*Options of question*/
import {getRandomIntFromInterval} from "./RandFunctions.js";
import {NUMBER_OF_OPTIONS} from "./Definitions.js";
import {wordQueue} from './WordQueue.js';
import {mainQueue} from './MainQueue.js';


export function setOptionsOfQuestion()
{
	let weng = wordQueue.q.getFront();
	let randStart = getRandomIntFromInterval(1, NUMBER_OF_OPTIONS);
	let opc, docOpc;

	//setting also a random position of the answer
	for (opc in weng)
	{
		
		if(randStart > NUMBER_OF_OPTIONS)
		{
			randStart = 1;
		}
		//should avoid repeat calling document functions
		docOpc = document.getElementById("opc" + randStart);
		docOpc.innerText = weng[opc].wspa;
		docOpc.addEventListener("click", wordQueue.evalAns);
		randStart++;
	}
}