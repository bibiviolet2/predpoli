

function openPage(page) {
  
  $('html, body').animate({ scrollTop: 0 }, 500);
  $('footer a.active').removeClass('active');

  if(page == 'contact')
    $('footer a.contact').addClass('active');

  if(page == 'news') {
    $('footer a.news').addClass('active');

    }

  if(page == 'faq')
    $('footer a.faq').addClass('active');

  

  var obj = $('section.' + page);

  if(obj.hasClass('scroll')) {
    $('.layout-holder').addClass('static');
  } else {
    $('.layout-holder').removeClass('static');
  }

  $('nav.main-nav').removeClass('open');
  $('.menu-toggle').removeClass('active');
  $('section.page:not(.' + page + ')').removeClass('open');
  $('aside:not(.' + page + ')').removeClass('open').removeClass('ready');
  $('section.page:not(.' + page + ')').find('main').removeClass('aside-open');
  $('aside.' + page).removeClass('open').addClass('ready');
  if(!obj.hasClass('open')){
    obj.addClass('open');
      
    }

  if(page == 'news') {

    $('.news-item.set-height').height($('section.news').height()-72);
    openAside('news-item-1');
    }
    if(page == 'faq') {

    $('.faq-item.set-height').height($('section.faq').height()-72);
    openAside('faq-item-1');
    }

  return false;
}

function openAside(page) {
  $('aside.open:not(.' + page + ')').removeClass('open');
  $('aside.ready:not(.' + page + ')').removeClass('ready');
  $('aside.' + page).toggleClass('ready').toggleClass('open');
  $('section.page.' + page + ' main').toggleClass('aside-open');

  if($('aside.' + page).hasClass('news-item')){
    $('html, body').animate({ scrollTop: 0 }, 500);
  }
  if($('aside.' + page).hasClass('faq-item')){
    $('html, body').animate({ scrollTop: 0 }, 500);
  }
  
  return false;
}

function toggleMenu() {
  $('.main-nav').toggleClass('open');
  $('.menu-toggle').toggleClass('active');
  $('main').removeClass('aside-open');
  $('aside').removeClass('open').removeClass('ready');
  return false;
}

//galerka

var gal_total = $('.gallery .gallery-navig .total').text() * 1;
var gal_current_holder = $('.gallery .gallery-navig .current');
var gal_current = gal_current_holder.text() * 1;

var gal_total_2 = $('.gallery-present .gallery-navig .total').text() * 1;
var gal_current_holder_2 = $('.gallery-present .gallery-navig .current');
var gal_current_2 = gal_current_holder_2.text() * 1;

function galleryNext(){
  if(gal_current < gal_total) {
      gal_current++;
      $('.gallery .gallery-item.active').removeClass('active');
      $('.gallery .gallery-item[rel="' + gal_current + '"]').addClass('active');
      gal_current_holder.text(gal_current);
      if(gal_current == gal_total) {
        $('.gallery .gallery-navig .next').addClass('disable');
        $('.gallery .gallery-navig .prev').removeClass('disable');
      } else {
        $('.gallery .gallery-navig .next').removeClass('disable');
        $('.gallery .gallery-navig .prev').removeClass('disable');
      }
      if(gal_current == 1) {
        $('.gallery .gallery-navig .prev').addClass('disable');
        $('.gallery .gallery-navig .next').removeClass('disable');
      }
  }
}

function galleryNext2(){
  if(gal_current_2 < gal_total_2) {
      gal_current_2++;
      $('.gallery-present .gallery-item.active').removeClass('active');
      $('.gallery-present .gallery-item[rel="' + gal_current_2 + '"]').addClass('active');
      gal_current_holder_2.text(gal_current_2);
      if(gal_current_2 == gal_total_2) {
        $('.gallery-present .gallery-navig .next').addClass('disable');
        $('.gallery-present .gallery-navig .prev').removeClass('disable');
      } else {
        $('.gallery-present .gallery-navig .next').removeClass('disable');
        $('.gallery-present .gallery-navig .prev').removeClass('disable');
      }
      if(gal_current_2 == 1) {
        $('.gallery-present .gallery-navig .prev').addClass('disable');
        $('.gallery-present .gallery-navig .next').removeClass('disable');
      }
  }
}


