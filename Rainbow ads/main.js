/*window.addEventListener("scroll", function(){
    let menuArea = document.getElementById('menu-area');
    if (window.pageYOffset > 0){
        menuArea.classList.add("cus-nav");
    }else{
        menuArea.classList.remove("cus-nav")
    }
})*/

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
