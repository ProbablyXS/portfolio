/* BUTTON SHOW CURRICULUM VITAE */

const CV = document.getElementById("CV");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Toggle dropdown list display on hamburger click
CV.addEventListener("click", async event => {

    await sleep(20);

    if (document.getElementById("CV").innerHTML == "Fermer le CV") {
        document.getElementById("CV").innerHTML = "Ouvrir le CV";
    } else {
        (document.getElementById("CV").innerHTML = "Fermer le CV")
    }
})

function picture() {
    var pic = "assets/img/CV.jpg"
    if (document.getElementById("buttonImgCV").style.display == 'block') {
        document.getElementById('buttonImgCV').src = pic.replace('90x90', '225x225');
        document.getElementById('buttonImgCV').style.display = 'none';
    }
    else {
        document.getElementById('buttonImgCV').src = pic.replace('90x90', '225x225');
        document.getElementById('buttonImgCV').style.display = 'block';
    }
}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}