let questionsIntell = {};
let questionsTrivia = {};
// Function đọc file và lưu vào biến
function loadQuestionsIntell() {
  fetch("questionsIntell.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      questionsIntell = JSON.parse(data);
      displayQuestion();
    });
}
function loadQuestionsTrivia() {
  fetch("questionsTrivia.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      questionsTrivia = JSON.parse(data);
      displayQuestion();
    });
}
let currentQuestionIndex = parseInt(
  localStorage.getItem("currentQuestionIndex")
);
console.log("====================================");
console.log(currentQuestionIndex);
console.log("====================================");

// Lấy các phần tử DOM
const questionTitleElement = document.getElementById("question-title");
const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
const questionElement = document.getElementById("question");
const answerButtons = {
  a: document.getElementById("btn-A"),
  b: document.getElementById("btn-B"),
  c: document.getElementById("btn-C"),
  d: document.getElementById("btn-D"),
};
const timerSound = document.getElementById("timer-sound");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const nextButton = document.getElementById("btn-next");
const timerElement = document.getElementById("timer");

let timeLeft = 15; // Đếm ngược 15 giây
let timerInterval;
function getTypeQuestion() {
  return localStorage.getItem("type");
}
// Hiển thị câu hỏi
function displayQuestion() {
  console.log(getTypeQuestion());
  let currentQuestion = "";
  if (getTypeQuestion("type") === "cauhoitritue") {
    currentQuestion = questionsIntell[currentQuestionIndex];
  } else if (getTypeQuestion("type") === "cauhoidomeo") {
    currentQuestion = questionsTrivia[currentQuestionIndex];
  }

  questionTitleElement.textContent = "Câu hỏi " + currentQuestion.title + ":";
  questionElement.textContent = currentQuestion.question;
  answerButtons.a.textContent = currentQuestion.answers.a;
  answerButtons.b.textContent = currentQuestion.answers.b;
  answerButtons.c.textContent = currentQuestion.answers.c;
  answerButtons.d.textContent = currentQuestion.answers.d;
}

// Bắt đầu đếm ngược thời gian
function startTimer() {
  timerElement.textContent = timeLeft < 10 ? `0${timeLeft}` : timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft < 10 ? `0${timeLeft}` : timeLeft;
    // Phát âm thanh mỗi giây
    timerSound.currentTime = 0; // Đặt lại thời gian âm thanh về đầu
    timerSound.play(); // Phát âm thanh
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout(); // Hết thời gian
    }
  }, 1000);
}

// Xử lý khi hết thời gian
function handleTimeout() {
  highlightCorrectAnswerWithBlink();
  timerSound.pause();
  wrongSound.play();
  disableButtons();
  setTimeout(function () {
    window.location.href = "/penalty/index.html";
  }, 2000);
}

// Xử lý khi chọn câu trả lời
function checkAnswer(selectedAnswerButton, selectedAnswer) {
  let questions = "";
  if (getTypeQuestion("type") === "cauhoitritue") {
    questions = questionsIntell;
  } else if (getTypeQuestion("type") === "cauhoidomeo") {
    questions = questionsTrivia;
  }
  clearInterval(timerInterval); // Dừng bộ đếm thời gian
  // Tô màu vàng cho câu trả lời được chọn
  selectedAnswerButton.style.backgroundColor = "#ffcc33";
  disableButtons(); // Vô hiệu hóa tất cả các nút sau khi chọn câu trả lời
  console.log(questions);
  // Chờ 2 giây để hiển thị đáp án đúng
  setTimeout(() => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    // Thêm hiệu ứng nhấp nháy cho đáp án đúng
    highlightCorrectAnswerWithBlink();

    // Nếu câu trả lời là đúng
    if (isCorrect) {
      correctSound.play();
      timerSound.pause();
      setTimeout(function () {
        window.location.href = "/award/select/index.html";
      }, 2000);
    } else {
      wrongSound.play();
      timerSound.pause();
      setTimeout(function () {
        window.location.href = "/penalty/index.html";
      }, 2000);
      selectedAnswerButton.style.backgroundColor = "red";
    }
  }, 1000); // Thời gian đợi 2 giây trước khi hiển thị kết quả
}
function disableButtons() {
  for (let key in answerButtons) {
    answerButtons[key].classList.add("no-hover"); // Thêm lớp no-hover để vô hiệu hóa hover
  }
}
btnBack.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    localStorage.setItem("index", currentQuestionIndex);
    localStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex - 1
    )((window.location.href = "questionscreen.html"));
  }
});
btnNext.addEventListener("click", () => {
  if (currentQuestionIndex <= localStorage.getItem("index")) {
    localStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex + 1
    )((window.location.href = "questionscreen.html"));
  }
});
// Làm nổi bật và nhấp nháy đáp án đúng
function highlightCorrectAnswerWithBlink() {
  let questions = "";
  if (getTypeQuestion("type") === "cauhoitritue") {
    questions = questionsIntell;
  } else {
    questions = questionsTrivia;
  }
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  const correctButton = answerButtons[correctAnswer];
  correctButton.style.backgroundColor = "#33cc33"; // Giữ màu xanh lá

  correctButton.classList.add("blink"); // Thêm lớp 'blink' để tạo hiệu ứng nhấp nháy

  // Sau khi nhấp nháy xong, giữ màu xanh lá
  setTimeout(() => {
    correctButton.classList.remove("blink"); // Xóa lớp 'blink' sau khi nhấp nháy
  }, 4000); // Hiệu ứng nhấp nháy trong 3 giây
}
// Đặt lại trạng thái câu hỏi và giao diện
function resetQuestion() {
  for (let key in answerButtons) {
    answerButtons[key].style.backgroundColor = "#C9C9C9"; // Đặt lại màu ban đầu của các nút
    answerButtons[key].classList.remove("no-hover"); // Thêm lớp no-hover để vô hiệu hóa hover
    // Thêm sự kiện mouseover và mouseout
    answerButtons[key].addEventListener("mouseover", () => {
      answerButtons[key].classList.add("hover");
    });

    answerButtons[key].addEventListener("mouseout", () => {
      answerButtons[key].classList.remove("hover");
    });
  }
}

// Thêm sự kiện cho các nút trả lời
for (let key in answerButtons) {
  answerButtons[key].addEventListener("click", (e) => {
    checkAnswer(e.target, e.target.value);
  });

  // Thêm sự kiện mouseover và mouseout
  answerButtons[key].addEventListener("mouseover", () => {
    answerButtons[key].classList.add("hover");
  });

  answerButtons[key].addEventListener("mouseout", () => {
    answerButtons[key].classList.remove("hover");
  });
}

// Hiển thị câu hỏi đầu tiên khi trang được tải
window.onload = function () {
  loadQuestionsIntell();
  loadQuestionsTrivia();
  startTimer();
};
