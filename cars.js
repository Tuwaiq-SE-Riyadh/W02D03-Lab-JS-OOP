    //contracter
    //company, model, colour, image, registration number, price.
    function makeCar(company, model, imge, registrationNumber, price) {
        this.company = company,
            this.model = model,
            this.imge = imge,
            this.price = price,
            this.showMore = function() {
                return "Company: " +
                    this.company + "\n Model: " + this.model + "\nprice: " + this.price + " SAR"

            }
    }
    //img 1 
    const pic1 = document.createElement('img')
    pic1.src = 'bm.jpg'
    pic1.id = 'img1'
    document.body.appendChild(pic1)
    pic1.style = 'width:60%'

    let p = document.createElement('p')
    p.id = 'p1'

    p.style = 'font-size:30px'
    document.body.append(p)

    //img 2
    const pic2 = document.createElement('img')
    pic2.src = 'm.jpg'
    pic2.id = 'img2'
    document.body.appendChild(pic2);
    pic2.style = 'width:60%'

    let p2 = document.createElement('p')
    p2.id = 'p2'
    p2.style = 'font-size:30px'
    document.body.append(p2)
        //img 3
    const pic3 = document.createElement('img')
    pic3.src = 'rose.jpg'
    pic3.id = 'img3'
    document.body.appendChild(pic3);
    pic3.style = 'width:60%'

    let p3 = document.createElement('p')
    p3.id = 'p3'
    p3.style = 'font-size:30px'
    document.body.append(p3)


    const car1 = new makeCar('BMW', 2020, pic1, 2763, 500000)
    const car2 = new makeCar('Mercedes', 2018, pic2, 3245, 700000)
    const car3 = new makeCar('Rolls-Royce', 2019, pic3, 1995 - 2019, 1300000)



    function show1() {
        //   console.log(car1.price);
        let ch = document.getElementById('p1').innerText = car1.showMore()
        return ch

    }

    function show2() {
        const sh = document.getElementById('p2').innerText = car2.showMore()
        return sh

    }

    function show3() {
        const sh = document.getElementById('p3').innerText = car3.showMore()
        return sh
    }

    //cheapest car 
    const cars = [car1, car2, car3];
    let ch = car1;
    const c = cars.forEach(function n(cars) {
        if (ch.price >= cars.price) {
            ch.price = cars.price
            ch = cars
        }
        return ch
    })

    window.addEventListener('onload', alert(ch.showMore()))

    document.getElementById('img1').addEventListener('click', function() {
        document.getElementById('p1').innerText = car1.showMore()
    });

    document.getElementById('img2').addEventListener('click', function() {
        document.getElementById('p2').innerText = car2.showMore()
    });

    document.getElementById('img3').addEventListener('click', function() {
        document.getElementById('p3').innerText = car3.showMore()
    });