const burger = document.querySelector("#burger");

const sidenav = document.querySelector("#side-nav");

const border1 = document.querySelectorAll(".wrap .header .bor");
const border2 = document.querySelector(".wrap .header .bor1");
const nav = document.querySelectorAll(".side-nav ul li a");



burger.addEventListener("click", function () {
    sidenav.classList.toggle("side-nav-open");
});

burger.addEventListener("click", function () {
    border1[0].classList.toggle("close1");
    border1[0].classList.toggle("bor");
    border2.classList.toggle("close2");
    border2.classList.toggle("bor1");
    border1[1].classList.toggle("close3");
    border1[1].classList.toggle("bor");
});

burger.addEventListener("click", function () {
    let i = 1.5;
    nav.forEach(function (coba) {
        if (coba.classList.contains("opac-close")){
            coba.style.transition = "" + i + "s";
            coba.classList.toggle("opac-close");
            coba.classList.toggle("opac-open");
            i = i + 1.5;
        }else if(coba.classList.contains("opac-open")){
            coba.style.transition = "0s";
            coba.classList.toggle("opac-close");
            coba.classList.toggle("opac-open");
        }

    });
    i = 0;
});