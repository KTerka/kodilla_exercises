var femaleNames=['Agnieszka','Joanna','Martyna','Ewa'];
var maleNames = ['Arek','Marek','Tomek','Florian'];

allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = prompt('Podaj imię: ','newName');

if (allNames.indexOf(newName)===-1) 
	{ var x=allNames.push(newName);
		console.log(allNames);
}else {alert('Imię '+ newName +' już jest w tablicy.');
};



	

