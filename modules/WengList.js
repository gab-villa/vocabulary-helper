
var wengList = {};
{
	wengList.ls = document.getElementById("wordList");
	wengList.clasifItem = (lvl) =>
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
	wengList.appendChildToWengList = (weng, lvl, isActive) =>
	{
      let classItemLvl = "badge badge-primary ";
	  let classItem = "list-group-item ";
	  let itemLvl = document.createElement("span");
	  let item = document.createElement("li");

	  item.append(document.createTextNode(weng));
	  itemLvl.append(document.createTextNode(lvl));
	  
	  classItemLvl += wengList.clasifItem(lvl);

	  if(isActive == true)
	  {
	    classItem += "active";
	  }
	  item.setAttribute("class", classItem);

	  itemLvl.setAttribute("class", classItemLvl);

	  item.append(itemLvl);
	  //li.setAttribute("class", "list-group-item");

	  wengList.ls.prepend(item);
	};
	wengList.removeChildOfWengList = () =>
	{
	  wengList.ls.removeChild(wengList.ls.lastElementChild);
	};
}

export {wengList};