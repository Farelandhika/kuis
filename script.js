// ===============================
// DATABASE SOAL BERDASARKAN LEVEL
// ===============================

const questionSets = {

    easy: {
        timer: 12,
        questions: [
            { q: "Ibukota Indonesia?", a: ["Bandung", "Jakarta", "Medan", "Surabaya"], c: 1 },
            { q: "Gunung tertinggi di dunia?", a: ["K2", "Fuji", "Everest", "Matterhorn"], c: 2 },
            { q: "Planet terdekat dari Matahari?", a: ["Mars", "Merkurius", "Venus", "Bumi"], c: 1 },
            { q: "Hewan tercepat di darat?", a: ["Kuda", "Gepard", "Harimau", "Singa"], c: 1 },
            { q: "Benua terbesar?", a: ["Afrika", "Asia", "Amerika", "Eropa"], c: 1 }
        ]
    },

    normal: {
        timer: 10,
        questions: [
            { q: "Negara penghasil kopi terbesar?", a: ["Brasil", "Indonesia", "Ethiopia", "Colombia"], c: 0 },
            { q: "Penemu lampu pijar?", a: ["Tesla", "Edison", "Newton", "Einstein"], c: 1 },
            { q: "Lambang kimia air?", a: ["O2", "H2O", "CO2", "NaCl"], c: 1 },
            { q: "Sungai terpanjang di dunia?", a: ["Nil", "Amazon", "Yangtze", "Citarum"], c: 1 },
            { q: "Ibukota Australia?", a: ["Sydney", "Canberra", "Perth", "Melbourne"], c: 1 },
            { q: "Gunung tertinggi di Indonesia?", a: ["Kerinci", "Jayawijaya", "Semeru", "Rinjani"], c: 1 },
            { q: "Negara terkecil di dunia?", a: ["Monaco", "Malta", "Vatikan", "Andorra"], c: 2 }
        ]
    },

    hard: {
        timer: 8,
        questions: [
            { q: "Siapa penulis 'Origin of Species'?", a: ["Darwin", "Newton", "Tesla", "Plato"], c: 0 },
            { q: "Unsur paling ringan?", a: ["Oksigen", "Hidrogen", "Helium", "Karbon"], c: 1 },
            { q: "Ibukota Kazakhstan?", a: ["Astana", "Almaty", "Bishkek", "Tashkent"], c: 0 },
            { q: "Matematika: 12 × 14 = ?", a: ["168", "172", "158", "176"], c: 0 },
            { q: "Bahasa tersulit di dunia?", a: ["Cina", "Jepang", "Arab", "Hungaria"], c: 3 },
            { q: "Danau terbesar di dunia?", a: ["Superior", "Baikal", "Caspian Sea", "Victoria"], c: 2 },
            { q: "Tahun runtuhnya Uni Soviet?", a: ["1991", "1989", "1990", "1995"], c: 0 },
            { q: "Presiden AS ke-16?", a: ["Kennedy", "Lincoln", "Washington", "Roosevelt"], c: 1 },
            { q: "Gunung berapi paling aktif?", a: ["Etna", "Merapi", "Krakatau", "Fuji"], c: 1 },
            { q: "Ibukota Pakistan?", a: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"], c: 2 }
        ]
    },

    extreme: {
        timer: 7,
        questions: [
            { q: "Siapa ilmuwan relativitas?", a: ["Edison", "Bohr", "Einstein", "Tesla"], c: 2 },
            { q: "Hewan tertua di bumi?", a: ["Ubur-ubur", "Penyu", "Kura-kura", "Spons"], c: 3 },
            { q: "Berapa bilangan prima ke-20?", a: ["71", "73", "67", "79"], c: 0 },
            { q: "Benua terakhir ditemukan?", a: ["Afrika", "Australia", "Antartika", "Amerika"], c: 2 },
            { q: "Negara dengan pulau terbanyak?", a: ["Indonesia", "Finlandia", "Swedia", "Filipina"], c: 1 },
            { q: "Tahun awal Perang Dunia 1?", a: ["1914", "1918", "1920", "1908"], c: 0 },
            { q: "Suhu 0 Kelvin setara?", a: ["-273°C", "-100°C", "-50°C", "-300°C"], c: 0 },
            { q: "Kepanjangan CPU?", a: ["Central Processing Unit", "Core Power Unit", "Control Program Utility", "Central Program Unit"], c: 0 },
            { q: "Tahun penemuan DNA?", a: ["1953", "1932", "1927", "1960"], c: 0 },
            { q: "Matematika: akar 625?", a: ["20", "25", "15", "30"], c: 1 },
            { q: "Bintang terdekat setelah Matahari?", a: ["Sirius", "Alpha Centauri", "Betelgeuse", "Proxima Centauri"], c: 3 },
            { q: "Ibukota Mongolia?", a: ["Ulan Bator", "Astana", "Bishkek", "Lhasa"], c: 0 }
        ]
    },

    nightmare: {
        timer: 5,
        questions: [
            { q: "Dimensi ke-4 disebut?", a: ["Waktu", "Ruang", "Gravitasi", "Energi"], c: 0 },
            { q: "Bilangan irasional pertama ditemukan?", a: ["Euler", "Pythagoras", "Newton", "Archimedes"], c: 1 },
            { q: "Logika: Jika 6=36, 7=49, 8=64, maka 10=?", a: ["100", "120", "144", "200"], c: 0 },
            { q: "Negara pertama membuat kertas?", a: ["India", "Mesir", "Cina", "Arab"], c: 2 },
            { q: "Matematika: limit x→0 dari sin(x)/x?", a: ["0", "1", "Tidak ada", "∞"], c: 1 },
            { q: "Ilmuwan kuantum pertama?", a: ["Bohr", "Planck", "Fermi", "Schrodinger"], c: 1 },
            { q: "Rumus kecepatan cahaya ditemukan?", a: ["Einstein", "Newton", "Galileo", "Faraday"], c: 0 },
            { q: "Bahasa buatan pertama?", a: ["Esperanto", "Latin", "Sumeria", "Kode Morse"], c: 0 },
            { q: "Bilangan Fibonacci ke-15?", a: ["610", "520", "480", "720"], c: 0 },
            { q: "Planet terpanas?", a: ["Mars", "Venus", "Merkurius", "Jupiter"], c: 1 },
            { q: "Negara tertua di dunia?", a: ["Iran", "China", "Mesir", "San Marino"], c: 3 },
            { q: "Simbol kuantum 'ψ' disebut?", a: ["Wave Function", "Quantum Field", "String", "Boson"], c: 0 },
            { q: "Angka π ditemukan oleh?", a: ["Archimedes", "Galileo", "Einstein", "Euler"], c: 0 },
            { q: "Apa itu singularity?", a: ["Bintang mati", "Tak terhingga", "Lubang cacing", "Energi gelap"], c: 1 },
            { q: "Apakah 0 bilangan natural?", a: ["Ya", "Tidak", "Kadang", "Sulit dijelaskan"], c: 0 }
        ]
    }
};


// ===============================
// VARIABLE GLOBAL
// ===============================

let playerName = "";
let selectedLevel = "";
let questions = [];
let timerLimit = 10;

let current = 0;
let score = 0;
let timerInterval;
let timeLeft = 10;


// ===============================
// ELEMENT HTML
// ===============================

const nameScreen = document.getElementById("name-screen");
const missionScreen = document.getElementById("mission-screen");
const levelScreen = document.getElementById("level-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const saveNameBtn = document.getElementById("save-name-btn");
const playerInput = document.getElementById("player-name");

const missionText = document.getElementById("mission-text");
const chooseLevelBtn = document.getElementById("choose-level-btn");

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

const playerDisplay = document.getElementById("player-display");
const levelDisplay = document.getElementById("level-display");
const timer = document.getElementById("timer");

const finalScore = document.getElementById("final-score");
const missionStatus = document.getElementById("mission-status");

const restartBtn = document.getElementById("restart-btn");


// ===============================
// MASUKKAN NAMA
// ===============================

saveNameBtn.onclick = () => {
    playerName = playerInput.value;

    if (playerName.trim() === "") return alert("Masukkan nama!");

    nameScreen.classList.remove("active");
    missionScreen.classList.add("active");

    missionText.innerHTML = `Halo <b>${playerName}</b>! Ayo selesaikan misi hari ini!`;
};


// ===============================
// PILIH LEVEL
// ===============================

chooseLevelBtn.onclick = () => {
    missionScreen.classList.remove("active");
    levelScreen.classList.add("active");
};


// Ketika level dipilih
document.querySelectorAll(".level-btn").forEach(btn => {
    btn.onclick = () => {
        selectedLevel = btn.dataset.level;

        startLevel(selectedLevel);
    };
});


// ===============================
// START LEVEL
// ===============================

function startLevel(levelName) {

    const set = questionSets[levelName];

    questions = set.questions;
    timerLimit = set.timer;

    current = 0;
    score = 0;

    levelScreen.classList.remove("active");
    quizScreen.classList.add("active");

    playerDisplay.textContent = "Pemain: " + playerName;
    levelDisplay.textContent = "Level: " + levelName.toUpperCase();

    showQuestion();
}


// ===============================
// TAMPILKAN SOAL
// ===============================

function showQuestion() {
    reset();

    const q = questions[current];
    questionText.textContent = q.q;

    q.a.forEach((answer, idx) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.classList.add("answer-btn");
        btn.onclick = () => selectAnswer(idx);
        answerButtons.appendChild(btn);
    });

    startTimer();
}


// RESET BUTTON
function reset() {
    answerButtons.innerHTML = "";
}


// ===============================
// TIMER
// ===============================

function startTimer() {
    clearInterval(timerInterval);

    timeLeft = timerLimit;
    timer.textContent = "⏳ " + timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = "⏳ " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}


// ===============================
// PILIH JAWABAN
// ===============================

function selectAnswer(i) {
    if (i === questions[current].c) score++;

    nextQuestion();
}


// ===============================
// SOAL BERIKUTNYA
// ===============================

function nextQuestion() {
    clearInterval(timerInterval);

    current++;

    if (current < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}


// ===============================
// HASIL QUIZ
// ===============================

function endQuiz() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScore.innerHTML = `${playerName}, skor Anda <b>${score}</b> dari <b>${questions.length}</b> soal.`;

    missionStatus.textContent = score >= Math.floor(questions.length * 0.6)
        ? "🎉 Kamu berhasil menyelesaikan level ini!"
        : "❌ Level ini gagal, coba lagi!";
}


// ===============================
// RESTART GAME
// ===============================

restartBtn.onclick = () => location.reload();
