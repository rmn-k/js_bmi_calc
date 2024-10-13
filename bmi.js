function calcBMI(){
	var w=document.getElementById("input_weight").value;
	var h=document.getElementById("input_height").value;
	
	// converting h to meters
	h=h*0.01;

	console.log("weight is: " + w +" kg");
	console.log("height is: " + h +" m");
	
	// bmi= w/h^2
	var ans=(w)/(h**2); // ** is exponential operator in js (not valid in c++, php)
	console.log(ans);

	document.getElementById("result").innerHTML="BMI: " + ans.toFixed(2);	
}
