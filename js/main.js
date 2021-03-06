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

  // $('.card-zone__thumb__carousel').owlCarousel({
  //     loop:false,
  //     margin:5,
  //     dots: false,
  //     nav:true,
  //     responsive:{
  //         0:{
  //             items:2
  //         },
  //         450:{
  //             items:4
  //         },
  //         768:{
  //             items:5
  //         },
  //         992:{
  //             items:7
  //         },
  //         1200:{
  //             items:9
  //         }
  //     }
  // })
}

if($('.card-zone__thumb__carousel').length){
  var countItem = $('.card-zone__thumb__carousel .item').length
  var totalWidth = (countItem * 95) - 15
  $('.card-zone__thumb__carousel').css('width', totalWidth + 'px');

  $('.card-zone__thumb').scrollbar({
    "autoScrollSize": false,
    "scrollx": $('.external-scroll_x')
  })
}

// Select
$('.slct').click(function(){
  var dropBlock = $(this).parent().find('.drop');

  if( dropBlock.is(':hidden') ) {
    dropBlock.show();

    $(this).addClass('active');
    $('.drop').find('li').click(function(){
      var selectResult = $(this).html();
      $(this).closest('.select').find('input').val(selectResult);
      $(this).closest('.select').find('.slct').removeClass('active').html(selectResult);

      dropBlock.hide();
    });
  
  } else {
    $(this).removeClass('active');
    dropBlock.hide();
  }

  return false;
});

$('.drop').scrollbar({
    
  })

$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0){
      container.hide()
      $('.slct').removeClass('active');
  }
});

$('.products-img__carousel').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    responsive:{
      0:{
          items:1
      }
    }
})
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
$('.certificates-carousel').owlCarousel({
  loop:false,
  dots: false,
  nav:true,
  margin: 15,
  responsive:{
      0:{
          items:1
      },
      450:{
          items:2
      },
      767:{
          items:3
      },
      992:{
          items:4
      },
      1200:{
          items:5
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

$(".fancybox").fancybox({
    padding : 0,
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    helpers: {
      overlay: {
        locked: false
      }
    }
  });


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
    $("#amount").change(function () {
      var value = this.value;
      $( "#slider-range-max" ).slider("value", parseInt(value));
    });
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
    $("#amount2").change(function () {
      var value = this.value;
      $( "#slider-range-max2" ).slider("value", parseInt(value));
    });
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

if($('.checkbox-list_service').length){
  if($('.checkbox-item').length > 3){
    $('.checkbox-list_service').scrollbar();
  }
}

$('.tooltip-icon').hover(function() {
  var id = $(this).attr('data-info'); 
  var pos = $(this).offset().top
  var posL = $(this).offset().left
  var height = $('#tooltip-text' + id).height()
  $('#tooltip-text' + id).css({
    top: pos - height + 35 + 'px',
    left: posL + 40 + 'px'
  });
  $('#tooltip-text' + id).addClass('active')
}, function() {
  var id = $(this).attr('data-info');
  $('#tooltip-text' + id).removeClass('active')
});

$('.item_ship').hover(function() {
  var id = $(this).attr('data-service');
  $('.text-walks' + id).show() 
}, function() {
  $('.text-walks').hide()
});