$('#main-slider').bxSlider({
  pagerCustom: '#main-slider-thumb',
  controls: false,
  speed: 700
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
    } 
    else {
      $('.main-slider-text').removeClass('hidden')
      $('.thumb').removeClass('hidden')
    }
  });
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
