var list = document.getElementById('list');
var add = document.getElementById('add_elem');

add.addEventListener('click',function()							
	{
		var element = document.createElement('li');
		var numberOfelemnts=document.getElementsByTagName('li').length;
		element.innerHTML = 'item ' + numberOfelemnts;
	
		list.appendChild(element);
	});


function multiply(a, b){
	var a = 2;
	var b = 3;
  a * b
};
var m=1;
m = multiply(a, b);
console.log(m);









	

