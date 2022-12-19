window.onload=function(){
    const btn = document.getElementById('sendButton');
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const serviceID = 'default_service';
        const templateID = 'template_9lq3s3d';

   emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            form.reset();
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
    })
};