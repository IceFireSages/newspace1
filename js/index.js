




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

})

