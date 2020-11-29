
let backArrow = document.getElementById('btnToUpPage');


function showArrow() {
    let nScroll = window.scrollY;
    //console.log(nScroll)
    if (nScroll > 100) {
        backArrow.className = 'btnShow';
    } else {
        backArrow.className = 'btnHide';
        
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});