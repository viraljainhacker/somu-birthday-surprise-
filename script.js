/* =====================================
SOMU BIRTHDAY SURPRISE
CLEAN JAVASCRIPT
===================================== */

const totalPhotos = 10;
let currentPage = 0;

/* =====================================
BIRTHDAY MESSAGES
===================================== */

const birthdayMessages = [
  {
    title: "My Cute Somu ❤️",
    number: "01 — A LITTLE SUNSHINE",
    paragraphs: [
      "Heyyy Somu! ❤️ Sabse pehle toh ek baar phir se Happy Birthday, meri CEO Baby! I hope aaj ka din tumhare liye utna hi beautiful ho jitni tum khud ho.",
      "Pata hai, kuch log bina kisi special reason ke bhi special ban jaate hain. Unse zyada baat bhi nahi hoti, kabhi-kabhi bas thodi si conversation hoti hai, lekin phir bhi unki presence achhi lagne lagti hai.",
      "Tum bhi unhi logon mein se ek ho. Bas aise hi hamesha smile karti rehna, meri cute si Somu! 🥹💕",
    ],
  },
  {
    title: "My CEO Baby 👑",
    number: "02 — OFFICIAL CEO",
    paragraphs: [
      "Dear Somu CEO Baby, aaj tumhara special day hai, toh aaj tumhari saari demands officially approved hain! 😂❤️",
      "Waise tumhara attitude, tumhari cuteness aur tumhari little-little drama queen wali personality ekdum unique hai. Kabhi CEO ban jaati ho aur kabhi ekdum innocent baby.",
      "I hope tum apni life mein itni successful bano ki ek din tumhare saare dreams tumhare saamne khade hon. Aur haan, apni CEO wali smile kabhi mat khona! 👑",
    ],
  },
  {
    title: "Beautiful Inside & Out 🌸",
    number: "03 — A LITTLE COMPLIMENT",
    paragraphs: [
      "Somu, tumhari pictures dekhkar ek baat toh clear hai ki camera ko tumse special attachment hai. 😂💕",
      "Lekin beauty sirf pictures tak limited nahi hoti. Kisi insaan ki real beauty uski kindness, uska nature, uski thinking aur uske behaviour mein hoti hai.",
      "I genuinely wish ki tumhari life mein hamesha aise log rahen jo tumhari smile ki value samjhein, tumhari respect karein aur tumhe kabhi apni worth doubt na karne dein.",
    ],
  },
  {
    title: "A Rose For My Rose 🌹",
    number: "04 — BLOOM BEAUTIFULLY",
    paragraphs: [
      "Aaj ke din main tumhare liye duniya ke saare beautiful flowers bhejna chahta, lekin filhaal ye virtual roses accept kar lo. 🌹",
      "May your life bloom like the most beautiful garden. Har naya din tumhare liye naye opportunities, new happiness aur beautiful experiences lekar aaye.",
      "Kabhi apne aap ko kisi aur se compare mat karna. Tumhari apni ek alag identity hai aur tum apne way mein absolutely special ho.",
    ],
  },
  {
    title: "You Deserve Happiness 💗",
    number: "05 — FROM MY HEART",
    paragraphs: [
      "Meri Somu, meri ek chhoti si wish hai ki tumhari life mein kabhi happiness ki kami na ho.",
      "Agar kabhi difficult days aayein toh tumhare paas unhe face karne ki strength ho. Agar kabhi tum sad feel karo toh tumhe koi aisa reason mile jo tumhare face par smile la sake.",
      "Tumhare saare dreams complete hon, tum jo bhi achieve karna chahti ho woh sab achieve karo. Aur haan, khud ka khayal rakhna bhi utna hi important hai, baby! ❤️",
    ],
  },
  {
    title: "My Favourite Kutti 😂",
    number: "06 — LITTLE TROUBLEMAKER",
    paragraphs: [
      "Ab meri favourite kutti ki baat na ho toh birthday incomplete reh jayega. 😂",
      "Kabhi cute, kabhi dramatic, kabhi attitude aur kabhi bilkul innocent banne wali madam. Tumhari ye saari personalities ek hi package mein milti hain!",
      "Bas ek request hai: apna ye cute sa nature kabhi change mat karna. Thoda irritate karna allowed hai, lekin smile karna compulsory hai. Samjhi baby? 😂❤️",
    ],
  },
  {
    title: "A Beautiful Connection 🦋",
    number: "07 — SOMETHING SPECIAL",
    paragraphs: [
      "Kabhi socha nahi tha ki kisi se bina mile bhi ek achhi si connection wali feeling ho sakti hai.",
      "Humari abhi tak mulaqat nahi hui. Bas 2-3 baar calls par thodi der baat hui hai. Lekin kabhi-kabhi chhoti si conversation bhi ek achhi memory ban jaati hai.",
      "I am genuinely glad ki humari baat hui. I hope aage bhi humari conversations aise hi achhi rahen aur hum ek doosre ko aur achhe se jaan sakein.",
    ],
  },
  {
    title: "One Day, Hopefully... 🥹",
    number: "08 — UNTIL WE MEET",
    paragraphs: [
      "Ek wish hai jo main tumhare birthday par karna chahta hoon: hopefully ek din hum finally milenge.",
      "No screen between us, no phone calls, just a real conversation. Saath mein hasi-mazaak, random baatein aur kuch beautiful memories.",
      "Pata nahi woh din kab aayega, but I genuinely hope jab bhi aaye, woh ek bahut achha moment ho. Tab tak apna khayal rakhna, Somu! ❤️",
    ],
  },
  {
    title: "Keep Shining, Baby ✨",
    number: "09 — YOUR BEAUTIFUL FUTURE",
    paragraphs: [
      "I want to see you achieving everything you dream about. I want you to become confident, independent and successful in whatever you choose.",
      "Kabhi kisi ke words ki wajah se apni value kam mat samajhna. Tumhari life tumhari hai, tumhare dreams tumhare hain aur tumhe unhe achieve karne ka poora right hai.",
      "Always believe in yourself. I hope tumhare future mein itni happiness ho ki tumhe apne difficult days bhi bahut chhote lagne lagein. ✨",
    ],
  },
  {
    title: "Happy Birthday, Baby! 🎂",
    number: "10 — YOUR SPECIAL DAY",
    paragraphs: [
      "And finally, the most special wish for the most special birthday girl! ❤️",
      "Somya Bansal, may this new year of your life bring you unlimited happiness, good health, success, genuine friendships and countless beautiful memories.",
      "Aaj khoob enjoy karna, cake khana, photos click karna aur apne birthday ko full enjoy karna. You deserve a beautiful day and an even more beautiful year ahead!",
      "Once again, Happy Birthday, my Somu CEO Baby! 🥹🎀",
    ],
  },
];

