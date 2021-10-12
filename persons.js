//Create at least 3 person objects.
//The person object is made up of a number of PROPERTIES that describe 
//the person(name, age, gender, interests(as array) and img) and of a METHOD: bio.
//When a user click on image the bio

//function will be used to display the name, age, first two interests in appropriate message as alert.

function person(name, age, gender, interests, img) {
    this.name = name,
        this.age = age,
        this.gender = gender,
        this.interests = interests,
        this.img = img
    this.bio = function() {
        return "Name: " + this.name + "\n Age: " + this.age + "\nGender: " + this.gender + "\nInterests: " +
            interests[0] + " ," + interests[1]
    }
}
//img 1
const pic1 = document.createElement('img')
pic1.src = 'sarah.jpg'
pic1.id = 'img1'
document.body.appendChild(pic1);
pic1.style = 'width:60%'


//im 2
const pic2 = document.createElement('img')
pic2.src = 'maha.jpg'
pic2.id = 'img2'
document.body.appendChild(pic2);
pic2.style = 'width:60%'
    //img 3 
const pic3 = document.createElement('img')
pic3.src = 'nada.jpg'
pic3.id = 'img3'
document.body.appendChild(pic3);
pic3.style = 'width:60%'

//person 1 sarah
const person1 = new person('Sarah', 22, 'Female', ["Reding", "playing ", "coding"], pic1)
    //person 2 Maha
const person2 = new person('Maha', 30, 'Female', ["cocking", "playing ", "coding"], pic2)
    //person 3 Nada
const person3 = new person('Nada', 34, 'Female', ["palyig game", "watching movie", "coding"], pic3)


document.getElementById('img1').addEventListener('click', alert(person1.bio()))
document.getElementById('img1').addEventListener('click', alert(person2.bio()))
document.getElementById('img1').addEventListener('click', alert(person3.bio()))