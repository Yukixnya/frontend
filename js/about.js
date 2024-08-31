var about_text = document.querySelector('.text p');
about_text.innerHTML = about_text.innerText.split("").map((char,i) => `<span style="transform : rotate(${i * 7.4}deg)">${char}</span>`).join("");



// scrollToTop
$('#scrollToTop').hide();
$(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $('#scrollToTop').fadeIn(300);
    } else {
        $('#scrollToTop').fadeOut(300);
    }
})

$("#scrollToTop").bind("click",function() {
    $("html, body").animate({ scrollTop: 0 }, 1200);
    return false;
});

console.log($("#scrollToTop"));
console.log("helloWorld");