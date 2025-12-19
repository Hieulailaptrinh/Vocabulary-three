const vocabularyData = [
  {
    id: 1,
    word: "remove",
    ipa: "/rɪˈmuːv/",
    meaning: "loại bỏ",
    example: "Please remove your shoes before entering.",
  },
  {
    id: 2,
    word: "spill",
    ipa: "/spɪl/",
    meaning: "tràn, làm đổ",
    example: "Don't spill the coffee on the carpet.",
  },
  {
    id: 3,
    word: "railing",
    ipa: "/ˈreɪ.lɪŋ/",
    meaning: "lan can",
    example: "Hold onto the railing when walking down.",
  },
  {
    id: 4,
    word: "arrange",
    ipa: "/əˈreɪndʒ/",
    meaning: "sắp xếp",
    example: "Let's arrange a meeting for next week.",
  },
  {
    id: 5,
    word: "out of stock",
    ipa: "/aʊt əv stɒk/",
    meaning: "hết hàng",
    example: "I am sorry, this item is out of stock.",
  },
  {
    id: 6,
    word: "be scheduled to do smt",
    ipa: "/bi ˈʃed.juːld tu/",
    meaning: "được lên lịch làm gì",
    example: "The flight is scheduled to depart at 6 PM.",
  },
  {
    id: 7,
    word: "require",
    ipa: "/rɪˈkwaɪər/",
    meaning: "yêu cầu",
    example: "This job requires a lot of patience.",
  },
  {
    id: 8,
    word: "charge",
    ipa: "/tʃɑːdʒ/",
    meaning: "sạc, tính phí",
    example: "They charge a small fee for delivery.",
  },
  {
    id: 9,
    word: "supervisor",
    ipa: "/ˈsuː.pə.vaɪ.zər/",
    meaning: "người giám sát",
    example: "Report any issues to your supervisor.",
  },
  {
    id: 10,
    word: "harvest",
    ipa: "/ˈhɑː.vɪst/",
    meaning: "thu hoạch",
    example: "Farmers harvest crops in the autumn.",
  },
  {
    id: 11,
    word: "demonstration",
    ipa: "/ˌdem.ənˈstreɪ.ʃən/",
    meaning: "minh hoạ, giới thiệu",
    example: "He gave a demonstration of the new product.",
  },
  {
    id: 12,
    word: "prefer",
    ipa: "/prɪˈfɜːr/",
    meaning: "thích hơn",
    example: "I prefer tea to coffee.",
  },
  {
    id: 13,
    word: "aisle",
    ipa: "/aɪl/",
    meaning: "lối đi (giữa các kệ hàng/ghế)",
    example: "You can find milk in aisle three.",
  },
  {
    id: 14,
    word: "officially",
    ipa: "/əˈfɪʃ.əl.i/",
    meaning: "một cách chính thức",
    example: "The store is officially open.",
  },
  {
    id: 15,
    word: "sign a contract",
    ipa: "/saɪn ə ˈkɒn.trækt/",
    meaning: "ký hợp đồng",
    example: "We will sign a contract tomorrow morning.",
  },
  {
    id: 16,
    word: "donate",
    ipa: "/dəʊˈneɪt/",
    meaning: "quyên góp",
    example: "Please donate to the local charity.",
  },
  {
    id: 17,
    word: "foundation",
    ipa: "/faʊnˈdeɪ.ʃən/",
    meaning: "tổ chức, nền tảng",
    example: "The foundation supports education for kids.",
  },
  {
    id: 18,
    word: "organization",
    ipa: "/ˌɔː.ɡən.aɪˈzeɪ.ʃən/",
    meaning: "tổ chức",
    example: "She works for a non-profit organization.",
  },
  {
    id: 19,
    word: "expand",
    ipa: "/ɪkˈspænd/",
    meaning: "mở rộng",
    example: "The company plans to expand to Asia.",
  },
  {
    id: 20,
    word: "create",
    ipa: "/kriˈeɪt/",
    meaning: "tạo ra",
    example: "Use this software to create designs.",
  },
  {
    id: 21,
    word: "application",
    ipa: "/ˌæp.lɪˈkeɪ.ʃən/",
    meaning: "đơn xin, ứng dụng",
    example: "I submitted my job application yesterday.",
  },
  {
    id: 22,
    word: "registration",
    ipa: "/ˌredʒ.ɪˈstreɪ.ʃən/",
    meaning: "sự đăng ký",
    example: "Registration is open until Friday.",
  },
  {
    id: 23,
    word: "participant",
    ipa: "/pɑːˈtɪs.ɪ.pənt/",
    meaning: "người tham gia",
    example: "Each participant received a certificate.",
  },
  {
    id: 24,
    word: "impressive",
    ipa: "/ɪmˈpres.ɪv/",
    meaning: "ấn tượng",
    example: "Her presentation was very impressive.",
  },
  {
    id: 25,
    word: "turnout",
    ipa: "/ˈtɜːn.aʊt/",
    meaning: "số người tham dự",
    example: "There was a high turnout at the event.",
  },
  {
    id: 26,
    word: "certainly",
    ipa: "/ˈsɜː.tən.li/",
    meaning: "chắc chắn",
    example: "I will certainly help you with that.",
  },
  {
    id: 27,
    word: "variety",
    ipa: "/vəˈraɪ.ə.ti/",
    meaning: "sự đa dạng",
    example: "The shop offers a variety of fruits.",
  },
  {
    id: 28,
    word: "streamline",
    ipa: "/ˈstriːm.laɪn/",
    meaning: "tinh giản, cải thiện",
    example: "We need to streamline our production process.",
  },
  {
    id: 29,
    word: "specific",
    ipa: "/spəˈsɪf.ɪk/",
    meaning: "cụ thể",
    example: "Can you be more specific about the problem?",
  },
  {
    id: 30,
    word: "executive",
    ipa: "/ɪɡˈzek.jə.tɪv/",
    meaning: "người điều hành",
    example: "He is a senior executive at the bank.",
  },
  {
    id: 31,
    word: "administrative",
    ipa: "/ədˈmɪn.ɪ.strə.tɪv/",
    meaning: "thuộc hành chính/quản trị",
    example: "She handles administrative tasks.",
  },
  {
    id: 32,
    word: "investment",
    ipa: "/ɪnˈvest.mənt/",
    meaning: "sự đầu tư",
    example: "Real estate is a safe investment.",
  },
  {
    id: 33,
    word: "cost estimate",
    ipa: "/kɒst ˈes.tɪ.meɪt/",
    meaning: "ước tính chi phí",
    example: "Can you provide a cost estimate for the repair?",
  },
  {
    id: 34,
    word: "revise",
    ipa: "/rɪˈvaɪz/",
    meaning: "sửa đổi, xem lại",
    example: "Please revise the report before sending it.",
  },
  {
    id: 35,
    word: "unfortunately",
    ipa: "/ʌnˈfɔː.tʃən.ət.li/",
    meaning: "không may thay",
    example: "Unfortunately, I cannot attend the meeting.",
  },
  {
    id: 36,
    word: "appointment",
    ipa: "/əˈpɔɪnt.mənt/",
    meaning: "lịch hẹn",
    example: "I have a doctor's appointment at 3 PM.",
  },
  {
    id: 37,
    word: "instruction",
    ipa: "/ɪnˈstrʌk.ʃən/",
    meaning: "sự hướng dẫn",
    example: "Read the instruction manual carefully.",
  },
  {
    id: 38,
    word: "rack",
    ipa: "/ræk/",
    meaning: "giá đỡ",
    example: "Put your coat on the rack.",
  },
  {
    id: 39,
    word: "adjust",
    ipa: "/əˈdʒʌst/",
    meaning: "điều chỉnh",
    example: "You can adjust the height of the chair.",
  },
  {
    id: 40,
    word: "determine",
    ipa: "/dɪˈtɜː.mɪn/",
    meaning: "xác định",
    example: "We need to determine the cause of the fire.",
  },
  {
    id: 41,
    word: "reasonable",
    ipa: "/ˈriː.zən.ə.bəl/",
    meaning: "hợp lý",
    example: "The price was very reasonable.",
  },
  {
    id: 42,
    word: "production",
    ipa: "/prəˈdʌk.ʃən/",
    meaning: "sự sản xuất",
    example: "Car production has increased this year.",
  },
  {
    id: 43,
    word: "prototype",
    ipa: "/ˈprəʊ.tə.taɪp/",
    meaning: "nguyên mẫu",
    example: "They built a prototype of the new machine.",
  },
  {
    id: 44,
    word: "persuade",
    ipa: "/pəˈsweɪd/",
    meaning: "thuyết phục",
    example: "Try to persuade him to join us.",
  },
  {
    id: 45,
    word: "inexpensive",
    ipa: "/ˌɪn.ɪkˈspen.sɪv/",
    meaning: "không đắt tiền",
    example: "This restaurant is good and inexpensive.",
  },
  {
    id: 46,
    word: "assemble",
    ipa: "/əˈsem.bəl/",
    meaning: "lắp ráp, tập hợp",
    example: "It took hours to assemble the table.",
  },
  {
    id: 47,
    word: "issue",
    ipa: "/ˈɪʃ.uː/",
    meaning: "vấn đề / ban hành",
    example: "We are facing a technical issue.",
  },
  {
    id: 48,
    word: "evaluate",
    ipa: "/ɪˈvæl.ju.eɪt/",
    meaning: "đánh giá",
    example: "We need to evaluate the employee's performance.",
  },
  {
    id: 49,
    word: "head over to",
    ipa: "/hed ˈəʊ.vər tu/",
    meaning: "đi đến đâu",
    example: "Let's head over to the cafeteria.",
  },
  {
    id: 50,
    word: "accountant",
    ipa: "/əˈkaʊn.tənt/",
    meaning: "kế toán",
    example: "My brother works as an accountant.",
  },
  {
    id: 51,
    word: "take care of",
    ipa: "/teɪk keər əv/",
    meaning: "chăm sóc, lo liệu",
    example: "I will take care of the arrangements.",
  },
  {
    id: 52,
    word: "retirement",
    ipa: "/rɪˈtaɪə.mənt/",
    meaning: "sự nghỉ hưu",
    example: "He is saving money for his retirement.",
  },
  {
    id: 53,
    word: "celebrate",
    ipa: "/ˈsel.ə.breɪt/",
    meaning: "ăn mừng, tổ chức",
    example: "We will celebrate your birthday tonight.",
  },
  {
    id: 54,
    word: "former",
    ipa: "/ˈfɔː.mər/",
    meaning: "trước đây, cựu",
    example: "She is a former employee of this company.",
  },
  {
    id: 55,
    word: "colleague",
    ipa: "/ˈkɒl.iːɡ/",
    meaning: "đồng nghiệp",
    example: "I am having lunch with a colleague.",
  },
  {
    id: 56,
    word: "distribute",
    ipa: "/dɪˈstrɪb.juːt/",
    meaning: "phân phối",
    example: "Volunteers will distribute food to the poor.",
  },
  {
    id: 57,
    word: "urgent",
    ipa: "/ˈɜː.dʒənt/",
    meaning: "khẩn cấp",
    example: "I have an urgent message for you.",
  },
  {
    id: 58,
    word: "fully equipped",
    ipa: "/ˈfʊl.i ɪˈkwɪpt/",
    meaning: "được trang bị đầy đủ",
    example: "The gym is fully equipped with new machines.",
  },
  {
    id: 59,
    word: "capability",
    ipa: "/ˌkeɪ.pəˈbɪl.ə.ti/",
    meaning: "khả năng, sức chứa",
    example: "This phone has the capability to record 4K video.",
  },
  {
    id: 60,
    word: "novelty",
    ipa: "/ˈnɒv.əl.ti/",
    meaning: "tính mới lạ",
    example: "The novelty of the new job soon wore off.",
  },
  {
    id: 61,
    word: "in time",
    ipa: "/ɪn taɪm/",
    meaning: "kịp giờ",
    example: "We arrived just in time for the movie.",
  },
  {
    id: 62,
    word: "notification",
    ipa: "/ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/",
    meaning: "thông báo",
    example: "You received a notification on your phone.",
  },
  {
    id: 63,
    word: "qualified",
    ipa: "/ˈkwɒl.ɪ.faɪd/",
    meaning: "đủ điều kiện, năng lực",
    example: "She is highly qualified for the position.",
  },
  {
    id: 64,
    word: "procedure",
    ipa: "/prəˈsiː.dʒər/",
    meaning: "quy trình",
    example: "Follow the safety procedure carefully.",
  },
  {
    id: 65,
    word: "investigate",
    ipa: "/ɪnˈves.tɪ.ɡeɪt/",
    meaning: "điều tra",
    example: "Police are investigating the accident.",
  },
  {
    id: 66,
    word: "alert",
    ipa: "/əˈlɜːt/",
    meaning: "tỉnh táo / cảnh báo",
    example: "Drivers must stay alert on the road.",
  },
  {
    id: 67,
    word: "go over something",
    ipa: "/ɡəʊ ˈəʊ.vər/",
    meaning: "xem kỹ lại",
    example: "Let's go over the details one more time.",
  },
  {
    id: 68,
    word: "affordable",
    ipa: "/əˈfɔː.də.bəl/",
    meaning: "giá phải chăng",
    example: "This brand offers affordable clothing.",
  },
  {
    id: 69,
    word: "dedication",
    ipa: "/ˌded.ɪˈkeɪ.ʃən/",
    meaning: "sự tận tâm",
    example: "I admire her dedication to the job.",
  },
  {
    id: 70,
    word: "operate",
    ipa: "/ˈɒp.ər.eɪt/",
    meaning: "vận hành",
    example: "Do you know how to operate this machine?",
  },
  {
    id: 71,
    word: "obtain",
    ipa: "/əbˈteɪn/",
    meaning: "có được, đạt được",
    example: "You must obtain a permit to build here.",
  },
  {
    id: 72,
    word: "open house",
    ipa: "/ˌəʊ.pən ˈhaʊs/",
    meaning: "ngày mở cửa tham quan",
    example: "The school is holding an open house today.",
  },
  {
    id: 73,
    word: "frequent",
    ipa: "/ˈfriː.kwənt/",
    meaning: "thường xuyên",
    example: "He is a frequent visitor to the library.",
  },
  {
    id: 74,
    word: "commercial",
    ipa: "/kəˈmɜː.ʃəl/",
    meaning: "thuộc thương mại",
    example: "This area is for commercial use only.",
  },
  {
    id: 75,
    word: "landscape",
    ipa: "/ˈlænd.skeɪp/",
    meaning: "tạo cảnh quan, phong cảnh",
    example: "They hired a company to landscape the garden.",
  },
  {
    id: 76,
    word: "productivity",
    ipa: "/ˌprɒd.ʌkˈtɪv.ə.ti/",
    meaning: "năng suất",
    example: "We need to increase productivity in the factory.",
  },
  {
    id: 77,
    word: "vary",
    ipa: "/ˈveə.ri/",
    meaning: "dao động, khác nhau",
    example: "Prices vary depending on the season.",
  },
  {
    id: 78,
    word: "grant",
    ipa: "/ɡrɑːnt/",
    meaning: "trợ cấp, cấp cho",
    example: "The government granted them the money.",
  },
  {
    id: 79,
    word: "concourse",
    ipa: "/ˈkɒŋ.kɔːs/",
    meaning: "hội trường, sảnh lớn",
    example: "Meet me at the main concourse of the station.",
  },
  {
    id: 80,
    word: "nutritional",
    ipa: "/njuːˈtrɪʃ.ən.əl/",
    meaning: "thuộc về dinh dưỡng",
    example: "Check the nutritional value of the food.",
  },
];

