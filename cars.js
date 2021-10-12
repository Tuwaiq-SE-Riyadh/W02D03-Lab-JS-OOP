const img1= document.querySelector("#img1")
const img2= document.querySelector("#img2")
const img3= document.querySelector("#img3")
const car1 = {
    company : "toyota"
    , model : 1996
    , colour : "red"
    , image :""
    , registration : "1999"
    ,number:123,
      price : 5000
      ,showMore : function(){
         document.querySelector("#para1").innerHTML = car1.company
         document.querySelector("#para2").innerHTML = car1.model
         document.querySelector("#para3").innerHTML = car1.colour
         document.querySelector("#para4").innerHTML = car1.registration
         document.querySelector("#para5").innerHTML = car1.number
         document.querySelector("#para6").innerHTML = car1.price

          console.log(this.company)
      }
}

const car2 = {
    company : "bmw"
    , model : 2015
    , colour : "red"
    , image :""
    , registration : 2020
    ,number : 542,
      price : 70000
      ,showMore : function(){
        document.querySelector("#para7").innerHTML = car2.company
        document.querySelector("#para8").innerHTML = car2.model
        document.querySelector("#para9").innerHTML = car2.colour
        document.querySelector("#para10").innerHTML = car2.registration
        document.querySelector("#para11").innerHTML = car2.number
        document.querySelector("#para12").innerHTML = car2.price
      }
}

const car3 = {
    company : "kia"
    , model : 2020
    , colour : "red"
    , image : ""
    , registration : 2020
    ,number : 890,
      price : 40000
      ,showMore : function(){
        document.querySelector("#para13").innerHTML = car3.company
        document.querySelector("#para14").innerHTML = car3.model
        document.querySelector("#para15").innerHTML = car3.colour
        document.querySelector("#para16").innerHTML = car3.registration
        document.querySelector("#para17").innerHTML = car3.number
        document.querySelector("#para18").innerHTML = car3.price
      }
}

window.onload = (event) => {
    if(car1.price < car2.price & car1.price < car3.price){
        alert("the cheapest car is "+car1.company)
    }
    else if (car2.price < car1.price & car2.price < car3.price){
        alert("the cheapest car is "+car2.company)
    }
    else if(car3.price < car2.price & car3.price < car1.price){
        alert("the cheapest car is "+car3.company)
    }
  };
