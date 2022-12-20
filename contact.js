window.onload=function(){
    const getChristmasDate = new Date("2022-12-25T00:00:00");
    var countDownDate = new Date(getChristmasDate).getTime();
    var x = setInterval(function() {
        var currentDate = new Date().getTime();
        var distance = countDownDate - currentDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("counter").innerHTML = "Still "+  days + " days " + hours + " hours " +
        minutes + " minutes " + seconds + " seconds till Xmas";            
    }, 1000);
}