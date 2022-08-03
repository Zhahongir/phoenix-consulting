// Call Back
$(document).ready(function() { 

    $('[data-modal=callBack]').on('click', function() {
        $('.modal').fadeIn();
    });
    $('.modal__wrap__close').on('click', function() {
        $('.modal').fadeOut();
    });
});


// Service
$(document).ready(function() { 

    $('[data-modal=serviceBtn]').on('click', function() {
        $('.connect').fadeIn();
    });
    $('.connect__wrap__close').on('click', function() {
        $('.connect').fadeOut();
    });
});