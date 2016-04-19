(function () {

	console.log("2. Element search");

	var array = [32, 95, 16, 82, 24, 66, 35, 19, 75, 54, 40, 43, 93, 68];
	console.log("Initial array: " + array);
	
	console.log("Value, that matched condition: " + search(array, conditionFunction));

	function conditionFunction(arrayElement) {
		if (arrayElement > 80) {
			return true;
		}
		return false;
	}

	function search(array, condition) {
		var i;
		
		for (i = 0; i < array.length; i++) {
			if (condition(array[i])) {
				return array[i];
			}
		}
	}

})();