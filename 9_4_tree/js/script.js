var i=0;
var j=0;
var star='';
var h;
var k=0;



function drawTree(h) {
	
		for (i = 0; i < h ; i++) {
			
			for (k = 0; k < h-i-1 ; k++){
				star +=' ';
			}		
			
			for (j = 0; j < i + 1; j++){
				star += '* ';
			
			}
			
			console.log(star);
			document.write(star+"<br/>");
		
			star='';
		}
}



drawTree(prompt('Podaj wysokość choinki: ','h'));













	

