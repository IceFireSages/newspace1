


//portfolio
/*$('document').ready(function () {
  $('a[data-filter="*"]').click(function () {
    $('div.portfolio-item').fadeIn()
  });
  $('[data-filter=".people"]').click(function () {
    $('div.portfolio-items>div.people').siblings().fadeOut();
    $('div.portfolio-items>div.people').css('display','block').fadeIn()
  });
  $('[data-filter=".wordpress"]').click(function () {
    $('div.portfolio-items>div.wordpress').siblings().fadeOut();
    $('div.portfolio-items>div.wordpress').css('display','block').fadeIn()
  });
  $('[data-filter=".joomla"]').click(function () {
    $('div.portfolio-items>div.joomla').siblings().fadeOut();
    $('div.portfolio-items>div.joomla').css('display','block').fadeIn()
  });$('[data-filter=".megento"]').click(function () {
    $('div.portfolio-items>div.megento').siblings().fadeOut();
    $('div.portfolio-items>div.megento').css('display','block').fadeIn()
  });
  $('.single-blog').mouseover(function () {
    $('.single-blog>h2').animate({color:"#fff"},800);

  });

});*/
// portfolio filter
$(window).load(function(){'use strict',
  $portfolio_selectors = $('.portfolio-filter >li>a');
  if($portfolio_selectors!='undefined'){
    $portfolio = $('.portfolio-items');
    $portfolio.isotope({
      itemSelector : '.col-sm-3',
      layoutMode : 'fitRows'
    });

    $portfolio_selectors.on('click', function(){
      $portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $portfolio.isotope({ filter: selector });
      return false;
    });
  }
});
//Pretty Photo
$("a[data-gallery^='prettyPhoto']").prettyPhoto({
  social_tools: false
});