// --- QUẢN LÝ TRẠNG THÁI (STATE) ---
let currentVocabList = [...vocabularyData];
let learnedIds = JSON.parse(localStorage.getItem("learnedWords")) || [];
let currentIndex = 0; // Index Flashcard

// Biến cho phần Practice Quiz
let quizIndex = 0;
let wrongAnswers = [];
let isReviewMode = false;

// Biến cho phần Context Quiz
let contextIndex = 0;

// --- DOM ELEMENTS ---
// Navigation
const navItems = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll(".section");

// Flashcard
const flashcard = document.getElementById("flashcard");
const elWord = document.getElementById("vocab-word");
const elIpa = document.getElementById("vocab-ipa");
const elMeaning = document.getElementById("vocab-meaning");
const elExample = document.getElementById("vocab-example");
const elCounter = document.getElementById("card-counter");
const btnSpeak = document.getElementById("btn-speak");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const btnShuffle = document.getElementById("btn-shuffle");
const btnMarkLearned = document.getElementById("btn-mark-learned");
const inputJump = document.getElementById("jump-input");
const btnJump = document.getElementById("btn-jump");

// Practice Quiz
const quizWordEl = document.getElementById("quiz-word");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");
const btnNextQuiz = document.getElementById("btn-next-quiz");
const wrongCountEl = document.getElementById("wrong-count");
const btnReviewMistakes = document.getElementById("btn-review-mistakes");
const quizModeLabel = document.getElementById("quiz-mode-label");

