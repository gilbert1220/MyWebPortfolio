let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec =>  {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    })
} 

function dropdown(){
    document.querySelector('#submenu').classList.toggle('hidden');
    document.querySelector('#arrow').classList.toggle('rotate-0');
}
dropdown()

// document.querySelectorAll('.nav-link').forEach
// (link => {
//     if(link.href == window.location.href){
//         link.setAttribute('aria-current', 'page');
//     }
// })