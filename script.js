// paralax effects
$ (window).scroll(function(){

    // Welcome Portofolio
    var wScroll = $(this).scrollTop();

    $ ('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    
    });
    $ ('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2.3 +'%)'
    
    });
    $ ('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%'

    });
});

// click trigger
$('.scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

// GSAP 
gsap.registerPlugin(TextPlugin);
gsap.from('nav', {duration:1.2, y: '-100%', opacity:0, ease:'bounce', delay:2});
gsap.to('.lead', {duration:2, delay:4.2, text: 'Graphic Design | Front-End Developer' });
gsap.to('.display-4', {duration:1, delay:3.5, text: 'Van Due Niecky'});
gsap.from('.welcome-section img', {duration:1.5, rotateY: 360, opacity:0, delay:2.1});
gsap.from('.project1 img', {duration:1.5, rotateY: 360, opacity:0, delay:2});


// AOS JS
AOS.init({
    once: true, // Animasi dijalankan satu kali saja. Kecuali di Load.
    offset: 400, // Offset Animasi berjalan sebelum 100px
});

// Fake Loader JS
$(document).ready(function () {
    $.fakeLoader({
        bgColor: '#1d1e22',
        spinner:"spinner2"
    });
});
