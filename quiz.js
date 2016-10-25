var submit = document.getElementById("submit");
var space = " ";
var treeStuff ={};
var enter = document.getElementById("rows");
var char = document.getElementById("char");


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

char.addEventListener("keyup", function(event) {
	var newRows = enter.value;
	var newChar = char.value;
	event.preventDefault();
    if (newRows.length > 1 || newChar.length > 1) {
    	alert("ONLY ONE CHARACTER");
    	    }
     else if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }

    else if(event.keyCode < 48 || event.keyCode > 57 || event.keyCode != 8){
        alert ("Only CHARACTERS no Letters");
    }
    

});





