$(function() {
  $('.tab li').on('click', function(){
    $('.tab li').removeClass('select');
    $(this).addClass('select');
    $('.content li').addClass('hide');
    let index = $('.tab li').index($(this));
    $('.content li').eq(index).removeClass('hide');
  });

  $('#checkButton').on('click', function(){
    msgq.innerText = questionTextarea.value;
    msgr.innerText = requestTextarea.value;
    msgf.innerText = freeTextarea.value;
  });

  let questionTextarea = document.getElementById('question');
  let requestTextarea = document.getElementById('request');
  let freeTextarea = document.getElementById('free');
  questionTextarea.value = '質問';
  requestTextarea.value = '要望';
  freeTextarea.value = '自由記入欄';

  let msgq = document.getElementById('msg question');
  let msgr = document.getElementById('msg request');
  let msgf = document.getElementById('msg free');
  
});