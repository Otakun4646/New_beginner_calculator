$ = jQuery;

function calculation(){
	var num1=parseInt(document.getElementById("num1").value);
	var num2=parseInt(document.getElementById("num2").value);
	var e = document.getElementById("Operations");
	var cal=e.options[e.selectedIndex].value;
	var ans;
	
	if(cal==0){
		ans=(num1+num2);
		calcResult.innerHTML="<p>Operation</p>"+num1+" + "+num2+"<br/><p>Results</p>"+ans;
	}
	else if(cal==1){
		ans=(num1-num2);
		calcResult.innerHTML="<p>Operation</p>"+num1+" - "+num2+"<br/><p>Results</p>"+ans;
	}
	else if(cal==2){
		ans=(num1*num2);
		calcResult.innerHTML="<p>Operation</p>"+num1+" * "+num2+"<br/><p>Results</p>"+ans;
	}
	else if(cal==3){
		ans=(num1/num2);
		calcResult.innerHTML="<p>Operation</p>"+num1+" / "+num2+"<br/><p>Results</p>"+ans;
	}
}
btnCalc.addEventListener("click",calculation,false);