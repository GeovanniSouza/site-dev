let countDownDate = new Date("March 17, 2020 16:59:59").getTime();

let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.querySelector("#counter-d").innerHTML = days;

    document.querySelector("#counter-h").innerHTML = hours;
    document.querySelector("#counter-m").innerHTML = minutes;
    document.querySelector("#counter-s").innerHTML = seconds;



    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#counter-d").innerHTML = 0;
        document.querySelector("#counter-h").innerHTML = 0;
        document.querySelector("#counter-m").innerHTML = 0;
        document.querySelector("#counter-s").innerHTML = 0;

    }

}, 1000);
