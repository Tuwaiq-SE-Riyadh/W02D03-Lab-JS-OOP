  function car (company, model, colour, image, registrationNum, price) {
    this.company = company
    this.model = model
    this.colour = colour
    this.image = image
    this.registrationNum = registrationNum
    this.price = price
    this.showMore = function() {
        return " Company name: " + this.company + " The model: " + 
        this.model + " Color: " + this.colour + 
        " Registration Number: " + this.registrationNum + 
        " Price: SAR " + this.price;
      };
  }

const car1 =  new car("audi", 2022, "red" ,"/images/o.jpg",22 ,450000);
const car2 =  new car("rozraiz", 2021, "blue" ,"/images/Roz.jpg",21 ,1450000);
const car3 =  new car("nissan", 2020, "black" ,"/images/Nissan.webp",20 ,150000);

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

img1.src = car1.image;
img2.src = car2.image;
img3.src = car3.image;

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");

p1.innerHTML = " " + car1.showMore();
p2.innerHTML = " " + car2.showMore();
p3.innerHTML = " " + car3.showMore();


// the cheapest car

window.addEventListener("load" ,function() {

    let x = car1.price;
    let cheaper = car1.company;
    
    if(x >= car2.price){
        x = car2.price;
        cheaper = car2.company;
    }else if(x >= car3.price){
        x = car3.price;
        cheaper = car3.company;
    
    }
    alert("The cheapest car is " + cheaper + " Price is : " + x);  
} )


// to show info 
const btnText = document.querySelector('#img1');
btnText.addEventListener("click", function(){
    const moreText = document.querySelector('#more');
    btnText.innerHTML = ""; 
    moreText.style.display = "inline";});
  
const btnText1 = document.querySelector('#img2');
btnText1.addEventListener("click", function(){
    const moreText1 = document.querySelector('#more1');
    btnText1.innerHTML = ""; 
    moreText1.style.display = "inline";
});

const btnText2 = document.querySelector('#img3');
btnText2.addEventListener("click", function(){
    const moreText2 = document.querySelector('#more2');
    btnText2.innerHTML = ""; 
    moreText2.style.display = "inline";
});