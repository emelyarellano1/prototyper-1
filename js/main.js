$('#about-menu').typewrite({
    cursor: '',
  speed: 4,
  actions: [
    {type: 'About'},
    {delay: 1500}
  ]
});

$('#video-menu').typewrite({
    cursor: '',
    speed: 4,
  actions: [
    {type: 'Video'},
    {delay: 1500}
  ]
});

$('#gallery-menu').typewrite({
    cursor: '',
    speed: 4,
  actions: [
    {type: 'Gallery'},
    {delay: 1500}
  ]
});

$('#contact-menu').typewrite({
    cursor: '',
    speed: 4,
  actions: [
    {type: 'Contact'},
    {delay: 1500}
  ]
});

$(document).ready(function () { 
  $('body').sectionScroll(); // Easy Peasy Lemon Squeezy 
  // iniciando circull scroll en la seccion about us
  /*$('html').csInit({
    wheelDelay: 300,
    wheelDistance: 100,
    wheelEase: 'easeOutQuad'  
  });*/

  $('#about').csTween({

    // begin / end scroll position
    begin: 0,
    end: 300,

    // custom CSS classes
    from: {
      letterSpacing: '0',
      opacity: '1'
    },
    to: {
        letterSpacing: '2vw',
        opacity: '0'
    },

    // easing effect
    easing: 'easeOutExpo',

    // callbacks
    onStart: function(el){
      //console.log('onStart');
    },

    onProgress: function(el,p){
      //console.log(p);
    },

    onComplete: function(el){
      //console.log('onComplete');
      $(el).hide();
    },

    onReverseStart: function(el){
      //console.log('onReverseStart');
      $(el).show();
    },

    onReverseComplete: function(el){
      //console.log('onReverseComplete');
    }

  });


}); 
