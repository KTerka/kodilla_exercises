
	function Phone(brand, price, color, display, battery){
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.display = display;
		this.battery = battery;
	}
	
	Phone.prototype.printInfo = function() {
			console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price +".");
	}
	
	Phone.prototype.extraInfo = function() {
			console.log("The phone - " + this.brand + " has " + this.display + " and " + this.battery + " talk time on battery.");
	}
	
	var iPhone6S = new Phone("Apple" , 2250, "silver", "5''" , "14h");
	var samsungGalaxyS6 = new Phone("Samsung", 1500, "black", "5,5''" , "8h");
	var onePlusOne = new Phone("Plus", 2000, "white", "4,7''" , "10h");
	
	iPhone6S.printInfo();
	samsungGalaxyS6.printInfo();
	onePlusOne.printInfo();
	iPhone6S.extraInfo();
	samsungGalaxyS6.extraInfo();
	onePlusOne.extraInfo();
	
	


