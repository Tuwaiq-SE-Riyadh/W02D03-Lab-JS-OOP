var person1 = {
					name :"Person one", 
						age : 25, 
						gender : "male",
						img : "person1.jpg", 
			interests : ["Reading","Sports", "Writing"], 
						bio: function(){
							alert(this.name + "\n" + this.age + "\ninterests: " + this.interests[0] + "," + this.interests[1] +" ...");
					}
				};
					
					
var person2 = {
						name :"Person two", 
						age : 18, 
					  	gender : "female",
						img : "person2.jpg", 
				 	interests : ["Reading","Poem", "Writing"], 
						bio: function(){
							alert(this.name + "\n" + this.age + "\ninterests: " + this.interests[0] + "," + this.interests[1] +" ...");
						}
					};
					
					
					
var person3 = {
						name :"Person three", 
						age : 26, 
					gender : "male",
						img : "person3.jpg", 
						interests : ["Anime","Movies", "Swimming"], 
						bio: function(){
							alert(this.name + "\n" + this.age + "\ninterests: " + this.interests[0] + "," + this.interests[1] +" ...");
						}
					};
					
function print_person_image(person,obj_name)
{
	document.write("<div class='person_item' onclick='display("+obj_name+")'><img src='"+person.img+"'/> <br/> <span>" + person.name + " " + person.age + "</span></div>");
}
