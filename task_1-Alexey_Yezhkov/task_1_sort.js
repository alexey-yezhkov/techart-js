(function () {

	console.log("1. Sort");

	var array = [32, 95, 16, 82, 24, 66, 35, 19, 75, 54, 40, 43, 93, 68];
	console.log("Array before sort: " + array);
	
	sortShell(array);
	console.log("Array after sort: " + array);

	function sortShell(array) {
		var step, i, j, temp;

		for (step = Math.floor(array.length / 2); step > 0; step = Math.floor(step / 2)) {
			for (i = step; i < array.length; i++) {
				for (j = (i - step); (j >= 0) && (array[j] > array[j + step]); j -= step) {
					temp = array[j];
					array[j] = array[j + step];
					array[j + step] = temp;
				}
			}
		}
	}

})();
