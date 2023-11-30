

// close btn

var closebtn = document.getElementById('close-btn');

closebtn.addEventListener('click', () => {
    // Use "none" as a string
    document.querySelector('.message.container').style.display = "none";
});


// toggle burger

const toggleBurger = document.getElementsByClassName('burger')[0];
const toggleNav = document.getElementById('nav');

toggleBurger.addEventListener('click', () => {
    toggleNav.classList.toggle('active');
});