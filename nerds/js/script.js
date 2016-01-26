var writeus_btn = document.querySelector(".map .info .btn");
var writeus_window = document.querySelector(".writeus");
var writeus_close = writeus_window.querySelector("a.btn");
var name_field = writeus_window.querySelector("input[name=name]");

writeus_btn.addEventListener("click", function (event) {
    event.preventDefault();
    writeus_window.classList.add("writeus-show");
    name_field.focus();
});

writeus_close.addEventListener("click", function (event) {
    event.preventDefault();
    writeus_window.classList.remove("writeus-show");
});