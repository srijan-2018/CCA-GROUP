// pre Loader Start
const loader = document.querySelector(".loader");
window.onload = function () {
    setTimeout(function(){
        loader.style.opacity = "0";
        setTimeout(function(){
            loader.style.display = "none";
        },500);
    },1500);
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
})