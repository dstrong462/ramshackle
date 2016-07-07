function closeMenu() {
    document.getElementById('nav-toggle').checked = false;
}

var link = document.querySelectorAll('.mobile-nav-list li a');

for (i = 0; i < link.length; i++) {
    link[i].addEventListener('click', closeMenu);
}