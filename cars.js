const car =[ {
    company:"Toyota",
    model:"2010",
    colour:"Red",
    image: document.querySelector("#img1").src = "imges/1.jfif",
    registration_number:"01",
    price:"40000",

    showMore: function(){
    document.querySelector("#p1").innerHTML = "Car company: " + car[0].company;
    document.querySelector("#p2").innerHTML = "Car model: " + car[0].model;
    document.querySelector("#p3").innerHTML = "Car color: " + car[0].colour;
    document.querySelector("#p4").innerHTML = "Car Registration Number: " + car[0].registration_number;
    document.querySelector("#p5").innerHTML = "Car price: " + car[0].price;
    } 
},

 {
    company:"Nissan",
    model:"2017",
    colour:"Blue",
    image:document.querySelector("#img2").src = "imges/2.jfif",
    registration_number:"045",
    price:"3000",
    
    showMore: function(){
    document.querySelector("#p1").innerHTML = "Car company: " + car[1].company;
    document.querySelector("#p2").innerHTML = "Car model: " + car[1].model;
    document.querySelector("#p3").innerHTML = "Car color: " + car[1].colour;
    document.querySelector("#p4").innerHTML = "Car Registration Number: " + car[1].registration_number;
    document.querySelector("#p5").innerHTML = "Car price: " + car[1].price;
    } 

},

 {
    company:"Lexus",
    model:"2020",
    colour:"Black",
    image:document.querySelector("#img3").src = "imges/3.jfif",
    registration_number:"056",
    price:"120000",
    
    showMore: function(){
    document.querySelector("#p1").innerHTML = "Car company: " + car[2].company;
    document.querySelector("#p2").innerHTML = "Car model: " + car[2].model;
    document.querySelector("#p3").innerHTML = "Car color: " + car[2].colour;
    document.querySelector("#p4").innerHTML = "Car Registration Number: " + car[2].registration_number;
    document.querySelector("#p5").innerHTML = "Car price: " + car[2].price;
    } 

}];

function cheapest_car(){
    const m = car.sort(function(el , e2){
        return el.price - e2.price;
      })
alert( "Cheapest car :"+m[0].company + " "+ m[0].model + " "+ m[0].colour + " "+ m[0].registration_number + " "+m[0].price);
}