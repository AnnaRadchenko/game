
/*--------------------------------loading page---------------------------------------*/

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
        $rules = $preloader.find('.rules');
        $spinner.delay(5000).fadeOut('slow');
        $rules.delay(6000).fadeOut('slow');
        $preloader.delay(7000).fadeOut('slow');
});

/*----------------------------------startGame--------------------------------------*/
$(document).ready(function() {

        var time = 0;
        var raund =0;
        var count = 0;
        var $gun_man_boy = $('.gun_man_boy');
        var $button_start = $('.button_start');
        var $playerTimer = $('.mytimer');
        var $gunmanTimer = $('.gunman_timer');
        var $count = $('.count');
        var ms = 0;
        var s = 0;
        var miniTimer;

        $button_start.on('click', startGame);

        function startGame() {
          alert('Round starts right now.\n For continue click OK');
          count = 0;        
          $gunmanTimer.empty().append( miniTimer );
          $playerTimer.empty().append();
          $count.empty();
    
          $('.gun_man_boy').addClass('gun_man_boy_step').addClass('gun_man_boy_move');
          
          setTimeout( Remover, 5000);
          setTimeout( Add, 5500);      
          
          function Remover(){
          $('.gun_man_boy').removeClass('gun_man_boy_step');
          }

          function Add(){
          $('.gun_man_boy').addClass('gun_man_boy_return');
          }
/*
1.как тут прописать чтобы анимация закончилась в последнем кадре?
у меня возвращается до 1 кадра. пробовала:
$('.gun_man_boy').stop(); и animation-fill-mode - не помогло(
*/
          
          
  }
/*
2.Как правильно перейти на следующий шаг с выстрелом чтобы функции выполнялись одна за другой?
пробовала через if...else(2.1) и when..then(2.2), но что-то не получается(

2.1)    
    if(false){ 
      alert("never");
    }else{show_new() };

  function show_new() {
       alert('Hi!')

       function startNewGame( raund, callback ) {

              alert('now start: ' + raund);

              $('#raund').animate({
                  opacity: 0
              }, 7000);

              if (callback && typeof(callback) === "function") {
                  callback();
              }
      }
 
      startNewGame('new raund', function() { alert( 'are you ready?'); }); 
    }

2.2)
$.when( $(Add) ).then(function startNewGame( raund, callback ){

              alert('Зараз почнеться: ' + raund);

              $('#raund').animate({
                  opacity: 0
              }, 7000);

              if (callback && typeof(callback) === "function") {
                  callback();
              }
      }
 
      startNewGame('Новий раунд', function() { 
          alert('Ви готові?');
      });
);
  
*/
/*---------------------------------step_-------------------------------------*/
/*
3. как здесь проверить был ли сделан клик в заданном интервале времени?

function checkСlick(){

    var myCallbacks = $.Callbacks();

    if( myCallbacks.has( check_click ) == true && 
    //как здесь записать нужный промежуток времени?){

       clearTimeout(clock);
       alert("Congratulations! You win this round!");
       startNewGame(); 
    }else{
       gameOver();
     } 

}
*/
/*---------------------------------game over----------------------------------*/
/*
setTimeout( gameOver, 10800);

function gameOver(){
       alert('Game over');  
}
*/

/*---------------------------------clock--------------------------------------*/
var clock;
    
    $(document).ready(function() {
      
      clock = $('.clock').FlipClock(180, {
            clockFace: 'MinuteCounter',
            countdown: true,
            autoStart: false,
            callbacks: {
              start: function() {
                $('.message').html('Game finished over:');
              }
            }
        });
   clock.start();
   });

/*--------------------------------music---------------------------------------*/
 document.getElementById("changeStateButton").onclick = function () {
    var
    myaudio = document.getElementById("myaudio"),
    
    mybtn = document.getElementById("mybtn");
    if (myaudio.paused) {
      myaudio.play();
      mybtn.src = "pic/1b.png";
      
    } else {
      myaudio.pause();
      mybtn.src = "pic/2b.png";
    }
  };


});
/*---------------------------------------------------------------------------*/
