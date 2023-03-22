import {TAM_MAIN_QUEUE} from "./Definitions.js";

var countWord = {};
{
	countWord.count = TAM_MAIN_QUEUE;
	countWord.docElem = document.getElementById("remWords");
	
	countWord.setRemCounter = () =>
	{
		countWord.docElem.innerText = 
		"remaining words: " + countWord.count;
	}
	countWord.decAndSet = () => 
	{
		--countWord.count;
		countWord.setRemCounter();
	}
}
export {countWord};