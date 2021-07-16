function hamburger () {
    var a = document.getElementById('show');
    if(a.style.display==="none"){
        a.style.display="block";
    }else{
        a.style.display="none";
    }
}
const sr = ScrollReveal({

    origin: 'top',
    distance: '40px',
    duration: 3000,
    reset: true
});

sr.reveal(`.logo,.nav-ul,.moon,.quotes,#aboutus,.abt,.amz-services`, {
    interval: 10
})