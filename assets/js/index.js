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

        document.getElementById("menu1").classList.remove("active");
        document.getElementById("menu3").classList.remove("active");
        document.getElementById("menu4").classList.remove("active");

        document.getElementById("menu2").classList.add("active");
    }
    //PROJETS
    else if (winScroll > 1535 && winScroll < 1592) {

        document.getElementById("screen").classList.remove("show");

        document.getElementById("menu1").classList.remove("active");
        document.getElementById("menu2").classList.remove("active");
        document.getElementById("menu4").classList.remove("active");

        document.getElementById("menu3").classList.add("active");
    }
    //A PROPOS
    else if (winScroll > 2500) {

        document.getElementById("screen").classList.remove("show");

        document.getElementById("menu1").classList.remove("active");
        document.getElementById("menu2").classList.remove("active");
        document.getElementById("menu3").classList.remove("active");

        document.getElementById("menu4").classList.add("active");
    }
    else if (winScroll < 510) {

        document.getElementById("screen").classList.remove("show");

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

    if (document.getElementById("buttonCV").style.transform == 'scale(1)') {
        document.getElementById("buttonCV").style.transform = 'scale(2)';
        document.getElementById("buttonCV").style.borderStyle = 'solid';
        document.getElementById("CV").style.display = "none";

        if (window.matchMedia("(min-width: 1024px)").matches) {
            document.getElementById("buttonCV").style.marginBottom = "300px";
            document.getElementById("buttonCV").style.marginTop = "100px";
        }
        else if (window.matchMedia("(min-width: 768px)").matches) {
            document.getElementById("buttonCV").style.marginBottom = "112px";
            document.getElementById("buttonCV").style.marginTop = "-184px";
        }
        else {
            document.getElementById("buttonCV").style.marginBottom = "154px";
            document.getElementById("buttonCV").style.marginTop = "-200px";
        }

    } else {
        document.getElementById("buttonCV").style.transform = 'scale(1)';
        document.getElementById("buttonCV").style.borderStyle = 'unset';
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