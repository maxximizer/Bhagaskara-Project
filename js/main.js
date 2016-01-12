$(document).ready(function(){
  var slideNo = 0;
  var slideCount =  $('.with_circle li').length - 3;
  var slideWidth = $('.with_circle li').width();

  $(".arrow_left").on("click",function(){
    console.log(slideWidth);
    console.log(slideCount);
    $("body").off("click", ".with_circle", animateMe);
    if (slideNo > 0) {
      slideNo--;
      $(".with_circle").animate({
        left: '+='+slideWidth,
      });
    } else {
      slideNo = slideCount;
      $(".with_circle").animate({
        left: "-=" + (slideWidth * slideCount),
      },500);
    }
  })
  $(".arrow_right").on("click",function(){

    if (slideNo < slideCount) {
      slideNo++;
      $(".with_circle").animate({
        left: "-=" +slideWidth,
      });
    } else {
      slideNo = 0;
      $(".with_circle").animate({
        left: "+=" + (slideWidth * slideCount),
      },500);
    }
  })


  var animateMe = function(targetElement, speed){

if (slideNo<3) {
  console.log(slideNo)
  slideNo++;
  var aha=slideNo++;
    console.log(aha)
      $(targetElement).animate(
          {
            left: "-=1140",
          },
          {
          duration: speed,
          complete: function(){
              animateMe(this, speed);
              }
          }
      );

    }
    else {
      slideNo = 0;
      $(targetElement).animate(
          {
            left: "+=2280",
          },
          {
          duration: speed,
          complete: function(){
              animateMe(this,speed);
              }
          }
      );
      }
  };
  animateMe($(".with_circle"), 4000);





  $(".web_click").click(function(){
    $(".web").show('slow');
    $(".app").hide('slow');
    $(".icons2").hide('slow');
    $(".web_click").toggleClass("active");
    $(".apps_click").removeClass("active");
    $(".icons_click").removeClass("active");
    $(".all_click").removeClass("active");
  })

  $(".apps_click").click(function(){
    $(".app").show('slow');
    $(".web").hide('slow');
    $(".icons2").hide('slow');
    $(".apps_click").toggleClass("active");
    $(".web_click").removeClass("active");
    $(".icons_click").removeClass("active");
    $(".all_click").removeClass("active");
  })

  $(".icons_click").click(function(){
    $(".icons2").show('slow');
    $(".web").hide('slow');
    $(".app").hide('slow');
    $(".icons_click").toggleClass("active");
    $(".web_click").removeClass("active");
    $(".apps_click").removeClass("active");
    $(".all_click").removeClass("active");

  })


  $(".all_click").click(function(){
    $(".icons2").show('slow');
    $(".web").show('slow');
    $(".app").show('slow');
    $(".all_click").toggleClass("active");
    $(".web_click").removeClass("active");
    $(".icons_click").removeClass("active");
    $(".apps_click").removeClass("active");
  })


  $(".c-hamburger").on("click",function(){
    $(".navbar_position ul").toggleClass("hide");
  });

  var navBarTop = $('.nav-bar').offset().top;

  $(window).on('scroll', function(){
    var windowScroll = $(window).scrollTop();
    if(windowScroll > navBarTop) {
      $('.nav-bar').addClass('nav-bar--fixed');
    } else {
        $('.nav-bar').removeClass('nav-bar--fixed');
    }
  })



  $(".arrow_down").on("click",function(){
    //var scrollPosition = $(window).scrollTop();
    $('html, body').animate({scrollTop: navBarTop}, 400)
  });

  $('.navbar_position a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
        console.log($target.offset().top)
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-25
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});



    $('.header_with_icons a').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);

  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top
  	    }, 900, 'swing', function () {
  	        window.location.hash = target;
  	    });
  	});



  $(".dots_list").on("click", "li", function(){
    $(this).toggleClass("active2");
    $(this).siblings().removeClass("active2");
    console.log($(this).index());
    var index=$(this).index();
    var slide_shift=0;
    slide_shift=980*index;
    console.log(slide_shift);
      pospx = {'left' : -slide_shift};

  $(".slide_container").animate(pospx,1000);
  });


});
