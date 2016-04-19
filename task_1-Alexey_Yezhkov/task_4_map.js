(function () {

	console.log("4. Map");

	var array = [32, 95, 16, 82, 24, 66, 35, 19, 75, 54, 40, 43, 93, 68];
	console.log("Initial array: " + array);
	
	console.log("Value, that matched condition: " + map(array, mappingFunction));

	function mappingFunction(arrayElement) {
		if (arrayElement > 80) {
			return arrayElement / 2;
		} else {
			return arrayElement * 2;
		}
	}

	function map(array, mappingFunction) {
		var i;
		var result = [];
		
		for (i = 0; i < array.length; i++) {
			result.push(mappingFunction(array[i]));
		}

		return result;
	}

})();