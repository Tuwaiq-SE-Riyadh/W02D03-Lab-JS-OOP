
//was not sure how to assign the array parameter in the constructor so I found help at
//https://stackoverflow.com/questions/2856059/passing-an-array-as-a-function-parameter-in-javascript
  
class Persons  {
    constructor(name, age, gender,interests, img) {
      this.name = name
      this.age = age;
      this.gender = gender
      this.interests=interests
      this.img=img

    }

    
    bio(){
     
        return "Person name: " +this.name+"\n  person age: "+this.age+"\n person gender: "+this.gender+"\n person interests: "+ this.interests

    }
}


const body=document.querySelector("body")

let img1 = document.createElement("img")
let img2 = document.createElement("img")
let img3 = document.createElement("img")

img1.src = "woman.jpg"
img2.src = "unnamed.jpg"
img3.src = "unnamed (1).jpg"
img1.style.width='30%'
img2.style.width='33%'
img3.style.width='30%'

const prsn1 =new Persons("Sam", 14, "female",["dance","sleep","TV"],img1)
const prsn2 = new Persons("Lee", 18, "male",["walking", "sleeping", "eating"],img2)
const prsn3 =new  Persons("Bob", 19, "male",["driving", "diving","swimming"],img3)

body.append(prsn1.img)
body.append(prsn2.img)
body.append(prsn3.img)


img1.addEventListener('click', (event) => {
    alert( prsn1.bio());
  });

  img2.addEventListener('click', (event) => {
    alert( prsn2.bio());
  });

  img3.addEventListener('click', (event) => {
    alert( prsn3.bio());
  });



  
