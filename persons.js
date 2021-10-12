class PersonClass{

    constructor(name, age, gender, interestsAsArray, img)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.interestsAsArray=interestsAsArray;
        this.img=img;
    }

    bio(){
        console.log(this.name + " - " + this.age +" - " + this.interestsAsArray[0] +" "+ this.interestsAsArray[1] );
    }
}


p1 = new PersonClass("Saad",23,"male",["VideoGames","TableTinees","gym"],"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")
p2 = new PersonClass("jacob",19,"male",["sleep",'gym',"filming"],"https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=")
p3 = new PersonClass("alex",25,"male",["coding","football","stayHome"],"https://media.istockphoto.com/photos/african-mature-man-with-spectacles-picture-id1152603187?k=20&m=1152603187&s=612x612&w=0&h=GFzEtU3SUuueO3bqgM3GbQ8GTehFBM-V4CRPSbreims=")

let listOfPersons = [p1,p2,p3];

// show the image 
pr1 = document.querySelector("#person1")
pr1.src=p1.img

pr2 = document.querySelector("#person2")
pr2.src=p2.img

pr3 = document.querySelector("#person3")
pr3.src=p3.img


// show alart message
function alertMessage(persnalNumber)
{
    alert("Name: " + persnalNumber.name + "\r\n" +" Age: " + persnalNumber.age + "\r\n"+ " 2interests are ( " + persnalNumber.interestsAsArray[0] +" & "+ persnalNumber.interestsAsArray[1] + " )"  )

}