

function numsRandom() {
	var sum1 = Math.floor((Math.random() * 100) + 1); 
	var sum2 = Math.floor((Math.random() * 100) + 1);
	document.getElementById('sum1').innerHTML = sum1;
	document.getElementById('sum2').innerHTML = " y " + sum2;
	document.getElementById('resul').innerHTML = "";
}

function suma(){
	var element1 = parseInt(document.getElementById("sum1").innerHTML);
	var element = document.getElementById("sum2").innerHTML.split("y");
	var element2 = parseInt(element[1]);
	var sumando = element1 + element2;
	if(!isNaN(sumando)){
		document.getElementById('resul').innerHTML = element1.toString() + " + " + element2.toString() + " = " + sumando;
	}
}