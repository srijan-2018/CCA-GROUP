// pre Loader Start
const loader = document.querySelector(".loader");
window.onload = function () {
    setTimeout(function(){
        loader.style.opacity = "0";
        setTimeout(function(){
            loader.style.display = "none";
        },500);
    },1000);
};
// pre Loader End


// Top to Scroll Start
let btn = $('#button');

$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        btn.addClass('show');
    }else{
        btn.removeClass('show');
    }
});

btn.on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


// auto type js start

$(document).ready(function(){
    initAutoType();
  
  });
  var initAutoType = function(){
    var types = ["Explore Interests and Career With Courses","Admission Open for 2022-2023","YinyouPoet's Blog."];
    var words = $("#first-words");
  
    var stopType = false;
  
    var index = 0;
    var tempWords = "";
    var isNext = false;
    var time = 200;
  
    var startType = setInterval(function(){
      if(stopType){
        clearInterval(startType);
      }
      if(tempWords.length === 0){
        if(isNext){
          index++;
          index = index%3;
          isNext = false;
        }
        tempWords = types[index].substring(0,tempWords.length+1);
      }else if(tempWords.length === types[index].length && isNext === false){
        isNext = true;
        time = 5000;
      }else{
        if(isNext){
          tempWords = tempWords.substring(0,tempWords.length-1);
          time = 150;
        }
        else{
          time = 200;
          tempWords = types[index].substring(0,tempWords.length+1);
        }
      }
      words.html(tempWords);
    },time);
  };


// video popup js start

  $(function() {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});





