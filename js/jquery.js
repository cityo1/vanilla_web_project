// $(document).ready(function () {
//   // some jquery codes
// }); 이제 잘 사용하지 않음

$(function () {
  // some jquery codes
  $('.nav-lists li').on('click', function () {
    const targetIndex = $(this).index(); //클릭한 대상의 인덱스 저장
    const pagePosition = $('.nav-target').eq(targetIndex).offset().top; //해당 인덱스의 .nav-target 위치 저장

    $('html, body').animate({ scrollTop: pagePosition }, 300);
  });
});
