




$('document').ready(function () {

   $('.navbar-nav li').on("click",function () {
     $(this).addClass('active').siblings().removeClass('active')
     console.log('ww');
   })



  //portfolio
  $portfolio_selectors = $('.portfolio-filter >li>a');
  if($portfolio_selectors!='undefined'){
    $portfolio = $('.portfolio-items');
    $portfolio.isotope({
      itemSelector : '.portfolio-item',
      layoutMode : 'fitRows'
    });

    $portfolio_selectors.on('click', function(){
      $portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $portfolio.isotope({ filter: selector });
    });
  }
// Navigation Scroll
  $(window).scroll(function(event) {
    Scroll();
  });

  $('.navbar-collapse ul li a').click(function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
    return false;
  });
})

// User define function
function Scroll() {
  var contentTop      =   [];
  var contentBottom   =   [];
  var winTop      =   $(window).scrollTop();
  var rangeTop    =   200;
  var rangeBottom =   500;
  $('.navbar-collapse').find('.scroll a').each(function(){
    contentTop.push( $( $(this).attr('href') ).offset().top);
    contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
  })
  $.each( contentTop, function(i){
    if ( winTop > contentTop[i] - rangeTop ){
      $('.navbar-collapse li.scroll')
        .removeClass('active')
        .eq(i).addClass('active');
    }
  })

};