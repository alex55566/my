let btn = document.querySelector('.dropbtn');

let content = document.querySelector('.dropdown-content');

btn.addEventListener('click', (e) => { 
    e.preventDefault() ;
    content.classList.toggle('is-active');
})

window.onclick = function(e) { 
    e.preventDefault() ;
    if ((!e.target.matches('.dropdown-content')) && (!e.target.matches('.dropbtn')))  {
        if (content.classList.contains('is-active')) {       
            content.classList.remove('is-active');     
        }   
    }
}