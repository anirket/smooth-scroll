function smoothscroll(target, duration) {
    //all scroll code
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top / 1.3;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var starttime = null;
    function animation(currenttime) {
        if (starttime === null) starttime = currenttime;
        var timeEllapsed = currenttime - starttime;
        var run1 = run(timeEllapsed, startPosition, distance, duration);
        scrollTo(0, run1);
        function run(t, b, c, d) {
            t /= d;
            return c * t * t  + b;
        }
        if(timeEllapsed < duration)
        requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
}


var target = document.querySelector(".section1");

target.addEventListener("click", function () {

    smoothscroll(".section2", 1000);

})
var target = document.querySelector(".section2");

target.addEventListener("click", function () {

    smoothscroll(".section1", 1000);

})