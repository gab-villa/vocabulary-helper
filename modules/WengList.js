function clasifItem(lvl)
{
	if(lvl == "A1" || lvl == "A2")
		return "badge-success";
	else if(lvl == "B1")
		return "badge-info";
	else if(lvl == "B2")
		return "badge-primary";
	else if(lvl == "C1")
		return "badge-secondary";
	else if(lvl == "C2")
		return "badge-dark";
	return "";
}
var wengList = {};
{
	wengList.ls = document.getElementById("wordList");
	wengList.appendChildToWengList = (weng, lvl) =>
	{
      let classItemLvl = "badge badge-primary ";
	  let classItem = "list-group-item ";
	  let itemLvl = document.createElement("span");
	  let item = document.createElement("li");

	  item.append(document.createTextNode(weng));
	  itemLvl.append(document.createTextNode(lvl));
	  
	  classItemLvl += clasifItem(lvl);

	  item.setAttribute("class", classItem);
	  itemLvl.setAttribute("class", classItemLvl);

	  item.append(itemLvl);

	  wengList.ls.prepend(item);
	};
	wengList.removeChildOfWengList = () =>
	{
	  wengList.ls.removeChild(wengList.ls.lastElementChild);
	};
}

export {wengList};