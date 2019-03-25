var str = 'qweradfasdfewqaeg';
var ss = str.split("").reduce(function (prev, elem) {
  if (prev[elem] === undefined) {
    prev[elem] = 1;
  } else {
    prev[elem]++;
  }
  return prev;
}, 0);
console.log(ss);

//portfolio
$('[data-filter="*"]').click(function () {
  console.log('********');
  $('portfolio-item').css('display','block').fadeOut();
});
$('[data-filter=".people"]').click(function () {
  console.log('-------');
  $('.people').css('display','block').siblings().css('display','none');
});
$('[data-filter=".wordpress"]').click(function () {
  $('.wordpress').css('display','block').siblings().css('display','none');
});
$('[data-filter=".joomla"]').click(function () {
  $('.joomla').css('display','block').siblings().css('display','none');
});$('[data-filter=".megento"]').click(function () {
  $('.megento').css('display','block').siblings().css('display','none');
});
