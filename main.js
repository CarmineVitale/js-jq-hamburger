//Hamburger menu: 
//mostrare / nascondere il menu principale 
//(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

$('.header-right>a').click(function () { 
    $('.hamburger-menu').addClass('active');
    
});

$('a.close').click(function () { 
    $('.hamburger-menu').removeClass('active');
    
});