/* =====================================
GENERATE MESSAGE PAGES
===================================== */

const messagePages = document.getElementById("messagePages");

if (messagePages) {
  messagePages.innerHTML = "";

  birthdayMessages.forEach((message, index) => {
    const page = document.createElement("section");

    page.className = "message-page";
    page.id = "messagePage" + (index + 1);

    page.innerHTML = `
        <div class="message-card">

            <img
                src="photo${index + 1}.jpeg"
                alt="Somya Birthday Photo ${index + 1}"
            >

            <div class="message-number">
                ${message.number}
            </div>

            <h2>${message.title}</h2>

            ${message.paragraphs.map((p) => `<p>${p}</p>`).join("")}

            <div class="message-decoration">♡ ✨ ♡</div>

        </div>
    `;

    messagePages.appendChild(page);
  });
}

/* =====================================
GENERATE PHOTO GALLERY
===================================== */

const galleryGrid = document.getElementById("galleryGrid");

if (galleryGrid) {
  galleryGrid.innerHTML = "";

  ```
for (let i = 1; i <= totalPhotos; i++) {

    const item = document.createElement("div");

    item.className = "gallery-item";

    item.innerHTML = ` < img;
  src = "photo${i}.jpeg";
  alt = "Somya Photo ${i}";
  loading =
    "lazy" >
    `;

    galleryGrid.appendChild(item);
}
```;
}

/* =====================================
PAGE ELEMENTS
===================================== */

const welcomeScreen = document.getElementById("welcomeScreen");

const galleryPage =
  document.getElementById("galleryPage") ||
  document.getElementById("galleryScreen");

