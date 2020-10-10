$(document).ready(function () {
    apartmentContentToggle();
   // imgapartmentContentToggle();
});

function apartmentContentToggle() {
    $("#A70").click(function () {
        $(".counter__C22-content").hide();
        $(".counter__A70-content").fadeIn();
    });
    $("#C22").click(function () {
        $(".counter__C22-content").fadeIn();
        $(".counter__A70-content").hide();
    });
}

// function imgapartmentContentToggle() {
//     $("#work-section__button-content__btn-img-C22").click(function () {
//         $(".A70-img-test").hide();
//         $(".C22-img-test").fadeIn();
//     });
//     $("#work-section__button-content__btn-img-A70").click(function () {
//         $(".A70-img-test").fadeIn();
//         $(".C22-img-test").hide();
//     });
// }