var todoList = localStorage.todoList?JSON.parse(localStorage.todoList):[];

var inputDom = document.querySelector("#input");
var todoDom = document.querySelector(".todolist");
var doneDom = document.querySelector(".donelist");
var contain = document.querySelector(".contain")
render()
console.log(todoDom)
inputDom.onkeydown = function(evemt){
	if(event.key=="Enter"&&inputDom.value!=""){
		var temp = {
			content:inputDom.value,
			isDone:false
		}
		todoList.push(temp)
		inputDom.value=""
		render()
		console.log(todoList)
	}
} 

function render(){
	todoDom.innerHTML = "";
	doneDom.innerHTML = "";
	var todoNum = 0;
	var doneNum = 0;
	
	todoList.forEach(function(item,index) {
		var itemDiv = document.createElement("div")
		itemDiv.className = "content";
		if (item.isDone == false) {
			itemDiv.innerHTML = `
			<div class="contentLite"><input type="checkbox" data-index="${index}" name="" id="" value="" /></div>
			<p>${item.content}</p>
			<div class="delete" data-index="${index}">删除</div>
			`
			todoDom.appendChild(itemDiv)
			todoNum++
		} else{
			itemDiv.innerHTML = `
			<div class="contentLite"><input type="checkbox" data-index="${index}" checked="checked" name="" id="" value="" /></div>
			<p>${item.content}</p>
			<div class="delete" data-index="${index}">删除</div>
			`
			doneDom.appendChild(itemDiv)
			doneNum++
		}
		var todoSpan = document.querySelector(".todo .right");
		var doneSpan = document.querySelector(".done .right");
		todoSpan.innerHTML = todoNum;
		doneSpan.innerHTML = doneNum;
		localStorage.todoList = JSON.stringify(todoList)
	})
}

contain.onchange = function(e){
	console.log(e)
	var index = e.target.dataset.index;
	var isDone = e.target.checked;
	todoList[index].isDone = isDone;
	render()
}

contain.onclick = function(e){
	console.log(e)
	if (e.target.className == "delete") {
		var index = e.target.dataset.index;
		todoList.splice(index,1)
		render()
	}
}






























 


