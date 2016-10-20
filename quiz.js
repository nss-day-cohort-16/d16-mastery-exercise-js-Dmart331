var submit = document.getElementById("submit");
var space = " ";
var treeStuff ={};


  function tree(treeStuff) {
	treeStuff.char = document.getElementById("char").value//getting values from forms
	treeStuff.height = document.getElementById("rows").value
	var numSpaces = treeStuff.height;
	var branches = [];



	for(i=0; i<treeStuff.height; i++){ 
		var numChar = (2 * i) + 1 //defines the amount of char on each line
		numSpaces-- //decrements amount of spaces each time throuh loop
		console.log(space.repeat(numSpaces) + treeStuff.char.repeat(numChar)) // adds the two together each time through the loop	
	}

};

submit.addEventListener("click" , tree)
console.log(space)
//have to set up listener before vaules declared so that they don't get returned null



