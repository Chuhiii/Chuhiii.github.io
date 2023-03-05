$(document).ready(function (){
    let offset =  {offset: "80%"};
    let toggle = true;

    //Scroll
    var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
        );
        }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
        );
        }
    });
    } else {
    $(multipleCardCarousel).addClass("slide");
    }

    setInterval(function(){
    $(".drag-img-1").fadeIn();
    $(".drag-img-2").fadeIn();
    $(".drag-img-3").fadeIn();
    $(".drag-img-5").fadeIn();
    $(".drag-img-6").fadeIn();
    $(".drag-img-7").fadeIn();

    if (toggle) {
    $(".drag-img-1").animate({right: '+=50', top: '+=50'});
    $(".drag-img-1").animate({left: '+=50'});
    $(".drag-img-1").animate({top: '-=50'});
    $(".drag-img-1").animate({right: '+=50', top: '+=100'});

    $(".drag-img-2").animate({rights: '+=20', top: '-=50'});
    $(".drag-img-2").animate({right: '+=50'});
    $(".drag-img-2").animate({top: '-=50'});
    $(".drag-img-2").animate({left: '+=50', top: '+=50'});

    $(".drag-img-3").animate({right: '+=40', top: '+=40'});
    $(".drag-img-3").animate({left: '+=50', top: '+=40'});
    $(".drag-img-3").animate({left: '+=40', top: '+=50'});
    $(".drag-img-3").animate({right: '+=90', top: '-=30'});

    $(".drag-img-5").animate({left: '+=50', top: '+=30'});
    $(".drag-img-5").animate({right: '+=50', top: '-=30'});
    $(".drag-img-5").animate({left: '-=50', top: '+=60'});
    $(".drag-img-5").animate({right: '+=40', top: '-=30'});

    $(".drag-img-6").animate({left: '-=40', top: '-=20'});
    $(".drag-img-6").animate({right: '-=50', top: '-=20'});
    $(".drag-img-6").animate({right: '-=40', top: '+=30'});
    $(".drag-img-6").animate({left: '-=90', top: '+=30'});
    
    $(".drag-img-7").animate({left: '+=40', top: '-=40'});
    $(".drag-img-7").animate({right: '-=50', top: '+=40'});
    $(".drag-img-7").animate({right: '-=40', top: '+=50'});
    $(".drag-img-7").animate({left: '-=90', top: '+=30'});


    
    } else {
    $(".drag-img-1").animate({right: '-=50', top: '-=50'});
    $(".drag-img-1").animate({left: '-=50'});
    $(".drag-img-1").animate({top: '+=50'});
    $(".drag-img-1").animate({right: '-=50', top: '-=100'});

    $(".drag-img-2").animate({right: '-=20', top: '+=50'});
    $(".drag-img-2").animate({right: '-=50'});
    $(".drag-img-2").animate({top: '+=50'});
    $(".drag-img-2").animate({left: '-=50', top: '-=50'});

    $(".drag-img-3").animate({right: '-=40', top: '-=40'});
    $(".drag-img-3").animate({left: '-=50', top: '-=40'});
    $(".drag-img-3").animate({left: '-=40', top: '-=50'});
    $(".drag-img-3").animate({right: '-=90', top: '+=30'});

    $(".drag-img-5").animate({left: '-=50', top: '-=30'});
    $(".drag-img-5").animate({right: '-=50', top: '+=30'});
    $(".drag-img-5").animate({left: '+=50', top: '-=60'});
    $(".drag-img-5").animate({right: '-=40', top: '+=30'});

    $(".drag-img-6").animate({left: '+=40', top: '+=20'});
    $(".drag-img-6").animate({right: '+=50', top: '+=20'});
    $(".drag-img-6").animate({right: '+=40', top: '-=30'});
    $(".drag-img-6").animate({left: '+=90', top: '-=30'});

    $(".drag-img-7").animate({left: '-=40', top: '+=40'});
    $(".drag-img-7").animate({right: '+=50', top: '-=40'});
    $(".drag-img-7").animate({right: '+=40', top: '-=50'});
    $(".drag-img-7").animate({left: '+=90', top: '-=30'});
    
    }
    toggle = !toggle;
    }, 300);


    // $(".welcome-p").waypoint(function() {
    //     $(".welcome-p").addClass("animate__animated animate__fadeInLeft");
    // })


    // $(".name-title").waypoint(function() {
    //     $(".name-title").addClass("animate__animated animate__fadeInLeft");
    // }, offset);

    setTimeout(function() {
        $(".landing-page").addClass("animate__animated animate__bounceIn");
    }, 200);

    setTimeout(function() {
        $(".welcome-p").addClass("animate__animated animate__fadeInLeft");
    }, 300);

    setTimeout(function() {
        $(".myName-p").addClass("animate__animated animate__fadeInLeft");
    }, 400);

    setTimeout(function() {
        $(".name-title").addClass("animate__animated animate__fadeInLeft");
    }, 800);

    setTimeout(function() {
        $(".job-title").addClass("animate__animated animate__fadeInLeft");
    }, 1000);

    setTimeout(function() {
        $(".profile-info").addClass("animate__animated animate__fadeInLeft");
    }, 1200);

    setTimeout(function() {
        $(".landing-button-1").addClass("animate__animated animate__fadeInLeft");
    }, 1500);

    setTimeout(function() {
        $(".landing-button-2").addClass("animate__animated animate__fadeInLeft");
    }, 1400);

    $(".drag-img-4").addClass("animate__animated animate__bounceIn animate__duration-10s");


    // ABOUT ME 

    $(".about-title").waypoint(function() {
        $(".about-title").addClass("animate__animated animate__fadeInLeft");
    }, offset);

    setTimeout(function() {
        $(".greet").waypoint(function() {
            $(".greet").addClass("animate__animated animate__fadeInLeft");
        }, offset);
    }, 400);

    setTimeout(function() {
        $(".about-para-1").waypoint(function() {
            $(".about-para-1").addClass("animate__animated animate__fadeInLeft");
        }, offset);
    }, 800);

    setTimeout(function() {
        $(".about-para-2").waypoint(function() {
            $(".about-para-2").addClass("animate__animated animate__fadeInLeft");
        }, offset);
    }, 900);

    setTimeout(function() {
        $(".tech-title").waypoint(function() {
            $(".tech-title").addClass("animate__animated animate__fadeInRight");
        }, offset);
    }, 400);

    setTimeout(function() {
        $(".tech-row-1").waypoint(function() {
            $(".tech-row-1").addClass("animate__animated animate__fadeInRight");
        }, offset);
    }, 800);

    setTimeout(function() {
        $(".tech-row-2").waypoint(function() {
            $(".tech-row-2").addClass("animate__animated animate__fadeInRight");
        }, offset);
    }, 900);

    //Projects
    $(".project-title").waypoint(function() {
        $(".project-title").addClass("animate__animated animate__fadeInLeft");
    }, offset);

    setTimeout(function() {
        $(".project-1").waypoint(function() {
            $(".project-1").addClass("animate__animated animate__fadeInRight");
        }, offset);
    }, 800);

    setTimeout(function() {
        $(".project-img-1").waypoint(function() {
            $(".project-img-1").addClass("animate__animated animate__fadeInLeft");
        }, offset);
    }, 800);

    setTimeout(function() {
        $(".project-2").waypoint(function() {
            $(".project-2").addClass("animate__animated animate__fadeInLeft");
        }, offset);
    }, 800);

    setTimeout(function() {
        $(".project-img-2").waypoint(function() {
            $(".project-img-2").addClass("animate__animated animate__fadeInRight");
        }, offset);
    }, 800);

    setTimeout(function() {
        $(".project-3").waypoint(function() {
            $(".project-3").addClass("animate__animated animate__fadeInRight");
        }, offset);
    }, 800);

    setTimeout(function() {
        $(".project-img-3").waypoint(function() {
            $(".project-img-3").addClass("animate__animated animate__fadeInLeft");
        }, offset);
    }, 800);

    setTimeout(function() {
        $(".project-4").waypoint(function() {
            $(".project-4").addClass("animate__animated animate__fadeInLeft");
        }, offset);
    }, 800);

    setTimeout(function() {
        $(".project-img-4").waypoint(function() {
            $(".project-img-4").addClass("animate__animated animate__fadeInRight");
        }, offset);
    }, 800);

    //Certification
    $(".certi-page").waypoint(function() {
        $(".certi-page").addClass("animate__animated animate__fadeInRight");
    }, offset);

    // Contact page
    $(".contact-title").waypoint(function() {
        $(".contact-title").addClass("animate__animated animate__zoomIn");
    }, offset);

    $(".contact-para").waypoint(function() {
        $(".contact-para").addClass("animate__animated animate__zoomIn");
    }, offset);

    setTimeout(function() {
        $(".form-group").waypoint(function() {
            $(".form-group").addClass("animate__animated animate__zoomIn");
        }, offset);
    }, 200);

    setTimeout(function() {
        $(".submit-btn-form").waypoint(function() {
            $(".submit-btn-form").addClass("animate__animated animate__zoomIn");
        }, offset);
    }, 300);
});