// Context Quiz (ĐIỀN TỪ) - CẬP NHẬT BIẾN
const contextSentenceEl = document.getElementById("context-sentence");
const contextOptionsEl = document.getElementById("context-options");
const contextFeedbackEl = document.getElementById("context-feedback");
const contextCounterEl = document.getElementById("context-counter");
const btnNextContextAuto = document.getElementById("btn-next-context-auto");
const btnRestartContext = document.getElementById("btn-restart-context");
// Các nút mới thêm
const btnContextPrev = document.getElementById("btn-context-prev");
const btnContextNext = document.getElementById("btn-context-next");

// Progress
const progressPercentEl = document.getElementById("progress-percent");
const learnedCountEl = document.getElementById("learned-count");
const totalCountEl = document.getElementById("total-count");
const btnViewLearned = document.getElementById("btn-view-learned");
const learnedListBox = document.getElementById("learned-list-container");
const learnedListContent = document.getElementById("learned-list-content");
const btnCloseList = document.getElementById("btn-close-list");
const btnReset = document.getElementById("btn-reset");
const circularProgress = document.querySelector(".circular-progress");

// --- KHỞI TẠO ---
window.addEventListener("DOMContentLoaded", () => {
  loadFlashcard(currentIndex);
  updateProgressUI();

  // Khởi tạo các bài tập
  loadPracticeQuiz();
  loadContextQuiz();
});

