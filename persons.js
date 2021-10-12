const person = [
    {
        name:"Ahmed",
        age:"18",
        gender:"male",
        interests:["football","cars"],
        img:document.querySelector("#img1").src = "imges/p1.png",
        bio: function(){
            document.querySelector("#p1").innerHTML = "Name : " + person[0].name;
            document.querySelector("#p2").innerHTML = "Age : " + person[0].age;
            document.querySelector("#p3").innerHTML = "Gender : " + person[0].gender;
            document.querySelector("#p4").innerHTML = "Interests : " + person[0].interests[0] + " And " + person[0].interests[1];
        }
    },

    {
        name:"Omar",
        age:"20",
        gender:"male",
        interests:["Football","Swimming"],
        img:document.querySelector("#img2").src = "imges/p2.jfif",
        bio: function(){
            document.querySelector("#p1").innerHTML = "Name : " + person[1].name;
            document.querySelector("#p2").innerHTML = "Age : " + person[1].age;
            document.querySelector("#p3").innerHTML = "Gender : " + person[1].gender;
            document.querySelector("#p4").innerHTML = "Interests : " + person[1].interests[0] + " And " + person[1].interests[1];
        }
    },


    {
        name:"Tameem",
        age:"24",
        gender:"male",
        interests:["cars", "Swimming"],
        img:document.querySelector("#img3").src = "imges/p3.png",
        bio: function(){
            document.querySelector("#p1").innerHTML = "Name : " + person[2].name;
            document.querySelector("#p2").innerHTML = "Age : " + person[2].age;
            document.querySelector("#p3").innerHTML = "Gender : " + person[2].gender;
            document.querySelector("#p4").innerHTML = "Interests : " + person[2].interests[0] + " And " + person[2].interests[1];
        }
    }
]