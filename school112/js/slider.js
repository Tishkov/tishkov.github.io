var slides = document.querySelectorAll(".slide"),
    len = slides.length,
    btn_left = document.querySelector("button#left"),
    btn_right = document.querySelector("button#right"),
    i = 0;

window.setInterval(goRight, 5000);

btn_left.addEventListener('click', goLeft);

function goLeft() {
    slides[i].style.display = 'none';
    if (i === 0) i = len;
    slides[--i].style.display = 'block';
}

btn_right.addEventListener('click', goRight);

function goRight() {
    slides[i].style.display = 'none';
    if (i === len - 1) i = -1;
    slides[++i].style.display = 'block';
}