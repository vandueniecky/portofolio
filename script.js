// click trigger
$('.scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

// GSAP 
gsap.registerPlugin(TextPlugin);
gsap.from('nav', {duration:1.2, y: '-100%', opacity:0, ease:'bounce'});
gsap.to('.lead', {duration:2, delay:2.2, text: 'Graphic Design | Web Developer' });
gsap.to('.display-4', {duration:1, delay:1.5, text: 'Van Due Niecky'});
gsap.from('.welcome-section img', {duration:1.5, rotateY: 360, opacity:0});

// AOS JS
AOS.init({
    once: true, // Animasi dijalankan satu kali saja. Kecuali di Load.
    offset: 400, // Offset Animasi berjalan sebelum 100px
});