// --- CHỨC NĂNG 1: NAVIGATION (CHUYỂN TAB) ---
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");

    const targetId = item.getAttribute("data-target");
    sections.forEach((sec) => sec.classList.remove("active-section"));
    document.getElementById(targetId).classList.add("active-section");

    if (targetId === "home") window.scrollTo(0, 0);
    // Nếu chuyển sang tab writing thì load lại để đảm bảo cập nhật
    if (targetId === "writing") loadContextQuiz();
  });
});

window.navigateTo = (targetId) => {
  document.querySelector(`nav ul li[data-target="${targetId}"]`).click();
};

// --- CHỨC NĂNG 2: FLASHCARD ---
function loadFlashcard(index) {
  const data = currentVocabList[index];
  flashcard.classList.remove("flipped");
  elWord.textContent = data.word;
  elIpa.textContent = data.ipa;
  elMeaning.textContent = data.meaning;
  elExample.textContent = `"${data.example}"`;
  elCounter.textContent = `${index + 1}/${currentVocabList.length}`;

  if (learnedIds.includes(data.id)) {
    btnMarkLearned.textContent = "🎉 Đã thuộc từ này";
    btnMarkLearned.disabled = true;
    btnMarkLearned.classList.replace("btn-success", "btn-secondary");
  } else {
    btnMarkLearned.textContent = "✅ Đã thuộc từ này";
    btnMarkLearned.disabled = false;
    btnMarkLearned.classList.replace("btn-secondary", "btn-success");
  }
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

btnSpeak.addEventListener("click", (e) => {
  e.stopPropagation();
  const utterance = new SpeechSynthesisUtterance(
    currentVocabList[currentIndex].word
  );
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
});

btnNext.addEventListener("click", () => {
  if (currentIndex < currentVocabList.length - 1) {
    currentIndex++;
    loadFlashcard(currentIndex);
  } else {
    currentIndex = 0;
    loadFlashcard(currentIndex);
  }
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadFlashcard(currentIndex);
  } else {
    currentIndex = currentVocabList.length - 1;
    loadFlashcard(currentIndex);
  }
});

