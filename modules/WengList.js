var wengList = {};
{
	wengList.ls = document.getElementById("wordList");
	wengList.appendChildToWengList = (weng, isActive) =>
	{
	  let item = document.createElement("li");
	  item.append(document.createTextNode(weng));
	  let classItem = "list-group-item";
	  if(isActive == true)
	  {
	    classItem += " active";
	  }
	  item.setAttribute("class", classItem);
	  //li.setAttribute("class", "list-group-item");

	  wengList.ls.prepend(item);
	};
	wengList.removeChildOfWengList = () =>
	{
	  wengList.ls.removeChild(wengList.ls.lastElementChild);
	  //let item = document.getele;
	  //wengList.ls.lastElementChild.setAttribute("class", "active");
	};
}
export {wengList};