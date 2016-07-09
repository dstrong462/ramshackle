var body = document.body;
var burger = document.getElementById('nav-toggle');
    burger.addEventListener('click', disableScroll);
var link = document.querySelectorAll('.mobile-nav-list li a');

for (i = 0; i < link.length; i++) {
    link[i].addEventListener('click', closeMenu);
}

// Closes mobile nav overlay when a link is clicked
function closeMenu() {
    body.className = '';
    burger.checked = false;
}

// Disables scrolling when mobile nav overlay is open
function disableScroll() {
    if (burger.checked) {
        body.className = 'disable-scroll';
    }
    else {
        body.className = '';
    }
}