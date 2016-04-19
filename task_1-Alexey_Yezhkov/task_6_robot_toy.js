(function () {

	ColorEnum = {
    	NORTH : "NORTH",
    	EAST : "EAST",
    	SOUTH : "SOUTH",
    	WEST: "WEST"
	};

	class Robo {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.orientation = ColorEnum.NORTH;
		}

		right() {
			switch(this.orientation) {
				case ColorEnum.NORTH:
					this.orientation = ColorEnum.EAST;
					break;
				case ColorEnum.EAST:
					this.orientation = ColorEnum.SOUTH;
					break;
				case ColorEnum.SOUTH:
					this.orientation = ColorEnum.WEST;
					break;
				case ColorEnum.WEST:
					this.orientation = ColorEnum.NORTH;
					break;
			}
		}

		left() {
			switch(this.orientation) {
				case ColorEnum.NORTH:
					this.orientation = ColorEnum.WEST;
					break;
				case ColorEnum.EAST:
					this.orientation = ColorEnum.NORTH;
					break;
				case ColorEnum.SOUTH:
					this.orientation = ColorEnum.EAST;
					break;
				case ColorEnum.WEST:
					this.orientation = ColorEnum.SOUTH;
					break;
			}
		}

		move() {
			switch(this.orientation) {
				case ColorEnum.NORTH:
					this.y++;
					break;
				case ColorEnum.EAST:
					this.x++;
					break;
				case ColorEnum.SOUTH:
					if (this.y > 0) {
						this.y--;
					}
					break;
				case ColorEnum.WEST:
					if (this.x > 0) {
						this.x--;
					}
					break;
			}
		}

		report() {
			console.log("(" + this.x + ":" + this.y + ") " + this.orientation);
		}
	};

	console.log("6. Robot toy");

	var chappie = new Robo(0, 0);
	chappie.move();
	chappie.move();
	chappie.move();
	chappie.right();
	chappie.move();
	chappie.move();
	chappie.report(); // 2,3,EAST

})();