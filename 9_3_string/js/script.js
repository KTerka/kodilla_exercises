var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur='triceratops';
var nameUpperCased = dinosaur.toUpperCase();

console.log(nameUpperCased);

var textReplaced = text.replace('Velociraptor', nameUpperCased);

console.log(textReplaced);

console.log(textReplaced.length);

var textReplacedPart = textReplaced.substr(0, textReplaced.length/2);

console.log(textReplacedPart);

alert (textReplacedPart);





	

