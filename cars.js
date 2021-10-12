function Car (company, model, colour,registrationNum, price){
 this.company=company
 this.model=model
 this.colour=colour

 this.registrationNum=registrationNum
 this.price=price
 this.showMore =function(){
     return " the company of car ="+company+"<br>the model of car ="+model+"<br> the color of car = "+colour+"<br> the registration Number of car "
     +registrationNum+"<br>the praice of car "+price;
 }
}
const car1= new Car("Mercedes",2015,"black",37665,500000)
const car2= new Car("toyota",2015,"white",37645,6000)
const car3= new Car("Jeep",2015,"Red",37665,560000)
     document.querySelector("#cc1").src="mr.jpg"
     document.querySelector("#cc2").src="to.jpg"
     document.querySelector("#cc3").src="je.jpg"

 document.querySelector("#cc1").addEventListener("click",function(e){
      document.querySelector("#c1").innerHTML=car1.showMore()
     
     })

     document.querySelector("#cc2").addEventListener("click",function(e){
        document.querySelector("#c2").innerHTML=car2.showMore()
       
       })

       document.querySelector("#cc3").addEventListener("click",function(e){
        document.querySelector("#c3").innerHTML=car3.showMore()
       
       })
       function start(){
       
        let arr=[car1,car2,car3]
        let min=1000000000000000000000000
        let res=""
       for(let i=0;i<arr.length;i++)
        if(arr[i].price<min){
        min=arr[i].price;
        res="the chepest car is "+ arr[i].company+"the price "+ arr[i].price;}
       
       alert(res)
    
}
       
       window.addEventListener("load",start);

// console.log(car1)