btnJump.addEventListener("click", () => {
  const val = parseInt(inputJump.value);
  if (val >= 1 && val <= currentVocabList.length) {
    currentIndex = val - 1;
    loadFlashcard(currentIndex);
    inputJump.value = "";
  } else {
    alert(`Vui lòng nhập số từ 1 đến ${currentVocabList.length}`);
  }
});

btnShuffle.addEventListener("click", () => {
  for (let i = currentVocabList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentVocabList[i], currentVocabList[j]] = [
      currentVocabList[j],
      currentVocabList[i],
    ];
  }
  currentIndex = 0;
  loadFlashcard(currentIndex);

  const originalText = btnShuffle.innerHTML;
  btnShuffle.innerHTML = "Đã trộn!";
  setTimeout(() => (btnShuffle.innerHTML = originalText), 1000);
});

btnMarkLearned.addEventListener("click", (e) => {
  e.stopPropagation();
  const currentItem = currentVocabList[currentIndex];
  if (!learnedIds.includes(currentItem.id)) {
    learnedIds.push(currentItem.id);
    localStorage.setItem("learnedWords", JSON.stringify(learnedIds));
    updateProgressUI();
    loadFlashcard(currentIndex);
  }
});

// --- CHỨC NĂNG 3: PRACTICE QUIZ ---
function loadPracticeQuiz() {
  quizFeedbackEl.textContent = "";
  quizOptionsEl.innerHTML = "";
  btnNextQuiz.style.display = "none";

  let sourceList = isReviewMode ? wrongAnswers : vocabularyData;
  if (isReviewMode && wrongAnswers.length === 0) {
    isReviewMode = false;
    quizModeLabel.style.display = "none";
    alert("Bạn đã hoàn thành các câu sai!");
    loadPracticeQuiz();
    return;
  }

  if (quizIndex >= sourceList.length) quizIndex = 0;

  const questionData = sourceList[quizIndex];
  quizWordEl.textContent = questionData.word;

  let options = [questionData];
  while (options.length < 4) {
    const randomItem =
      vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (!options.some((o) => o.id === randomItem.id)) options.push(randomItem);
  }
  options.sort(() => Math.random() - 0.5);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.meaning;
    btn.onclick = () => checkQuizAnswer(opt, questionData, btn);
    quizOptionsEl.appendChild(btn);
  });
}

