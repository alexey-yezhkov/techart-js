(function () {

    console.log("7. Triangle");

    var n = 1, currentTriangleNumber, maxDivisor, count;
    
    while(n != 0) {
        currentTriangleNumber = (n * (n + 1)) / 2;
        count = 2;
        maxDivisor = Math.sqrt(currentTriangleNumber);

        for(i = 2; i <= maxDivisor; i++) {
            if ((currentTriangleNumber % i) == 0) {
                count += 2;
            }
            if (count >= 500) {
                console.log(currentTriangleNumber);
                return;
            }
        }

        n++;
    }

})();
