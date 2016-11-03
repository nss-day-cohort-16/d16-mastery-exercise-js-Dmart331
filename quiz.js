var submit = document.getElementById("submit");
var space = " ";
var treeStuff ={};
var rows = document.getElementById("rows");
var char = document.getElementById("char");
var form = document.getElementById('form')


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
rows.addEventListener("keyup", function(keyPress) {
	var newRows = rows.value;
	var newChar = char.value;
	event.preventDefault();
    	    
  if(keyPress.keyCode < 48 && keyPress.keyCode !== 8 && keyPress.keyCode !== 13 || keyPress.keyCode > 57 && keyPress.keyCode !== 8 && keyPress.keyCode !== 13 && keyPress.keyCode !== 9) {
        alert("Enter only integers, plz.");
    }

    else if (newRows.length > 1 || newChar.length > 1) {
    	alert("ONLY ONE CHARACTER");

	}
     else if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
   });

char.addEventListener("keyup", function(keyPress) {
	var newRows = rows.value;
	var newChar = char.value;
	event.preventDefault();
    	
    if(keyPress.keyCode !== 9 && keyPress.keyCode !== 8 && keyPress.keyCode !== 16 && keyPress.keyCode !== 49 && keyPress.keyCode !== 50 && keyPress.keyCode !== 51 && keyPress.keyCode !== 52 && keyPress.keyCode !== 53 && keyPress.keyCode !== 54 && keyPress.keyCode !== 55 && keyPress.keyCode !== 56 && keyPress.keyCode !== 57&& keyPress.keyCode !== 58 && keyPress.keyCode !== 59 && keyPress.keyCode !== 13) {
        alert("dont");
        
}
    else if (newRows.length > 1 || newChar.length > 1) {
    	alert("ONLY ONE CHARACTER");

	}
	 else if ( event.keycode === 9){
	 	alert("only one special char")
	 }
   
});

form.addEventListener("keyup", function(keyPress){
	if(keyPress.keyCode === 13){
		document.getElementById('submit').click();
	}
})








