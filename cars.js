//  company, model, colour, image, registration number, price.
function car (company, model, colour, image, registrationNumber , price )
{
    return{
        company: company,
        model: model,
        colour: colour,
        image: image,
        registrationNumber: registrationNumber,
        price: price,
        showMore:function()
        {
            return"This is showMore function !"
        },
    };
}



const car1 = car("toyota","suv","white" ,"path1",123,50000)
const car2 = car("ford","hatchback", "white","path2",321,30000)
const car3 = car("nissan", "suv", "light blue","path3",213,20000)

let arrayOfcars = [car1,car2,car3]

function showCar(carFromHTML)
{
    // try to find the witch car .
    let theCar ;
    if(car1.company === carFromHTML)
    {
        theCarChosen = car1;
        
         // show the car info 
        const theCar = document.querySelector("#toyotaLabel")
        theCar.innerHTML=theCarChosen.company +" "+ theCarChosen.model +" "+ theCarChosen.colour +" "+ theCarChosen.image +" "+ theCarChosen.registrationNumber +" "+ theCarChosen.price
    }
    if(car2.company === carFromHTML)
    {
        theCarChosen = car2;
         // show the car info 
        const theCar = document.querySelector("#fordLabel")
        theCar.innerHTML=theCarChosen.company +" "+ theCarChosen.model +" "+ theCarChosen.colour +" "+ theCarChosen.image +" "+ theCarChosen.registrationNumber +" "+ theCarChosen.price
    }
    if(car3.company === carFromHTML)
    {
        theCarChosen = car3;
         // show the car info 
        const theCar = document.querySelector("#nissanLabel")
        theCar.innerHTML=theCarChosen.company +" "+ theCarChosen.model +" "+ theCarChosen.colour +" "+ theCarChosen.image +" "+ theCarChosen.registrationNumber +" "+ theCarChosen.price
    }
}

// alart the cheapest car 
function cheapestCar()
{
    let theCheapest =  arrayOfcars[0].price;
    let theObjectOfCheapest ;
    for( let i = 0 ; i <= arrayOfcars.length-1 ; i++)
    {
        if(theCheapest> arrayOfcars[i].price)
        {
            theCheapest = arrayOfcars[i].price
            theObjectOfCheapest = arrayOfcars[i]
        }
    }
    alert("The cheapest is : " + theObjectOfCheapest.company )
}

