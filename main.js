let search = document.querySelector('.search-box')
let searchIcon = document.querySelector('#search-icon')

searchIcon.onclick = () => {
    search.classList.toggle('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});