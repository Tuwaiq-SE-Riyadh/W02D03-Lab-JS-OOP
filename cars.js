var car1 = {
						company :"Hyndai", 
						model : "2018", 
						colour : "Orange",
						image : "car1.jpg", 
						registration_number : "ABC123", 
						price : 9998500, 
						showMore: function(){
							return "Company: " + this.company + "<br>Model: " + this.model + "<br>Colour: " + this.colour + "<br>Registration Number: " + this.registration_number +"<br>Price: " + this.price;
						}
					};
					
var car2 = {
						company :"Honda", 
						model : "2020", 
						colour : "Red",
						image : "car2.jpg", 
						registration_number : "FDE543", 
						price : 9956000, 
						showMore: function(){
							return "Company: " + this.company + "<br>Model: " + this.model + "<br>Colour: " + this.colour + "<br>Registration Number: " + this.registration_number +"<br>Price: " + this.price;
						}
					};
					
var car3 = {
						company :"Kia", 
						model : "2016", 
						colour : "White",
						image : "car3.jpg", 
						registration_number : "TYU654", 
						price : 7542000, 
						showMore: function(){
							return "Company: " + this.company + "<br>Model: " + this.model + "<br>Colour: " + this.colour + "<br>Registration Number: " + this.registration_number +"<br>Price: " + this.price;
						}
					};
					
					
function print_car_image(car,obj_name)
{
	document.write("<div class='car_item' onclick='display("+obj_name+")'><img src='"+car.image+"'/> <br/> <span>" + car.company + " " + car.model + "</span></div>");
}
