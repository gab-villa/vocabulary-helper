/*Options of question*/
import {getRandomInt, getRandomIntFromInterval} from "./RandFunctions.js";
import {NUMBEROFOPTIONS, MAXQUANTQUESTIONS, WSPA} from "./Definitions.js";
import {wordQueue} from './WordQueue.js';
import {mainQueue} from './MainQueue.js';


export function setOptionsOfQuestion()
{
	let weng = wordQueue.q.getFront();
	let randStart = getRandomInt(NUMBEROFOPTIONS-1)+1;
	let opc, docOpc;

	for (opc in weng)
	{
		
		if(randStart > NUMBEROFOPTIONS)
		{
			randStart = 1;
		}
		//should avoid repeat calling document functions
		docOpc = document.getElementById("opc" + randStart);
		docOpc.innerText = weng[opc][WSPA];
		docOpc.addEventListener("click", wordQueue.evalAns);
		randStart++;
	}
}