const img1= document.querySelector("#img1")
const person1 = {
    name:"Ali",
    age:22,
    gender:"male",
    interests:["Playing online games","Playing football","Watching anime"] ,
    img:"https://www.pngfind.com/pngs/m/608-6087418_man-icon-free-icon-man-hd-png-download.png",
    bio : function(){
        alert("name: "+person1.name+", age: "+person1.age+", interests1: "+person1.interests[0]+", interests2: "+person1.interests[1]);
    }
}

const img2= document.querySelector("#img2")
const person2 = {
    name:"Ruba",
    age:24,
    gender:"female",
    interests:["watching movie on Netflix","coding"] ,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxIEZb7Lp_V-yrCPFNJBVXFlasJav3-yhzEAdCryWSVOm25xEKDyrhQ6NbJtv3hnZCMk&usqp=CAU",
    bio : function(){
        alert("name: "+person2.name+", age: "+person2.age+", interests1: "+person2.interests[0]+", interests2: "+person2.interests[1]);
    }
}


const img3= document.querySelector("#img3")
const person3 = {
    name:"Omar",
    age:30,
    gender:"male",
    interests:["playing basketball","watching arabic series","going to gym"] ,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxIEZb7Lp_V-yrCPFNJBVXFlasJav3-yhzEAdCryWSVOm25xEKDyrhQ6NbJtv3hnZCMk&usqp=CAU",
    bio : function(){
        alert("name: "+person3.name+", age: "+person3.age+", interests1: "+person3.interests[0]+", interests2: "+person3.interests[1]);
    }
}

