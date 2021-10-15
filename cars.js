


function carBluePrint(company, model, color, image, Rnumber, price) {
    return {
      company: company,
      model: model,
      color: color,
      image: image,
      Rnumber: Rnumber,
      price: price,
      showMore: function () {
        return "Company: "+ company +"\n Model: "+ model+ "\n Color: "+color+"\n Registration No: "+ Rnumber+"\n Price: " +price
      },
      
    };
  }
  
 

  

//https://www.geeksforgeeks.org/how-to-pass-image-as-a-parameter-in-javascript-function/
const car1 = carBluePrint("GMC", "Yukon", "white",'yukon.jpg',"11111",500000)
const car2 = carBluePrint("Hyundai", "Sonata", "White","Sonata.jpg","12345",400000)
const car3 = carBluePrint("Toyota", "Land Cruiser", "White","landCruiser.jpg","00000",70000)




const body=document.querySelector("body")

let img1 = document.createElement("img")
let img2 = document.createElement("img")
let img3 = document.createElement("img")

img1.src = "yukon.jpg"
img2.src = "Sonata.jpg"
img3.src = "landCruiser.jpg"
img1.style.width='30%'
img2.style.width='35%'
img3.style.width='33%'

body.append(img1)
body.append(img2)
body.append(img3)




img1.addEventListener("click", function (e) {
    alert("Car info: " + car1.showMore());
  });

  img2.addEventListener("click", function (e) {
    alert("Car info: " + car2.showMore());
  });

  img3.addEventListener("click", function (e) {
    alert("Car info: " + car3.showMore());
  });

  // was not sure how to implemnt alert box when the page finish loading, so I looked online and found help 
// at  https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
  window.addEventListener('load', (event) => {
    alert('The cheapest car is: ' +cheapCar());
  });
  
  arr=[car1,car2,car3]

  
 function cheapCar() {
  let c=arr[0]
  for(i=1; i<arr.length; i++){

    if(c.price> arr[i].price){
       
        c=arr[i]
}

}
return c.model 
 }
 cheapCar()
  

  

  




