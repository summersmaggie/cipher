var sentence = prompt("Enter a sentence:");
var length = sentence.length;

var firstLastToCapital = function(sent) {
	return sent.charAt(0).toUpperCase() + sent.charAt(length-1).toUpperCase();
}

alert(firstLastToCapital(sentence))

var reverseOrder = function(sent) {
	return sent.charAt(length-1).toUpperCase() +
sent.charAt(0).toUpperCase();
}

alert(reverseOrder(sentence))
