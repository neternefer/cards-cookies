window.onload=function(){
    /**FORM SUBMIT */
    const form = document.querySelector('form');
    const msg = document.getElementById('send_form_status');
        
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const serviceID = 'default_service';
        const templateID = 'template_aqxxjro';
    
       emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                msg.innerHTML = '<p>Thank you! Your request has been sent.</p>';
                form.reset();
            }, (err) => {
                msg.classList.add(".error");
                msg.innerHTML = '<p>Something went wrong.</p>';
            });
        });

    /**CHRISTMAS COUNTER */
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
};