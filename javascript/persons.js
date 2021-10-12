function Person(name, age, gender, image) {

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.image = image;

}


// Create a Person object
const Person1 = new Person("ali", 25, "mela", "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80");
const Person2 = new Person("moheemd", 40, "mela", "https://dagmarharjutab.files.wordpress.com/2019/02/pexels-photo-555790.jpg");
const Person3 = new Person("abdullah", 35, "mela", "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg");


    const box1 = document.querySelector('#box1') 
    const img1 = document.createElement('img')
    img1.src = Person1.image
    img1.id = "image1";
    img1.style.width = "250px"
    img1.style.height = "250px"
    img1.innerHTML = "Person1"
    box1.append(img1)


    const box2 = document.querySelector('#box2') 
    const img2 = document.createElement('img')
    img2.src = Person2.image
    img2.id = "image2";
    img2.style.width = "250px"
    img2.style.height = "250px"
    img2.innerHTML = "Person1"
    box2.append(img2)


    const box3 = document.querySelector('#box3') 
    const img3 = document.createElement('img')
    img3.src = Person3.image
    img3.id = "image3";
    img3.style.width = "250px"
    img3.style.height = "250px"
    img3.innerHTML = "Person3"
    box3.append(img3)

    document.querySelector('#image1').addEventListener("click", function (e) {

        alert("name : " + Person1.name + " age : " + Person1.age + " Model : " + Person1.gender)

    })

    document.querySelector('#image2').addEventListener("click", function (e) {

        alert("name : " + Person2.name + " age : " + Person2.age + " Model : " + Person2.gender)

    })

    document.querySelector('#image3').addEventListener("click", function (e) {

        alert("name : " + Person3.name + " age : " + Person3.age + " Model : " + Person3.gender)

    })
     