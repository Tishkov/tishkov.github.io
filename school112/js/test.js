var correctAns = [3, 2, 3, 2, 1],
    len = correctAns.length,
    allAns = document.querySelectorAll(".test label"),
    personalAns = new Array(),
    testBtn = document.querySelector("button#finish");

testBtn.addEventListener('click', getData);

function getData() {
    personalAns = document.querySelectorAll("input:checked");
    if (personalAns.length !== len) {
        alert("Ответьте на ВСЕ вопросы");
        return;
    }
    getScore();
}

function getScore() {
    var score = 0;
    for (i = 0; i < allAns.length; i++) {
    allAns[i].style.color="black";
    }
    for (i = 0; i < len; i++) {
        if (parseInt(personalAns[i].value) === correctAns[i]) score++;
        allAns[parseInt(personalAns[i].value)-1+(i*3)].style.color = "red";
        allAns[correctAns[i]-1+(i*3)].style.color="#1ba01b";
    }
    alert("Ваш счёт: " + score);
}