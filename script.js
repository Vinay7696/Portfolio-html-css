$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scroll > 500){
        $('.scroll-uo-btn').addClass("show")
        }else{
            $('.scroll-uo-btn').removeClass("show")
        }
    });

    // slide-up script 

    $('.scroll-uo-btn').click(function(){
        $('.html').animate({scrolltop: 0});
    });
    // toggle menu navbar
    $('.menu-btn').click(function(){
        $('.navbar .menus').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //    typing animation script 
        var typed = new Typed(".typing", {
            strings: ["YouTuber","Developer","Blogger","Designer","Freelancr"],
                 typeSpeed: 100,
                 backSpeed: 60,
                 loop: true
        });

        var typed = new Typed(".typing-2", {
            strings: ["YouTuber","Developer","Blogger","Designer","Freelancr"],
                 typeSpeed: 100,
                 backSpeed: 60,
                 loop: true
        });
    // owl carousel script 
     $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                 items:1,
                 nav: false
            },
            600:{
                items:2,
                nav: false
           },
           1000:{
            items:3,
            nav: false
             }
        }
     });
});


