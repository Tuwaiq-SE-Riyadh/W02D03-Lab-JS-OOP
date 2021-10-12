function Person (name, age, gender, interests){
    this.name=name
    this.age=age
    this.gender=gender
    this.interests=interests
    this.bio =function(){
        let imo=[];
        for (let i=0;i<2;i++){
        imo[i]=interests[i];
        }
        return " the Name is "+name+" old "+age+"the Gender "+gender+" the 2 of interests: "+imo;
    }
   }


const person1= new Person("Amal",22,"Fmale",["Cooking","reading","writing"])
const person2= new Person("Mohammed",35,"male",["gaming","plying"])
const person3= new Person("Sara",20,"Fmale",["writing novels","drowing"])

document.querySelector("#cc1").addEventListener("click",function(e){
    alert(person1.bio())
   
   })
   document.querySelector("#cc2").addEventListener("click",function(e){
    alert(person2.bio())
   
   })
   document.querySelector("#cc3").addEventListener("click",function(e){
    alert(person3.bio())
   
   })