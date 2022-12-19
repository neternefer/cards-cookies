const buttonQuiz = document.querySelector(".button-quiz");
const wrapperQuiz = document.querySelector(".wrapper-quiz");
const wrapperResult = document.querySelector(".wrapper-result");
const optionList = document.querySelector(".option-list");
const restartQuiz = wrapperResult.querySelector(".buttons .restart");
const quitQuiz = wrapperResult.querySelector(".buttons .quit");
const nextButton = document.querySelector(".button-next");
const questionCounter = document.querySelector(".question-total");

let questionCount = 0;
let questionNumber = 1;
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let userCookie = [];
let resultText = "";
let resultLink = "";
let resultIcon;

function calculateResult(userCookie) {
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].smell == userCookie[0]) {
      switch (userCookie[1]) {
        case "Jingle Bells":
          resultText = cookies[i].options[3].name;
          resultLink = cookies[i].options[3].link;
          resultIcon = '<i class="fa-solid fa-candy-cane"></i>';
          break;
        case "Rockin' around the Christmas tree":
          resultText = cookies[i].options[2].name;
          resultLink = cookies[i].options[2].link;
          resultIcon = '<i class="fa-solid fa-cookie-bite"></i>';
          break;
        case "O come all ye faithful":
          resultText = cookies[i].options[0].name;
          resultLink = cookies[i].options[0].link;
          resultIcon = '<i class="fa-solid fa-holly-berry"></i>';
          break;
        case "The first Noel":
          resultText = cookies[i].options[1].name;
          resultLink = cookies[i].options[1].link;
          resultIcon = '<i class="fa-solid fa-cookie"></i>';
          break;
      }
    }
  }
}

function optionSelected(answer) {
  let userAns = answer.textContent;
  const allOptions = optionList.children.length;
  answer.classList.add("correct");
  answer.insertAdjacentHTML("beforeend", tickIconTag);
  userCookie.push(userAns);
  for (i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }
  nextButton.classList.add("show");
}

function setter() {
  showQuestions(questionCount);
  setQuestionCounter(questionNumber);
  nextButton.classList.remove("show");
}

function resetter() {
  wrapperResult.classList.remove("activeResult");
  questionCount = 0;
  questionNumber = 1;
}

function setQuestionCounter(index) {
  let totalQuestionCountTag =
    "<span><p>" + index + "</p> of <p>" + questions.length + "</p></span>";
  questionCounter.innerHTML = totalQuestionCountTag;
}

function showQuestions(index) {
  const textQuiz = document.querySelector(".text-quiz");
  let questionTag = "<span>" + questions[index].question + "</span>";
  let optionTag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  textQuiz.innerHTML = questionTag;
  optionList.innerHTML = optionTag;

  const options = optionList.querySelectorAll(".option");

  for (i = 0; i < options.length; i++) {
    options[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function showResult() {
  wrapperQuiz.classList.remove("activeQuiz");
  wrapperResult.classList.add("activeResult");
  const scoreText = wrapperResult.querySelector(".text-score");
  const completeText = wrapperResult.querySelector(".text-complete");
  const resultBoxIcon = wrapperResult.querySelector(".icon-result");
  calculateResult(userCookie);
  let iconTag = resultIcon;
  let completeTag = "<p>You are a <span>" + resultText + "</span></p>";
  let scoreTag =
    '<span><a href="' +
    resultLink +
    '" target="_blank">Check recipe</a></span>';
  completeText.innerHTML = completeTag;
  scoreText.innerHTML = scoreTag;
  resultBoxIcon.innerHTML = iconTag;
  userCookie = [];
}

buttonQuiz.onclick = () => {
  wrapperQuiz.classList.add("activeQuiz");
  showQuestions(0);
  setQuestionCounter(1);
};

restartQuiz.onclick = () => {
  wrapperQuiz.classList.add("activeQuiz");
  resetter();
  setter();
};

quitQuiz.onclick = () => {
  wrapperQuiz.classList.remove("activeQuiz");
  resetter();
  // window.location.reload();
};

nextButton.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    questionNumber++;
    setter();
  } else {
    showResult();
  }
};

/**MOBILE MENU */
const hamburgerIcon = document.querySelector(".icon-menu");
const mobileMenu = document.querySelector(".hidden-mobile");

hamburgerIcon.onclick = () => {
  console.log("Hello");
  showMenu();
}

function showMenu() {
  if (mobileMenu.style.display == "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }
}


