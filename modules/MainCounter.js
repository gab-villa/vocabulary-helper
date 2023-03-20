import {MAXLENGTHMAIN, NUMBEROFOPTIONS, MAXLENGTHARROPTS} from "./Definitions.js";

var countWord = {};
{
	countWord.count = MAXLENGTHMAIN;
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