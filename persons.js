function person (name, age, gender, first ,second, image) {
    this.name = name
    this.age = age
    this.gender = gender
    this.interests = {
        first,
        second,
      };
    this.image = image
    this.bio = function() {
        return " My Name: " + this.name + "My age: " + 
        this.age + " gender: " + this.gender + 
        " My interests" + this.interests.first + " , " + this.interests.second
      };
  }

const person1 =  new person("Manal ", 23, "Female " ," Coding "," Sleeping ","/images/female.webp");
const person2 =  new person("Maram ", 33, "Female " ," Cooking "," Sport ","/images/female.webp");
const person3 =  new person("Ahmed ", 27, "Male " ," Coding "," Sport ","/images/male.png");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

img1.src = person1.image;
img2.src = person2.image;
img3.src = person3.image;


// to show info 
const btnText = document.querySelector('#img1');
btnText.addEventListener("click", function(){
    alert(person1.bio());
});
  
const btnText1 = document.querySelector('#img2');
btnText1.addEventListener("click", function(){
    alert(person2.bio());
});

const btnText2 = document.querySelector('#img3');
btnText2.addEventListener("click", function(){
    alert(person3.bio());
});