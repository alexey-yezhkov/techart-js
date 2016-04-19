(function () {

	console.log("5. Average of even");

	var array = [32, 95, 16, 82, 24, 66, 35, 19, 75, 54, 40, 43, 93, 68];
	console.log("Initial array: " + array);
	
	console.log("Average of even: " + countEven(array));

	function countEven(array) {
		var count = 0, sum = 0;
		
		for (i = 0; i < array.length; i++) {
			if (array[i] % 2 == 0) {
				sum += array[i];
				count++;
			}
		}

		return sum / count;
	}

})();