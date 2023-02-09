$('.page-scroll').on('click', function(e){

    var tujuan = $(this).attr('href');
    var elemen = $(tujuan);
    
    $('html,body').animate({
        scrollTop: elemen.offset().top - 50
    }, 1250, 'easeOutExpo', 'easeOutBounce')
   
    e.preventDefault();

});   