function checkQuizAnswer(selected, correct, btnElement) {
  const allBtns = quizOptionsEl.querySelectorAll(".option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (selected.id === correct.id) {
    btnElement.classList.add("correct");
    quizFeedbackEl.textContent = "Chính xác! 🎉";
    quizFeedbackEl.style.color = "var(--success)";

    if (isReviewMode) {
      wrongAnswers = wrongAnswers.filter((w) => w.id !== correct.id);
      updateWrongCount();
    }
  } else {
    btnElement.classList.add("wrong");
    quizFeedbackEl.textContent = `Sai rồi! Đáp án là: ${correct.meaning}`;
    quizFeedbackEl.style.color = "var(--error)";
    allBtns.forEach((b) => {
      if (b.textContent === correct.meaning) b.classList.add("correct");
    });
    if (!wrongAnswers.some((w) => w.id === correct.id)) {
      wrongAnswers.push(correct);
      updateWrongCount();
    }
  }
  btnNextQuiz.style.display = "inline-block";
}

btnNextQuiz.addEventListener("click", () => {
  if (!isReviewMode) {
    quizIndex = Math.floor(Math.random() * vocabularyData.length);
  } else {
    quizIndex = 0;
  }
  loadPracticeQuiz();
});

function updateWrongCount() {
  wrongCountEl.textContent = wrongAnswers.length;
  btnReviewMistakes.disabled = wrongAnswers.length === 0;
}

btnReviewMistakes.addEventListener("click", () => {
  isReviewMode = true;
  quizModeLabel.style.display = "inline-block";
  quizIndex = 0;
  loadPracticeQuiz();
});

// --- CHỨC NĂNG 4: CONTEXT QUIZ (ĐIỀN TỪ) ---
function loadContextQuiz() {
  // Reset UI
  contextFeedbackEl.textContent = "";
  contextOptionsEl.innerHTML = "";
  btnNextContextAuto.style.display = "none";
  btnRestartContext.style.display = "none";
  contextSentenceEl.style.display = "block";

  // 1. Logic nút điều hướng (CẬP NHẬT)
  // Khóa nút Previous nếu ở câu đầu
  btnContextPrev.disabled = contextIndex === 0;
  // Khóa nút Next nếu ở câu cuối
  btnContextNext.disabled = contextIndex === vocabularyData.length - 1;

  // 2. Kiểm tra hoàn thành (nếu đi quá số lượng)
  if (contextIndex >= vocabularyData.length) {
    contextSentenceEl.innerHTML = "🎉 Bạn đã hoàn thành hết danh sách.";
    contextCounterEl.textContent = `${vocabularyData.length}/${vocabularyData.length}`;
    btnRestartContext.style.display = "inline-block";
    return;
  }

  const data = vocabularyData[contextIndex];
  contextCounterEl.textContent = `${contextIndex + 1}/${vocabularyData.length}`;

  // Regex thay thế từ
  const regex = new RegExp(`\\b${data.word}\\b`, "gi");
  if (!data.example.match(regex)) {
    // Nếu câu lỗi không tìm thấy từ, tự động next
    console.log("Skipping sentence due to mismatch:", data.word);
    if (contextIndex < vocabularyData.length - 1) {
      contextIndex++;
      loadContextQuiz();
    }
    return;
  }

  const hiddenSentence = data.example.replace(
    regex,
    `<span class="blank-highlight">_____</span>`
  );
  contextSentenceEl.innerHTML = hiddenSentence;

  // Tạo đáp án
  let options = [data];
  while (options.length < 4) {
    const randomItem =
      vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (!options.some((o) => o.id === randomItem.id)) options.push(randomItem);
  }
  options.sort(() => Math.random() - 0.5);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.word;
    btn.onclick = () => checkContextAnswer(opt.id, data.id, data.word, btn);
    contextOptionsEl.appendChild(btn);
  });
}

