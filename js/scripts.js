const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");
const ul_4 = document.querySelector(".option4");
const ul_5 = document.querySelector(".option5");

const firstQuestion = document.querySelector(".firstQuestion");
const secondQuestion = document.querySelector(".secondQuestion");
const thirdQuestion = document.querySelector(".thirdQuestion");
const fourthQuestion = document.querySelector(".fourthQuestion");
const fifthQuestion = document.querySelector(".fifthQuestion");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

// First question
ul_1.addEventListener("click", function() {
  firstQuestion.getElementsByClassName.display = "none";
  secondQuestion.getElementsByClassName.display = "block";
});

// Second question
ul_2.addEventListener("click", function() {
  secondQuestion.getElementsByClassName.display = "none";
  thirdQuestion.getElementsByClassName.display = "block";
});

// Third question
ul_3.addEventListener("click", function() {
  thirdQuestion.getElementsByClassName.display = "none";
  fourthQuestion.getElementsByClassName.display = "block";
});

// Fourth question
ul_4.addEventListener("click", function() {
  fourthQuestion.getElementsByClassName.display = "none";
  fifthQuestion.getElementsByClassName.display = "block";
});

// Display Answer
ul_5.addEventListener("click", function() {
  fifthQuestion.getElementsByClassName.display = "none";
  survey.getElementsByClassName.display = "none";
  end.getElementsByClassName.display = "block";
});
