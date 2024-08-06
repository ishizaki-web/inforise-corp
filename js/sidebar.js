$(function(){

  // パネルをウィンドウにフィット
  function fit_window(){
    if( $('#sidebar').css('float') == 'none' ){
      var sidebarWidth = 0;
    }else{
      var sidebarWidth = 310;
    }
    var panelWidth = 437;
    var panelCount = Math.floor( ($(window).width() - sidebarWidth) / panelWidth );
    if( panelCount > 2 && $('#content').length > 0 ) panelCount = 2;
    var size = sidebarWidth + (panelCount * panelWidth);
    $('#container').width(size);
  }
  fit_window();
  $(window).resize(function(){
    fit_window();
  });

  // レスポンシブエフェクト
  if( $('#home-menu').length > 0 ){
    var container = document.querySelector('#home-menu');
    var msnry = new Masonry( container, {
      isInitLayout: false,
    });
    msnry._isLayoutInited = true;
    msnry.layout();
  }

  //home slider setting
  $('.home-slider').cycle();
  setSize();
  $(window).resize(function(){
    setSize();
  });
  function setSize(){
    var imgW = 2200;
    var winW = $(window).width();
    if( imgW >= winW ){
      var moveX = Math.floor((winW - imgW) / 2);
      $('.home-slider img, .page-header').css({
        'left'  : moveX,
        'width' : imgW
      });
    } else {
      $('.home-slider img, .page-header').css({
        'left'  : '0px',
        'width' : winW,
      });
    }
  }

  //hover effect
  $('.fadehover, .footer-banner img').hover(
    function(){ $(this).stop().fadeTo(200, 0.7); },//スピード
    function(){ $(this).stop().fadeTo(200, 111); }
  );
  $('#sidebar .side-menu .main a').hover(
    function(){ $('img:not(.on)', this).stop().fadeTo(200, 1); },
    function(){ $('img:not(.on)', this).stop().fadeTo(200, 0); }
  );

  $('#user-email-confirm').attr('oncopy', 'return false');
  $('#user-email-confirm').attr('onpaste', 'return false');
  $('#user-email-confirm').attr('oncontextmenu', 'return false');

  $('#sidebar').hover(
    function(){ $(this).stop().animate({'left' : '-5'}, 400); },
    function(){ $(this).stop().animate({'left' : '-310'}, 400); }
  );

});
