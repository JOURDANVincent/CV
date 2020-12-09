let para = document.querySelectorAll('#experience p');
console.log(para)

window.onscroll = function() {
    let nScroll = window.scrollY;
    para.forEach(item => {
        //item.classList.add('unvisible');
        if (nScroll >= (item.offsetTop +120 ) && item.classList != 'show') {
            //item.classList.remove('unvisible');
            item.classList.add('show');
        } else { 
            item.classList.remove('show');
            //item.classList.add('unvisible');
        }
    })

    console.log(nScroll + "...." + window.innerHeight +"/"+ document.body.clientHeight);
}
