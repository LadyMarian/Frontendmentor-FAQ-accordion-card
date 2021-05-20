const questions = document.querySelectorAll(".question");
const answers = document.getElementsByClassName("answer");
const arrows = document.getElementsByClassName("arrow");
const numbers = [1,2,3,4,5,6]

questions.forEach(function(question, i) {
    
    question.addEventListener("click", function() {
        questions[i].classList.toggle("active");
        arrows[i].classList.toggle("turned");
        answers[i].classList.toggle("visible");
    });
});