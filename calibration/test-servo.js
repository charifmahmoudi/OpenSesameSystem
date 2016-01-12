var piblaster = require("pi-blaster.js");
function show(i){
	
	
	//if(b)
    //piblaster.setPwm(17, i);
	//else
	piblaster.setPwm(17, i / 100);
	
	console.log( " Set GPIO pin 17 to a PWM of  : " + i / 100);
	setTimeout(function(){ 

		if(i < 20)
			show(++i);
    }, 2000); 
}
show(2);