function checkContextAnswer(selectedId, correctId, correctWord, btnElement) {
  const allBtns = contextOptionsEl.querySelectorAll(".option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (selectedId === correctId) {
    btnElement.classList.add("correct");
    contextFeedbackEl.textContent = "Chính xác!";
    contextFeedbackEl.style.color = "var(--success)";

    // Điền từ vào chỗ trống
    const blank = contextSentenceEl.querySelector(".blank-highlight");
    if (blank) {
      blank.textContent = correctWord;
      blank.classList.add("filled");
    }

    // Hiện nút Next (nếu muốn next thủ công)
    if (contextIndex < vocabularyData.length - 1) {
      btnNextContextAuto.style.display = "inline-block";
    }
  } else {
    btnElement.classList.add("wrong");
    contextFeedbackEl.textContent = `Sai rồi! Đáp án là: ${correctWord}`;
    contextFeedbackEl.style.color = "var(--error)";
    allBtns.forEach((b) => {
      if (b.textContent === correctWord) b.classList.add("correct");
    });
  }
}

// Event Listeners cho Context
btnNextContextAuto.addEventListener("click", () => {
  if (contextIndex < vocabularyData.length - 1) {
    contextIndex++;
    loadContextQuiz();
  }
});

btnRestartContext.addEventListener("click", () => {
  contextIndex = 0;
  loadContextQuiz();
});

// --- SỰ KIỆN MỚI CHO NÚT ĐIỀU HƯỚNG CONTEXT ---
btnContextPrev.addEventListener("click", () => {
  if (contextIndex > 0) {
    contextIndex--;
    loadContextQuiz();
  }
});

btnContextNext.addEventListener("click", () => {
  if (contextIndex < vocabularyData.length - 1) {
    contextIndex++;
    loadContextQuiz();
  }
});

// --- CHỨC NĂNG 5: PROGRESS ---
function updateProgressUI() {
  const learnedCount = learnedIds.length;
  const total = vocabularyData.length;
  learnedCountEl.textContent = learnedCount;
  totalCountEl.textContent = total;

  const percent = Math.round((learnedCount / total) * 100);
  progressPercentEl.textContent = `${percent}%`;

  circularProgress.style.background = `conic-gradient(
    var(--success) ${percent * 3.6}deg,
    #cadcff ${percent * 3.6}deg
  )`;
}

btnViewLearned.addEventListener("click", () => {
  learnedListContent.innerHTML = "";
  if (learnedIds.length === 0) {
    learnedListContent.innerHTML =
      "<p style='padding:10px; text-align:center'>Chưa có từ nào.</p>";
  } else {
    learnedIds.forEach((id) => {
      const item = vocabularyData.find((v) => v.id === id);
      if (item) {
        const li = document.createElement("li");
        li.className = "learned-item";
        li.innerHTML = `
          <span class="learned-word">${item.word}</span>
          <span class="learned-meaning">${item.meaning}</span>
        `;
        learnedListContent.appendChild(li);
      }
    });
  }
  learnedListBox.style.display = "block";
});

btnCloseList.addEventListener("click", () => {
  learnedListBox.style.display = "none";
});

btnReset.addEventListener("click", () => {
  if (confirm("Bạn có chắc muốn xóa toàn bộ tiến độ?")) {
    learnedIds = [];
    localStorage.removeItem("learnedWords");
    updateProgressUI();
    loadFlashcard(currentIndex);
    alert("Đã reset!");
  }
});
