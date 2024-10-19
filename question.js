// Danh sách câu hỏi trí tuệ
const questionsIntell = [
  {
    title: "Câu hỏi 1:",
    question: "Cái gì mỗi ngày phải gỡ ra mới có công dụng",
    answers: {
      a: "Lịch",
      b: "Đồng hồ",
      c: "Sổ tay",
      d: "Quạt điện",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 2:",
    question: "Con gì sinh ra đạo đức đã không tốt?",
    answers: {
      a: "Con mèo",
      b: "Con lừa",
      c: "Con voi",
      d: "Con rắn",
    },
    correctAnswer: "b",
  },
  {
    title: "Câu hỏi 3:",
    question: "Cái gì luôn muốn đi đến mà không bao giờ đến được?",
    answers: {
      a: "Đường chân trời",
      b: "Mặt trời",
      c: "Thời gian",
      d: "Xe buýt",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 4:",
    question: "Cái gì của bạn nhưng người khác sử dụng nhiều hơn bạn?",
    answers: {
      a: "Điện thoại của bạn",
      b: "Tên của bạn",
      c: "Nhà của bạn",
      d: "Máy tính của bạn",
    },
    correctAnswer: "b",
  },
  {
    title: "Câu hỏi 5:",
    question: "Lông của gấu bắc cực có màu gì?",
    answers: {
      a: "Trong suốt",
      b: "Trắng",
      c: "Đen",
      d: "Xám",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 6:",
    question: "Con gì có chân nhưng không biết đi?",
    answers: {
      a: "Con nít",
      b: "Con lừa",
      c: "Con voi",
      d: "Con rắn",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 7:",
    question: "Con gì đầu dê mình ốc?",
    answers: {
      a: "Con sên",
      b: "Con cừu",
      c: "Con voi",
      d: "Con ếch",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 8:",
    question: "Động vật có nhiều răng nhất?",
    answers: {
      a: "Voi",
      b: "Ngựa",
      c: "Cá mập",
      d: "Con rắn",
    },
    correctAnswer: "c",
  },
  {
    title: "Câu hỏi 9:",
    question: "Chim nào có thể bay lùi?",
    answers: {
      a: "Chim ruồi",
      b: "Chim đại bàng",
      c: "Con sáo",
      d: "Con cánh cụt",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 10:",
    question: "Trên lông dưới lông, tối lồng thành một đống, là gì?",
    answers: {
      a: "Đôi mắt",
      b: "Mái tóc",
      c: "Lông mày",
      d: "Râu",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 11:",
    question:
      "Ruột thẳng băng \n" +
      "Khi thịt bị cắt khỏi thân \n " +
      "Thì ruột lòi dần vẫn thẳng như rưới? \n",
    answers: {
      a: "Cái ống hút",
      b: "Cái thước",
      c: "Con rắn",
      d: "Cây bút chì",
    },
    correctAnswer: "d",
  },
  {
    title: "Câu hỏi 12:",
    question:
      "Da trắng muốt \n Ruột trắng tinh \n Bạn với với học sinh \n Thích cọ đầu vào bảng?",
    answers: {
      a: "Cục tẩy",
      b: "Cục phấn",
      c: "Bút chì",
      d: "Bảng đen",
    },
    correctAnswer: "b",
  },
  {
    title: "Câu hỏi 13:",
    question:
      "Có chân mà chẳng biết đi \n Có mặt phẳng lì chi kẻ ngồi trên \n Là cái gì?",
    answers: {
      a: "Cái ghế",
      b: "Cái bàn",
      c: "Cái quạt",
      d: "Cái tủ",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 14:",
    question:
      "Tám thằng dân vần cục đá tảng \n Hai ông xã xách nặng chạy theo \n Là con gì?",
    answers: {
      a: "Con voi",
      b: "Con cua",
      c: "Con kiến",
      d: "Con rùa",
    },
    correctAnswer: "b",
  },
  {
    title: "Câu hỏi 15:",
    question:
      "Hè về áo đỏ như son \n Hè đi thay lá xanh non mượt mà \n Bao nhiêu tay tỏa rộng ra \n Như vẫy như đón bạn ta đến trường \n Là cây gì?",
    answers: {
      a: "Cây phượng",
      b: "Cây bàng",
      c: "Cây xoài",
      d: "Cây râm bụt",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 16:",
    question: "Cái gì có thể đi lên nhưng không thể đi xuống?",
    answers: {
      a: "Tuổi tác",
      b: "Máy bay",
      c: "Thang máy",
      d: "Cầu thang",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 16:",
    question: "Cái gì có thể đi lên nhưng không thể đi xuống?",
    answers: {
      a: "Tuổi tác",
      b: "Máy bay",
      c: "Thang máy",
      d: "Cầu thang",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 17:",
    question:
      "Ai là người thường nói chuyện với chính mình những vẫn không bị điên?",
    answers: {
      a: "Người viết",
      b: "Người thợ mộc",
      c: "Người bác sĩ",
      d: "Người lái xe",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 18:",
    question:
      "Tôi có mặt ở khắp nơi trên thế giới nhưng lại không có hình gì, tôi là gì?",
    answers: {
      a: "Nước",
      b: "Lửa",
      c: "Không khí",
      d: "Gió",
    },
    correctAnswer: "c",
  },
  {
    title: "Câu hỏi 19:",
    question:
      "Có một cái cây, cây này không có lá, không có hoa, chỉ có quả, cái cây đó là gì?",
    answers: {
      a: "Cây bút cam",
      b: "Cây dừa",
      c: "Cây táo",
      d: "Cây bút chì",
    },
    correctAnswer: "d",
  },
  {
    title: "Câu hỏi 20:",
    question:
      "Cái gì không thể giữ trong tay nhưng vẫn có thể khiến bạn hạnh phúc?",
    answers: {
      a: "Nụ cười",
      b: "Người yêu",
      c: "Hộp bánh",
      d: "Quyển sách",
    },
    correctAnswer: "a",
  },
];
// Danh sách câu hỏi trí tuệ
const questionTrivia = [
  {
    title: "Câu hỏi 1:",
    question: "Vào tháng mấy con người sẽ ngủ ít nhất trong năm?",
    answers: {
      a: "Tháng 2",
      b: "Tháng 1",
      c: "Tháng 12",
      d: "Tháng 6",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 2:",
    question: "Nhà nào lạnh lẽo nhưng ai cũng muốn tới?",
    answers: {
      a: "Nhà bank",
      b: "Nhà băng",
      c: "Nhà banh",
      d: "Nhà người yêu",
    },
    correctAnswer: "b",
  },
  {
    title: "Câu hỏi 3:",
    question:
      "Một người năm nay đã 40 tuổi. Người đó có bao nhiêu ngày sinh nhật?",
    answers: {
      a: "40",
      b: "1",
      c: "20",
      d: "10",
    },
    correctAnswer: "b",
  },
  {
    title: "Câu hỏi 4:",
    question: "Môn gì càng thắng càng thua?",
    answers: {
      a: "Cờ tướng",
      b: "Đua xe",
      c: "Đá bóng",
      d: "Cầu lông",
    },
    correctAnswer: "b",
  },
  {
    title: "Câu hỏi 5:",
    question:
      "A gọi B là bác, B gọi C là ông nội, C gọi D là cậu, D gọi E là dì. A gọi E là gì?",
    answers: {
      a: "Bằng cậu",
      b: "Bằng chú",
      c: "Bằng miệng",
      d: "Bằng mẹ",
    },
    correctAnswer: "c",
  },
  {
    title: "Câu hỏi 6:",
    question: "Bạn làm việc gì đầu tiên mỗi buổi sáng?",
    answers: {
      a: "Rửa mặt",
      b: "Đánh răng",
      c: "Dụi mặt",
      d: "Mở mắt",
    },
    correctAnswer: "d",
  },
  {
    title: "Câu hỏi 7:",
    question: "Cái gì ở giữa bầu trời và trái đất?",
    answers: {
      a: "Mây",
      b: "Và",
      c: "Không khí",
      d: "Mặt trăng",
    },
    correctAnswer: "b",
  },
  {
    title: "Câu hỏi 8:",
    question:
      "Cái gì người mua biết, người bán biết, người xài không bao giờ biết?",
    answers: {
      a: "Cái hòm",
      b: "Cái xe",
      c: "Cái ghế",
      d: "Cái bàn",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 9:",
    question: "Cái gì luôn muốn đi đến mà không bao giờ đến được?",
    answers: {
      a: "Mặt trời",
      b: "Trạm xe buýt",
      c: "Đường chân trời",
      d: "Nông Lâm Uni",
    },
    correctAnswer: "c",
  },
  {
    title: "Câu hỏi 10:",
    question: "Cái gì khi bạn nói ra tên của nó là sẽ vỡ?",
    answers: {
      a: "Sự im lặng",
      b: "Bóng bay",
      c: "Gương",
      d: "Cốc thủy tinh",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 11:",
    question:
      "Một người đang ông đội mũ bảo hiểm và mang theo dù nhảy khỏi máy bay. Nhưng anh ta lại không mở dù, và vẫn sống sót, tại sao?",
    answers: {
      a: "Máy bay chưa bay",
      b: "Anh ta là siêu nhân",
      c: "Anh tả nhảy xuống nước",
      d: "Dù bị hỏi",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 12:",
    question:
      "Có một tàu điện đi về hướng nam. Gió hướng tây bắc. Vậy khói từ con tàu sẽ theo hướng nào?",
    answers: {
      a: "Hướng nam",
      b: "Hướng đông",
      c: "Tàu điện không có khói",
      d: "Hướng tây",
    },
    correctAnswer: "c",
  },
  {
    title: "Câu hỏi 13:",
    question:
      "Làm thế nào để không đụng phải ngón tay khi bạn đập búa vào một cái móng tay?",
    answers: {
      a: "Đập thật nhanh",
      b: "Đập cẩn thận",
      c: "Cầm búa bằng 2 tay",
      d: "Đập thật chậm",
    },
    correctAnswer: "c",
  },
  {
    title: "Câu hỏi 14:",
    question:
      "Nếu bạn nhìn thấy con chim đang đậu trên nhánh cây, làm sao để lấy nhánh cây mà không làm động con chim?",
    answers: {
      a: "Đợi con chim bay đi",
      b: "Bắt con chim",
      c: "Chặt nhánh cây",
      d: "Nhẹ nhàng kéo nhánh cây",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 15:",
    question:
      "Cái đầu giống mèo, chân giống mèo, và tai giống con mèo, nhưng không phải con mèo, vậy là con gì?",
    answers: {
      a: "Mèo con",
      b: "Mèo giả",
      c: "Con cọp",
      d: "Con báo",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 16:",
    question: "Miệng rộng nhưng không nói một từ, là gì?",
    answers: {
      a: "Con mèo",
      b: "Con sông",
      c: "Cái loa",
      d: "Con voi",
    },
    correctAnswer: "b",
  },
  {
    title: "Câu hỏi 17:",
    question: "Từ nào trong tiếng có chín mẫu tự h?",
    answers: {
      a: "Học",
      b: "Hiền",
      c: "Hùng",
      d: "Chính",
    },
    correctAnswer: "d",
  },
  {
    title: "Câu hỏi 18:",
    question: "Từ gì bỏ đầu thành tên quốc gia, mất đuôi ra một loài chim?",
    answers: {
      a: "Cúc",
      b: "Cây",
      c: "Cung",
      d: "Không có",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 19:",
    question: "Từ nào có 12 chữ M?",
    answers: {
      a: "Tám",
      b: "Mười hai",
      c: "Mười",
      d: "Một",
    },
    correctAnswer: "a",
  },
  {
    title: "Câu hỏi 20:",
    question: "Cái gì ở giữa Paris?",
    answers: {
      a: "A",
      b: "R",
      c: "P",
      d: "S",
    },
    correctAnswer: "b",
  },
];
let currentQuestionIndex = 0;

// Lấy các phần tử DOM
const questionTitleElement = document.getElementById("question-title");
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
function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
// Hiển thị câu hỏi
function displayQuestion() {
  let currentQuestion = "";
  if (getQueryParameter("type") === "cauhoitritue") {
    currentQuestion = questionsIntell[currentQuestionIndex];
  } else {
    currentQuestion = questionTrivia[currentQuestionIndex];
  }

  questionTitleElement.textContent = currentQuestion.title;
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
}

// Xử lý khi chọn câu trả lời
function checkAnswer(selectedAnswerButton, selectedAnswer) {
  let questions = "";
  if (getQueryParameter("type") === "cauhoitritue") {
    questions = questionsIntell;
  } else {
    questions = questionTrivia;
  }
  clearInterval(timerInterval); // Dừng bộ đếm thời gian
  // Tô màu vàng cho câu trả lời được chọn
  selectedAnswerButton.style.backgroundColor = "#ffcc33";
  disableButtons(); // Vô hiệu hóa tất cả các nút sau khi chọn câu trả lời

  // Chờ 2 giây để hiển thị đáp án đúng
  setTimeout(() => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    // Thêm hiệu ứng nhấp nháy cho đáp án đúng
    highlightCorrectAnswerWithBlink();

    // Nếu câu trả lời là đúng, có thể thêm logic phần thưởng ở đây
    if (isCorrect) {
      correctSound.play();
      timerSound.pause();
    } else {
      wrongSound.play();
      timerSound.pause();
      selectedAnswerButton.style.backgroundColor = "red";
    }
  }, 1000); // Thời gian đợi 2 giây trước khi hiển thị kết quả
}
function disableButtons() {
  for (let key in answerButtons) {
    answerButtons[key].classList.add("no-hover"); // Thêm lớp no-hover để vô hiệu hóa hover
  }
}

// Làm nổi bật và nhấp nháy đáp án đúng
function highlightCorrectAnswerWithBlink() {
  let questions = "";
  if (getQueryParameter("type") === "cauhoitritue") {
    questions = questionsIntell;
  } else {
    questions = questionTrivia;
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
// Chuyển đến câu hỏi tiếp theo
nextButton.addEventListener("click", () => {
  let questions = "";
  if (getQueryParameter("type") === "cauhoitritue") {
    questions = questionsIntell;
  } else {
    questions = questionTrivia;
  }
  clearInterval(timerInterval);
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    alert("Bạn đã hoàn thành tất cả các câu hỏi!");
    return;
  }
  resetQuestion();
  displayQuestion();
  timeLeft = 15; // Đặt lại thời gian
  startTimer();
});

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
  displayQuestion();
  startTimer();
};
