

    function car(company, model, colour, image, registrationNumber, price) {

        this.company = company;
        this.model = model;
        this.colour = colour;
        this.image = image;
        this.registrationNumber = registrationNumber;
        this.price = price;
    }

  
  // Create a Person object
  const car1 = new car("MERCEDES", 2015, "white", "https://sayartii.com/uploads/cars/17592186318687/a814bb21a08049d8ca417684dae83a852dc18f53_med.jpg", 1235659595, "100000");
  const car2 = new car("HONDA", 207, "grean", "https://upload.wikimedia.org/wikipedia/commons/9/90/2007-Honda-Accord-Sedan02.jpg", 1235659595, "50000");
  const car3 = new car("TOYOTA", 2020, "brouwn", "https://cdn.motor1.com/images/mgl/KPlNl/s1/2022-toyota-tundra-unofficial-rendering.jpg", 1235659595, "2000");



    const box1 = document.querySelector('#box1') 
    const img1 = document.createElement('img')
    img1.src = car1.image
    img1.id = "image1";
    img1.style.width = "250px"
    img1.style.height = "250px"
    img1.innerHTML = "car1"
    box1.append(img1)

    document.querySelector('#image1').addEventListener("click", function (e) {
     
    const ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = "company : " + car1.company
    box1.append(li1)

    let li2 = document.createElement('li')
    li2.innerHTML = "model : " + car1.model
    box1.append(li2)

    let li3 = document.createElement('li')
    li3.innerHTML = "colour : " + car1.colour
    box1.append(li3)

    let li4 = document.createElement('li')
    li4.innerHTML = "registration number : " + car1.registrationNumber
    box1.append(li4)

    let li5 = document.createElement('li')
    li5.innerHTML = "price : $" + car1.price
    box1.append(li5)
          
    })



    const box2 = document.querySelector('#box2') 
    const img2 = document.createElement('img')
    img2.src = car2.image
    img2.id = "image2";
    img2.style.width = "250px"
    img2.style.height = "250px"
    img2.innerHTML = "car2"
    box2.append(img2)

    document.querySelector('#image2').addEventListener("click", function (e) {
     
    const ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = "company : " + car2.company
    box2.append(li1)

    let li2 = document.createElement('li')
    li2.innerHTML = "model : " + car2.model
    box2.append(li2)

    let li3 = document.createElement('li')
    li3.innerHTML = "colour : " + car2.colour
    box2.append(li3)

    let li4 = document.createElement('li')
    li4.innerHTML = "registration number : " + car2.registrationNumber
    box2.append(li4)

    let li5 = document.createElement('li')
    li5.innerHTML = "price : $" + car2.price
    box2.append(li5)
          
    })


    const box3 = document.querySelector('#box3') 
    const img3 = document.createElement('img')
    img3.src = car3.image
    img3.id = "image3";
    img3.style.width = "250px"
    img3.style.height = "250px"
    img3.innerHTML = "car3"
    box3.append(img3)

    document.querySelector('#image3').addEventListener("click", function (e) {
     
    const ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = "company :" + car3.company
    box3.append(li1)

    let li2 = document.createElement('li')
    li2.innerHTML = "model : " + car3.model
    box3.append(li2)

    let li3 = document.createElement('li')
    li3.innerHTML = "colour : " + car3.colour
    box3.append(li3)

    let li4 = document.createElement('li')
    li4.innerHTML = "registration number : " + car3.registrationNumber
    box3.append(li4)

    let li5 = document.createElement('li')
    li5.innerHTML = "price : $" + car3.price
    box3.append(li5)
          
    })

//---------------------------------cheapest----------------------------

    function cheapest () {
    
    const allCar =[car1 ,car2, car3]
    let lowPricecar = car1.price
    let carLow =[]

    allCar.forEach(function (element) {
       
        
        if(lowPricecar >= element.price){
        lowPricecar = element
    
        }   
    
})

    carLow.push(lowPricecar)
    alert("prise : " + carLow[0].price + " Compeny : " + carLow[0].company + " Model : " + carLow[0].model)

}


cheapest ()

