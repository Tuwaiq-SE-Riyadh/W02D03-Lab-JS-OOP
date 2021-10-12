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



const car1 = car("toyota","suv","white" ,"https://media.ed.edmunds-media.com/toyota/c-hr/2021/oem/2021_toyota_c-hr_4dr-suv_limited_fq_oem_1_1600.jpg",123,50000)
const car2 = car("ford","hatchback", "white","https://www.gannett-cdn.com/-mm-/d6eb73361ac5cc11901dc05d813fb63d11b43246/c=0-117-2304-1419/local/-/media/2018/01/19/USATODAY/USATODAY/636519786314510593-18-FUSI-SE-34FrntPassStaticRooftop-mj.jpg",321,30000)
const car3 = car("nissan", "suv", "light blue","https://s3.eu-central-1.amazonaws.com/v3-ncg.motory.com/vehicle-new/800x600/l-1631178472.2643-6139cee840849.webp",213,20000)

// show the image 
    c1 = document.querySelector("#toyota")
    c1.src=car1.image

    c2 = document.querySelector("#ford")
    c2.src=car2.image

    c3 = document.querySelector("#nissan")
    c3.src=car3.image


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
        theCar.innerHTML=theCarChosen.company +" "+ theCarChosen.model +" "+ theCarChosen.colour +" "+  theCarChosen.registrationNumber +" "+ theCarChosen.price
    }
    if(car2.company === carFromHTML)
    {
        theCarChosen = car2;
         // show the car info 
        const theCar = document.querySelector("#fordLabel")
        theCar.innerHTML=theCarChosen.company +" "+ theCarChosen.model +" "+ theCarChosen.colour +" "+  theCarChosen.registrationNumber +" "+ theCarChosen.price
    }
    if(car3.company === carFromHTML)
    {
        theCarChosen = car3;
         // show the car info 
        const theCar = document.querySelector("#nissanLabel")
        theCar.innerHTML=theCarChosen.company +" "+ theCarChosen.model +" "+ theCarChosen.colour +" "+ theCarChosen.registrationNumber +" "+ theCarChosen.price
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

