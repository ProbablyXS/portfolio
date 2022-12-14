//loading page

$(document).ready(function () {

    setTimeout(function () {
        $('section').removeClass('HIDDEN');
        $('section').addClass('SHOWED');
    }, 2000);

});

//FOOTER

document.getElementById("year").innerHTML = new Date().getFullYear();

/* SCROLLING PAGE */

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    document.getElementById("navbar").style.position = 'fixed';
    document.getElementById("navbar").style.left = 0;
    document.getElementById("navbar").style.right = 0;

    //PRESENTATION
    if (winScroll > 399 && winScroll < 1536) {

        document.getElementById("screen").classList.add("show");
        document.getElementById("screen").classList.remove("hide");

        document.getElementById("menu1").classList.remove("active");
        document.getElementById("menu3").classList.remove("active");
        document.getElementById("menu4").classList.remove("active");

        document.getElementById("menu2").classList.add("active");
    }
    //PROJETS
    else if (winScroll > 1535 && winScroll < 1592) {

        document.getElementById("screen").classList.remove("show");
        document.getElementById("screen").classList.add("hide");

        document.getElementById("menu1").classList.remove("active");
        document.getElementById("menu2").classList.remove("active");
        document.getElementById("menu4").classList.remove("active");

        document.getElementById("menu3").classList.add("active");
    }
    //A PROPOS
    else if (winScroll > 2500) {

        document.getElementById("screen").classList.remove("show");
        document.getElementById("screen").classList.add("hide");

        document.getElementById("menu1").classList.remove("active");
        document.getElementById("menu2").classList.remove("active");
        document.getElementById("menu3").classList.remove("active");

        document.getElementById("menu4").classList.add("active");
    }
    else if (winScroll < 510) {

        document.getElementById("screen").classList.remove("show");
        document.getElementById("screen").classList.add("hide");

        document.getElementById("navbar").style.position = 'unset';
        document.getElementById("navbar").style.left = 0;
        document.getElementById("navbar").style.right = 0;

        document.getElementById("menu2").classList.remove("active");
        document.getElementById("menu3").classList.remove("active");
        document.getElementById("menu4").classList.remove("active");

        document.getElementById("menu1").classList.add("active");
    }
}

/* BUTTON SHOW CURRICULUM VITAE */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const CV = document.getElementById("CV");
const buttonImgCV = document.getElementById("buttonImgCV");

// buttonImgCV click
buttonImgCV.addEventListener("click", async event => {

    await sleep(20);

    if (document.getElementById("buttonImgCV").style.width == '75%') {
        document.getElementById("CV").style.display = "none";

        if (window.matchMedia("(min-width: 1024px)").matches) {
            document.getElementById("buttonImgCV").style.width = '90%'
            document.getElementById("buttonCV").style.marginBottom = "300px";
            document.getElementById("buttonCV").style.marginTop = "100px";
        }
        else if (window.matchMedia("(min-width: 768px)").matches) {
            document.getElementById("buttonImgCV").style.width = '90%'
            document.getElementById("buttonCV").style.marginBottom = "112px";
            document.getElementById("buttonCV").style.marginTop = "-184px";
        }
        else {
            document.getElementById("buttonImgCV").style.width = '100%'
            document.getElementById("buttonCV").style.marginBottom = "154px";
            document.getElementById("buttonCV").style.marginTop = "-200px";
        }

    } else {
        document.getElementById("buttonImgCV").style.width = '75%'
        document.getElementById("CV").style.display = "block";
        document.getElementById("buttonCV").style.marginBottom = "unset";
        document.getElementById("buttonCV").style.marginTop = "unset";
    }

})

// Toggle dropdown list display on hamburger click
CV.addEventListener("click", async event => {

    await sleep(20);

    var pic = "assets/img/CV.jpg"
    if (document.getElementById("buttonImgCV").style.display == 'block') {
        document.getElementById('buttonImgCV').src = pic.replace('90x90', '225x225');
        document.getElementById('buttonImgCV').style.display = 'none';

        document.getElementById("buttonCV").style.marginTop = '16rem';
    }
    else {
        document.getElementById('buttonImgCV').src = pic.replace('90x90', '225x225');
        document.getElementById('buttonImgCV').style.display = 'block';

        document.getElementById("buttonCV").style.marginTop = '0';
    }

    if (document.getElementById("CV").innerHTML == "Fermer le CV") {
        document.getElementById("CV").innerHTML = "Ouvrir le CV";
    } else {
        (document.getElementById("CV").innerHTML = "Fermer le CV")
    }
})



const buttonRedirection1 = document.getElementById("buttonRedirection1");
const buttonRedirection2 = document.getElementById("buttonRedirection2");
const buttonRedirection3 = document.getElementById("buttonRedirection3");
const buttonRedirection4 = document.getElementById("buttonRedirection4");
const buttonRedirection5 = document.getElementById("buttonRedirection5");
const buttonRedirection6 = document.getElementById("buttonRedirection6");
const buttonRedirection7 = document.getElementById("buttonRedirection7");
const buttonRedirection8 = document.getElementById("buttonRedirection8");

// buttonRedirection1 click
buttonRedirection1.addEventListener("click", async event => {
    await openpage("1");
})
buttonRedirection2.addEventListener("click", async event => {
    await openpage("2");
})
buttonRedirection3.addEventListener("click", async event => {
    await openpage("3");
})
buttonRedirection4.addEventListener("click", async event => {
    await openpage("4");
})
buttonRedirection5.addEventListener("click", async event => {
    await openpage("5");
})
buttonRedirection6.addEventListener("click", async event => {
    await openpage("6");
})
buttonRedirection7.addEventListener("click", async event => {
    await openpage("7");
})
buttonRedirection8.addEventListener("click", async event => {
    await openpage("8");
})

async function openpage(id) {

console.log(id);

    await sleep(200);

    document.body.style.opacity = '0%';

    await sleep(2000);

    if (id === "1") {
        document.location.href = "vecr-software.html";
    }
    if (id === "2") {
        document.location.href = "vecr-software-DB.html";
    }
    if (id === "3") {
        document.location.href = "vecr-software.html";
    }
    if (id === "4") {
        document.location.href = "vecr-software.html";
    }
    if (id === "5") {
        document.location.href = "vecr-software.html";
    }
    if (id === "6") {
        document.location.href = "vecr-software.html";
    }
    if (id === "7") {
        document.location.href = "vecr-software.html";
    }
    if (id === "8") {
        document.location.href = "vecr-software.html";
    }

}