function gallerySet(index){
  gal_current = index - 1;
  galleryNext();
}

function gallerySet2(index){
  gal_current_2 = index - 1;
  galleryNext2();
}

function galleryPrev(){
  if(gal_current > 1) {
      gal_current--;
      $('.gallery .gallery-item.active').removeClass('active');
      $('.gallery .gallery-item[rel="' + gal_current + '"]').addClass('active');
      gal_current_holder.text(gal_current);
      if(gal_current == 1) {
        $('.gallery .gallery-navig .prev').addClass('disable');
        $('.gallery .gallery-navig .next').removeClass('disable');
      } else {
        $('.gallery .gallery-navig .prev').removeClass('disable');
        $('.gallery .gallery-navig .next').removeClass('disable');
      }
  }
}

function galleryPrev2(){
  if(gal_current_2 > 1) {
      gal_current_2--;
      $('.gallery-present .gallery-item.active').removeClass('active');
      $('.gallery-present .gallery-item[rel="' + gal_current_2 + '"]').addClass('active');
      gal_current_holder_2.text(gal_current_2);
      if(gal_current_2 == 1) {
        $('.gallery-present .gallery-navig .prev').addClass('disable');
        $('.gallery-present .gallery-navig .next').removeClass('disable');
      } else {
        $('.gallery-present .gallery-navig .prev').removeClass('disable');
        $('.gallery-present .gallery-navig .next').removeClass('disable');
      }
  }
}

$(document).ready(function(){
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = $('.holder').height();

if(w < 768){
  var diff = 60;
} else {
  var diff = 0;
}

  if(1){

  $('.set-height').height($('.holder').height()-140+diff);
  $('.inner-set-height').height($('.holder').height()-140-40+diff);
  $('aside.set-height').height($('.holder').height()-140-72+diff);

  

  
  $('.set-min-height').each(function(i,e){
    var h2 = $(e).height();
    if(h > h2)
    $(e).css('min-height',$('.holder').height()-140);
  });

  $('.scroll-set-height').each(function(i,e){
    var main = $(e).next('main');
    if($(e).closest('.page').hasClass('gallery')) {
      var h2 = main.find('.gallery-item img').height();
    } else {
      var h2 = main.find('.page-inner').height()+80;
    }

    if((h-140) > h2) {
      $(e).height(h-140);
      } else {
      $(e).height(h2);
      }
  });



var left = (w - 120)/ 6;
$('.line.l3').css('left',left+60);
$('.line.l4').css('left',2*left+60);
$('.line.l5').css('left',3*left+60);
$('.line.l6').css('left',4*left+60);
$('.line.l7').css('left',5*left+60);
}
  $('.faq-list .toggle').on('click',function(){
    if(!$(this).hasClass('active')) {
      $('.faq-list .toggle.active,.faq-list .ans.active').toggleClass('active');
    }
    $(this).toggleClass('active').next('.ans').toggleClass('active');
  });

  $('.news-list .toggle').on('click',function(){
    if(!$(this).hasClass('active')) {
      $('.news-list .toggle.active').toggleClass('active');
    }
    $(this).toggleClass('active').next('.ans').toggleClass('active');
  });

});


$(document).ready(function(){
    $('a.slide').click(function(){

          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          && location.hostname == this.hostname) {
              var $target = $(this.hash);
              console.log(this.hash);
              $target = $target.length && $target || $('#' + this.hash.slice(1));

              if ($target.length) {
                  var targetOffset = $target.offset().top;

                  $('html,body').animate({scrollTop: targetOffset}, 0.8*targetOffset);
                  return false;
              }
          }

      });
});