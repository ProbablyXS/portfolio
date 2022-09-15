/* SCROLLING PAGE */

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 700) {
        document.getElementById("navbar").style.position = 'fixed';
        document.getElementById("navbar").style.left = 0;
        document.getElementById("navbar").style.right = 0;

        document.getElementById("menu1").classList.remove("active");
        document.getElementById("menu2").classList.add("active");

        navLinks.classList.remove("toggled"); //Hide navbar
    }
    else {
        document.getElementById("navbar").style.position = 'unset';
        document.getElementById("navbar").style.left = 0;
        document.getElementById("navbar").style.right = 0;

        document.getElementById("menu2").classList.remove("active");
        document.getElementById("menu1").classList.add("active");
    }
}

/* BUTTON SHOW CURRICULUM VITAE */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const CV = document.getElementById("CV");

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