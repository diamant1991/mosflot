$(document).ready(function() {
  $('.slider-item').height(window.innerHeight + 'px');
});
$( window ).resize(function() {
  $('.slider-item').height(window.innerHeight + 'px');
});
$('#main-slider').bxSlider({
  pagerCustom: '#main-slider-thumb',
  controls: false,
  speed: 700
});

if($('.card-zone__carousel').length){
  var sliderSets = $('.card-zone__carousel');

  function initSliders(targetSlider, targetPager) {
    $(targetSlider).bxSlider({
      pagerCustom: targetPager
    });
  }

  $(sliderSets).each(function() {
    var targetSlider = "#" + $(this).children('.bxslider').attr('id');
    var targetPager = "#" + $(this).children('.card-zone__thumb').attr('id');
    
    initSliders(targetSlider, targetPager);
  });

  $('.card-zone__thumb__carousel').owlCarousel({
      loop:false,
      margin:5,
      dots: false,
      nav:true,
      responsive:{
          0:{
              items:2
          },
          450:{
              items:4
          },
          768:{
              items:5
          },
          992:{
              items:7
          },
          1200:{
              items:9
          }
      }
  })
}
$('#block-carousel').owlCarousel({
    loop:false,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
$('.block-carousel__owl').owlCarousel({
    loop:false,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
$('.view-btn').click(function() {
  $('.view-btn').removeClass('active');
  $(this).addClass('active')
});
$('.filter-item').click(function() {
  $('.filter-item').removeClass('active');
  $(this).addClass('active')
});
$('.toggle-btn').click(function(e) {
  var menu = $('#top-nav');
  menu.addClass('active')
});
$('.close-nav').click(function(e) {
  e.preventDefault();
  $('#top-nav').removeClass('active')
});
$(".scroll-btn").click(function () {
  elementClick = $(this).attr("href")
  destination = $(elementClick).offset().top - 100;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 900);
  return false;
});

$(document).ready(function(){
  if($('.content').length){
    var contentPos, winPosMain;
    function refreshServ() {
      contentPos = $('.content').offset().top;
    }
    refreshServ();
    $(window).resize(refreshServ);
      
    $(window).scroll(function() {
      winPosMain = $(window).scrollTop();
      
      if (winPosMain >= contentPos) {
        $('.main-slider-text').addClass('hidden')
        $('.thumb').addClass('hidden')
        $('.scroll-btn').addClass('hidden')
      } 
      else {
        $('.main-slider-text').removeClass('hidden')
        $('.thumb').removeClass('hidden')
        $('.scroll-btn').removeClass('hidden')
      }
    });
  }

  $(window).scroll(function() {
    scrollPos = $(window).scrollTop();
    
    if (scrollPos > 100) {
      $('.header').addClass('fixed')
    } 
    else {
      $('.header').removeClass('fixed')
    }
  });
  var review_stars = $('.j-rating a');
    $(review_stars).hover(function () {
        $(this).parent().find(review_stars).removeClass('is-hover is-active m-select m-active');
        $(this).addClass('is-hover');
        var thisStar = $(this).parent().find(review_stars);
        $(thisStar).each(function () {
            $(this).addClass('is-active');
            if ( $(this).hasClass('is-hover') ) {
                return false;
            }
        });
    }, function () {
        var value = $(this).parent().find('input[type=hidden]').val();
        $(this).parent().find(review_stars).removeClass('is-hover is-active m-select m-active');
        var thisStar = $(this).parent().find(review_stars);
        if( value >= 1 ) {
            $(thisStar).each(function () {
                $(this).addClass('m-select');
                if ($(this).data('index') == value) {
                    $(this).addClass('m-active');
                    return false;
                }
            });
        }
    });
    $(review_stars).click(function () {
        $(this).addClass('m-active');
        var thisStar = $(this).parent().find(review_stars);
        $(thisStar).each(function () {
            $(this).addClass('m-select');
            if ( $(this).hasClass('m-active') ) {
                return false;
            }
        });
        $(this).parent().find('input[type=hidden]').val(parseInt($(this).data('index')));
        return false;
    });
})

$( function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 50,
      value: 12,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  } );
$( function() {
    $( "#slider-range-max2" ).slider({
      range: "max",
      min: 1,
      max: 20,
      value: 5,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value );
      }
    });
    $( "#amount2" ).val( $( "#slider-range-max2" ).slider( "value" ) );
  } );

$("#slider-range").slider({
  min: 0,
  max: 1000,
  values: [0,1000],
  range: true,
  stop: function(event, ui) {
    $(".sliderValue_left").val($("#slider-range").slider("values",0));
    $(".sliderValue_right").val($("#slider-range").slider("values",1));
    },
    slide: function(event, ui){
    $(".sliderValue_left").val($("#slider-range").slider("values",0));
    $(".sliderValue_right").val($("#slider-range").slider("values",1));
    }
});
$(".sliderValue_left").change(function(){
  var value1=$(".sliderValue_left").val();
  var value2=$(".sliderValue_right").val();

    if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    $(".sliderValue_left").val(value1);
  }
  $("#slider-range").slider("values",0,value1);  
});

  
$(".sliderValue_right").change(function(){
  var value1=$(".sliderValue_left").val();
  var value2=$(".sliderValue_right").val();
  
  if (value2 > 1000) { value2 = 1000; $(".sliderValue_right").val(1000)}

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    $(".sliderValue_right").val(value2);
  }
  $("#slider-range").slider("values",1,value2);
});

$('.toggle-filter').click(function(event) {
  var sidebar = $(this).next()
  if(sidebar.is(':hidden')){
    $(this).text('Свернуть фильтр')
    sidebar.slideDown(250)
  }
  else{
    $(this).text('Открыть фильтр')
    sidebar.slideUp(250)
  }
});

$.fn.equivalent = function (){
  var $blocks = $(this),
      maxH    = $blocks.eq(0).height(); 
  $blocks.each(function(){
      maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
  });

  $blocks.height(maxH); 
}
if(window.matchMedia('(min-width: 992px)').matches){
  $('.walks-route__block').equivalent();
}
