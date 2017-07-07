var numerText = document.getElementById("numer"),
	denomText = document.getElementById("denom"),
	button = document.getElementById("button");

button.addEventListener("click", function(event) {
	var numer = parseFloat(numerText.value),
		denom = parseFloat(denomText.value),
		result = numer / denom;

	if(result < 0) {
		logNegativeWarning();
	}
	if(denom === 0) {
		console.error("Division by zero!!!");
	}
	console.log("%f / %f = %f", numer, denom, result);;
});

function logNegativeWarning() {
	console.warn("You got a negative result!");
}

console.time();

for(var i = 0; i < 1000000; i++) {
	var z = Math.sqrt(Math.random() * 10000000) + Math.sin(Math.random() / Math.random());
}

console.timeEnd();