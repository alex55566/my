let body = document.body;

window.addEventListener('scroll', createBut, { 
    passive: true
})

function createBut() { 
    let check = document.querySelector('.butt');
    let scroll = window.pageYOffset;
    if (scroll >= 100 && check === null) {   
        let btn = document.createElement('button');
        btn.classList.add('butt');
        btn.innerHTML = 'наверх';
        body.append(btn);
        clickBut(btn);
    } 
    if (scroll < 100 && check !== null) {   
        check.remove() 
    }
}

function clickBut(butt) {
    butt.addEventListener('click', function(e) { 
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' })

    })
}