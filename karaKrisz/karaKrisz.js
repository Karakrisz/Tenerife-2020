$(document).ready(function() {
    apartmentContentToggle();
    // imgapartmentContentToggle();

    if (get("ref")) {
        setTimeout(() => {
            let url = get("ref");
            if (validUrls.find(e => e === url)) {
                window.location.href = url;
            }
        }, 500)
    }
});

const validUrls = [
    "https://magicmomentexcursions.negocio.site"
]

function get(name) {
    var r = /[?&]([^=#]+)=([^&#]*)/g,
        p = {},
        match;
    while (match = r.exec(window.location)) p[match[1]] = match[2];
    return p[name];
}

function apartmentContentToggle() {
    $("#A70").click(function() {
        $(".counter__C22-content").hide();
        $(".counter__A70-content").fadeIn();
    });
    $("#C22").click(function() {
        $(".counter__C22-content").fadeIn();
        $(".counter__A70-content").hide();
    });
}


// document.querySelectorAll(".particles-opinions__link").forEach(particlesOpinionsLink => {
//     particlesOpinionsLink.addEventListener('click', e => {
//         let text = document.getElementsByClassName("particles-opinions__p--active");
//         var i;
//         for (i = 0; i < text.length; i++) {
//             if (text[i].style.display == "none") {
//                 text[i].style.display = "block";
//             } else {
//                 text[i].style.display = "none";
//             }
//         }
//     });
// });

// Declaring variables for each IDS
var counterPlaceHolder = document.getElementById("counter-placeholder");
var btnIncrement = document.getElementById("btn-increment");

var number = 21;

// function changeColor(number) {
//     var color = "";
//     if (number < 0) {
//         color = "red";
//     } else if (number > 0) {
//         color = "green";
//     } else {
//         color = "white";
//     }
//     return color;
// }

btnIncrement.addEventListener("click", function() {
    number++;
    counterPlaceHolder.innerHTML = number;
    // counterPlaceHolder.style.color = changeColor(number);
});

var date = new Date();
date.setTime(date.getTime() + (60 * 1000));
date.setTime(date.getTime() + (60 * 1000));