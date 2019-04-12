


//portfolio
$('document').ready(function () {
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
  $('.single-blog').css('hover',function () {
    $('.single-blog>h2').css('color','#fff');
  })
})