const finalPage =
  document.getElementById("finalPage") ||
  document.getElementById("finalScreen");

const navigation = document.getElementById("navigation");
const nextBtn = document.getElementById("nextBtn");

/* =====================================
PAGE NAVIGATION
===================================== */

function hideAllPages() {
  ```
document.querySelectorAll(".screen, .page, .message-page")
    .forEach(page => {
        page.classList.remove("active");
    });
```;
}

function startSurprise() {
  ```
hideAllPages();

currentPage = 1;

document.getElementById("messagePage1")
    ?.classList.add("active");

navigation?.classList.add("show");

updateButton();

window.scrollTo(0, 0);
```;
}

function nextPage() {
  ```
if (currentPage >= 1 && currentPage < 10) {

    hideAllPages();

    currentPage++;

    document.getElementById("messagePage" + currentPage)
        ?.classList.add("active");

} else if (currentPage === 10) {

    hideAllPages();

    currentPage = 11;

    galleryPage?.classList.add("active");

} else if (currentPage === 11) {

    showFinalPage();

    return;
}

updateButton();

window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```;
}

function showFinalPage() {
  ```
hideAllPages();

currentPage = 12;

finalPage?.classList.add("active");

navigation?.classList.remove("show");

window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```;
}

function updateButton() {
  if (!navigation || !nextBtn) return;

  if (currentPage >= 1 && currentPage <= 10) {
    navigation.classList.add("show");

    nextBtn.innerHTML = `
        Next Surprise
        <i class="fa-solid fa-arrow-right"></i>
    `;
  } else if (currentPage === 11) {
    navigation.classList.add("show");

    nextBtn.innerHTML = `
        Final Message ❤️
        <i class="fa-solid fa-heart"></i>
    `;
  } else {
    navigation.classList.remove("show");
  }
}

if (nextBtn) {
  nextBtn.addEventListener("click", nextPage);
}

/* =====================================
BACKGROUND MUSIC
===================================== */

const birthdayMusic = document.getElementById("birthdayMusic");

if (birthdayMusic) {
  ```
birthdayMusic.loop = true;
birthdayMusic.volume = 0.55;

function startBackgroundMusic() {

    if (!birthdayMusic.paused) return;

    birthdayMusic.play()
        .then(() => {
            console.log("Background music playing ❤️");
        })
        .catch(error => {
            console.log("Music waiting for user interaction:", error);
        });
}

// Try autoplay
window.addEventListener("load", startBackgroundMusic);

// Start music after first interaction if autoplay is blocked
document.addEventListener(
    "click",
    startBackgroundMusic,
    { once: true }
);

document.addEventListener(
    "touchstart",
    startBackgroundMusic,
    { once: true, passive: true }
);
```;
}

/* =====================================
FLOATING HEARTS
===================================== */

const heartsContainer = document.getElementById("floatingHearts");

const heartSymbols = ["❤️", "💕", "💗", "♡", "💖"];

function createHeart() {
  ```
if (!heartsContainer) return;

const heart = document.createElement("span");

heart.className = "heart";

heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

heart.style.left = Math.random() * 100 + "%";
heart.style.fontSize = 12 + Math.random() * 22 + "px";

const duration = 5 + Math.random() * 7;

heart.style.animationDuration = duration + "s";

heartsContainer.appendChild(heart);

setTimeout(() => heart.remove(), duration * 1000);
```;
}

setInterval(createHeart, 600);

/* =====================================
FALLING PETALS
===================================== */

const petalsContainer = document.getElementById("petals");

function createPetal() {
  ```
if (!petalsContainer) return;

const petal = document.createElement("span");

petal.className = "petal";
petal.textContent = "🌸";

petal.style.left = Math.random() * 100 + "%";

const duration = 7 + Math.random() * 6;

petal.style.animationDuration = duration + "s";

petalsContainer.appendChild(petal);

setTimeout(() => petal.remove(), duration * 1000);
```;
}

setInterval(createPetal, 1800);

/* Initial decorations */

for (let i = 0; i < 10; i++) {
  setTimeout(createHeart, i * 250);
}

for (let i = 0; i < 5; i++) {
  setTimeout(createPetal, i * 500);
}

console.log("Somu Birthday Website Ready ❤️");
