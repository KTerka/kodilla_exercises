var a=prompt('Podaj długośc podstawy trójkąta:','a');
var h=prompt('Podaj wysokość trójkata:','h');

function getTriangleArea(a, h) {
	

	if ((a>0)&&(h>0)) {
		result=a*h/2;
		
	} else {alert('Nieprawidłowe dane')}
	
	return result;

}
alert('Pole trójkata to:')
alert(getTriangleArea(a, h));


	
