// - Create a file `cars.js`.
// - Within `cars.js`:
//     - Create at least 3 car objects.
//     - Each car object should have the following properties: company, model, 
         //colour, image, registration number, price.

         //     - Each car object should also include a showMore() method. 

//     - Whenever a user clicks on an image of a car, the showMore() method should be called 
      //and all the information about the specific car object, including the registration number, 
      //price etc should be displayed.

//     - Create a function that will be used to display the cheapest car object when `cars.html` is loaded, 
       //as alert.


// Answer >>>>>>>>
carPage()
function carPage() {
    // Objects
    car1 = new CreateCar("Luxus","ES","black","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-lexus-es350-104-1618668203.jpg?crop=0.670xw:1.00xh;0.146xw,0&resize=640:*"
    ,19456791, 47655)
    car2 = new CreateCar("Mercedes","Mercedes-Benz","balck","https://i1.wp.com/images.firstpost.com/wp-content/uploads/2021/04/mercedes-benz-eqs-makes-world-premiere-has-a-range-of-upto-770-km.jpg?w=810&ssl=1"
    ,23456789, 734543)
    car3 = new CreateCar("Audi","A6","green","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-audi-a6-3-0t-99leadgallery-1545842828.jpg?crop=0.981xw:0.901xh;0.0112xw,0.0314xh&resize=1200:*"
    ,18654321, 134677)
    const cars=[car1, car2, car3]

    // Create image of car
    showImage(cars[0].image,cars[0])
    showImage(cars[1].image,cars[1])
    showImage(cars[2].image,cars[2])
    
    cheap(cars)
}
// Heelper Function
function showImage(imgURL, car) {
    const img = document.createElement("img");
    img.src = imgURL
    img.style.width = "300px"
    const p1 = document.createElement("p");
    p1.style.background ="pink"
    img.addEventListener("click", function() {
        console.log("clicked");
        let carinfo = car.showMore()
        console.log(carinfo.registrationNumber);
        p1.innerText = "The company: "+carinfo.company+", The model is: "+carinfo.model+", The color is: "
        +carinfo.colour+", registration Number is: "+carinfo.registrationNumber+", the price is: "+carinfo.price
      })
    document.body.appendChild(img);
    document.body.append(p1);
}

// Create object
function CreateCar(company, model, colour, image, registrationNumber, price) {
    return {
        company : company ,
        model : model,
        colour : colour,
        image : image,
        registrationNumber : registrationNumber,
        price : price,
        showMore: function () {
          return {company, model, colour, registrationNumber, price};
        },
      };
}
  
// cheapest func 
function cheap(cars) {
    window.addEventListener("load", function (e) {
        let cheapest = Infinity
        let carM = ""
        for (let i = 0; i < cars.length; i++) {
            if(cheapest > cars[i].price){
                cheapest = cars[i].price
                carM = cars[i].model
            }
        }
        console.log("cheapest "+cheapest+" mod "+carM);
        alert("The cheapest car is: "+ carM +" , it cost " +cheapest)
    });
}