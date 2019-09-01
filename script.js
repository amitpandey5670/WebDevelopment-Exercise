var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function removeParent() {
	this.parentNode.remove();
}


function createList(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var delbutton =  document.createElement("button");
	delbutton.appendChild(document.createTextNode("Delete"))
	li.appendChild(delbutton);
	delbutton.addEventListener("click",removeParent);
}

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}


function addWhenClick(){
	if (inputLength() > 0){
		createList();

	}

}

function addWhenPress(event){
	if (inputLength() > 0 && event.keyCode === 13){
		createList();
	}
}

button.addEventListener("click", addWhenClick);
input.addEventListener("keypress", addWhenPress);
