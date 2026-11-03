javascript;
/* =====================================
   SOMU BIRTHDAY SURPRISE
   JAVASCRIPT
===================================== */

const totalPhotos = 10;
let currentPage = 0;

/* =====================================
   PHOTO DATA AND BIRTHDAY MESSAGES
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
   GENERATE 10 PHOTO PAGES
===================================== */

const messagePages = document.getElementById("messagePages");

for (let i = 0; i < totalPhotos; i++) {
  const message = birthdayMessages[i];
  const page = document.createElement("section");

  page.className = "message-page";
  page.id = "messagePage" + (i + 1);

  const paragraphs = message.paragraphs
    .map((text) => `<p>${text}</p>`)
    .join("");

  page.innerHTML = `
    <div class="message-container">

      <div class="message-photo">
        <div class="photo-frame shape-${i + 1}">
          <img
            src="photo${i + 1}.jpeg"
            alt="Somya Birthday Photo ${i + 1}"
            loading="eager"
          >
        </div>
      </div>

      <div class="message-text">

        <div class="message-number">
          ${message.number}
        </div>

        <h1>${message.title}</h1>

        ${paragraphs}

        <div class="message-decoration">
          ♡ ✨ ♡
        </div>

      </div>

    </div>
  `;

  messagePages.appendChild(page);
}

/* =====================================
   GENERATE PHOTO GALLERY
===================================== */

const galleryGrid = document.getElementById("galleryGrid");

for (let i = 1; i <= totalPhotos; i++) {
  const item = document.createElement("div");

  item.className = "gallery-item";
  item.style.animationDelay = i * 0.12 + "s";

  item.innerHTML = `
    <img
      src="photo${i}.jpeg"
      alt="Somya Photo ${i}"
      loading="eager"
    >
  `;

  galleryGrid.appendChild(item);
}

/* =====================================
   PAGE NAVIGATION
===================================== */

const galleryPage = document.getElementById("galleryPage");
const finalPage = document.getElementById("finalPage");
const navigation = document.getElementById("navigation");
const nextBtn = document.getElementById("nextBtn");

function hideAllPages() {
  document.querySelectorAll(".page, .message-page").forEach((page) => {
    page.classList.remove("active");
  });
}

function startSurprise() {
  hideAllPages();

  currentPage = 1;

  document.getElementById("messagePage1").classList.add("active");

  navigation.classList.add("show");

  updateButton();

  window.scrollTo(0, 0);
}

function nextPage() {
  if (currentPage < 10) {
    hideAllPages();

    currentPage++;

    document
      .getElementById("messagePage" + currentPage)
      .classList.add("active");
  } else if (currentPage === 10) {
    hideAllPages();

    currentPage = 11;

    galleryPage.classList.add("active");

    navigation.classList.remove("show");
  }

  updateButton();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function showFinalPage() {
  hideAllPages();

  currentPage = 12;

  finalPage.classList.add("active");

  navigation.classList.remove("show");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function updateButton() {
  if (currentPage <= 10) {
    navigation.classList.add("show");

    nextBtn.innerHTML = `
      Next Surprise
      <i class="fa-solid fa-arrow-right"></i>
    `;
  } else {
    navigation.classList.remove("show");
  }
}

/* =====================================
   TWO SONG MUSIC SYSTEM
===================================== */

const birthdayMusic = document.getElementById("birthdayMusic");
const romanticMusic = document.getElementById("romanticMusic");

let birthdayStarted = false;
let romanticStarted = false;
let musicSwitched = false;

// Volume settings

birthdayMusic.volume = 0.65;
romanticMusic.volume = 0.6;

// Attempt autoplay when website opens.
// Browsers may block this until user interaction.

window.addEventListener("load", function () {
  birthdayMusic
    .play()
    .then(() => {
      birthdayStarted = true;

      console.log("Birthday song started!");
    })
    .catch(() => {
      console.log("Autoplay blocked. Waiting for user interaction.");
    });
});

// Start birthday song on first user interaction.
// This is important for Android browsers.

function unlockBirthdayMusic() {
  if (birthdayStarted || romanticStarted || musicSwitched) {
    return;
  }

  birthdayMusic
    .play()
    .then(() => {
      birthdayStarted = true;

      console.log("Birthday song started after interaction!");
    })
    .catch((error) => {
      console.log("Birthday music playback issue:", error);
    });
}

// Pointer interaction works on modern Android, iOS and desktop.

document.addEventListener("pointerdown", unlockBirthdayMusic, {
  once: true,
  capture: true,
});

// Fallback for browsers that do not support pointer events.

document.addEventListener("touchstart", unlockBirthdayMusic, {
  once: true,
  capture: true,
  passive: true,
});

// Switch from birthday song to romantic song.

function switchToRomanticSong() {
  if (musicSwitched) {
    return;
  }

  musicSwitched = true;

  // Stop birthday song completely.

  birthdayMusic.pause();
  birthdayMusic.currentTime = 0;

  birthdayStarted = false;

  // Stop any other audio before playing romantic song.

  document.querySelectorAll("audio").forEach((audio) => {
    if (audio !== romanticMusic) {
      audio.pause();
      audio.currentTime = 0;
    }
  });

  // Start romantic song.

  romanticMusic.pause();
  romanticMusic.currentTime = 0;
  romanticMusic.volume = 0.6;

  romanticMusic
    .play()
    .then(() => {
      romanticStarted = true;

      console.log("Romantic song started!");
    })
    .catch((error) => {
      console.log("Romantic music playback issue:", error);
    });
}

/* =====================================
   FLOATING HEARTS
===================================== */

const heartsContainer = document.getElementById("floatingHearts");

const heartSymbols = ["❤️", "💕", "💗", "♡", "💖"];

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "heart";

  heart.innerHTML =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + "%";

  heart.style.fontSize = 12 + Math.random() * 22 + "px";

  const duration = 5 + Math.random() * 7;

  heart.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 450);

/* =====================================
   FALLING ROSE PETALS
===================================== */

const petalsContainer = document.getElementById("petals");

function createPetal() {
  const petal = document.createElement("span");

  petal.className = "petal";

  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * 100 + "%";

  petal.style.fontSize = 12 + Math.random() * 15 + "px";

  const duration = 7 + Math.random() * 6;

  petal.style.animationDuration = duration + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

setInterval(createPetal, 1800);

// Initial effects

for (let i = 0; i < 12; i++) {
  setTimeout(createHeart, i * 250);
}

for (let i = 0; i < 5; i++) {
  setTimeout(createPetal, i * 500);
}

/* =====================================
   VERTICAL CAKE CUTTING
===================================== */

const cakeScreen = document.getElementById("cakeScreen");
const cakeArea = document.getElementById("cakeArea");
const birthdayCake = document.getElementById("birthdayCake");
const cakeKnife = document.getElementById("cakeKnife");
const cutArrow = document.getElementById("cutArrow");
const cakePhotoReveal = document.getElementById("cakePhotoReveal");
const cakeReveal = document.getElementById("cakeReveal");
const cakeInstruction = document.getElementById("cakeInstruction");
const cakeNextBtn = document.getElementById("cakeNextBtn");

let isCutting = false;
let cakeCutComplete = false;
let cutStartY = 0;
let cutProgress = 0;

// Start cutting from the top-centre.

cakeArea.addEventListener("pointerdown", function (e) {
  if (cakeCutComplete) return;

  const rect = birthdayCake.getBoundingClientRect();

  const startZone =
    e.clientX > rect.left + rect.width * 0.3 &&
    e.clientX < rect.left + rect.width * 0.7 &&
    e.clientY >= rect.top - 10 &&
    e.clientY <= rect.top + 45;

  if (!startZone) return;

  isCutting = true;

  cutStartY = e.clientY;

  cutArrow.classList.add("hide");

  cakeKnife.style.display = "block";

  cakeKnife.style.left =
    e.clientX - cakeArea.getBoundingClientRect().left + "px";

  cakeKnife.style.top = e.clientY - cakeArea.getBoundingClientRect().top + "px";

  cakeArea.setPointerCapture(e.pointerId);

  e.preventDefault();
});

// Move knife and reveal photo.

cakeArea.addEventListener("pointermove", function (e) {
  if (!isCutting || cakeCutComplete) return;

  const cakeRect = birthdayCake.getBoundingClientRect();

  const areaRect = cakeArea.getBoundingClientRect();

  const distance = Math.max(0, e.clientY - cutStartY);

  cutProgress = Math.max(0, Math.min(100, (distance / cakeRect.height) * 100));

  // Knife stays in centre while moving vertically.

  cakeKnife.style.left =
    cakeRect.left + cakeRect.width / 2 - areaRect.left + "px";

  cakeKnife.style.top = e.clientY - areaRect.top + "px";

  // Reveal photo gradually.

  cakePhotoReveal.style.clipPath = `inset(0 0 ${100 - cutProgress}% 0)`;

  // Update instruction.

  cakeInstruction.textContent =
    cutProgress < 100
      ? "Keep going Somu! Cut all the way down ❤️"
      : "You did it Somu! ❤️🎂";

  if (cutProgress >= 100) {
    completeCakeCut();
  }

  e.preventDefault();
});

cakeArea.addEventListener("pointerup", function () {
  isCutting = false;
});

cakeArea.addEventListener("pointercancel", function () {
  isCutting = false;
});

/* =====================================
   COMPLETE CAKE CUT
===================================== */

function completeCakeCut() {
  if (cakeCutComplete) return;

  cakeCutComplete = true;

  isCutting = false;

  cutProgress = 100;

  cakeKnife.style.display = "none";

  cutArrow.classList.add("hide");

  cakeInstruction.textContent = "You did it Somu! ❤️🎂";

  cakePhotoReveal.style.clipPath = "inset(0 0 0 0)";

  // Separate the cake halves.

  birthdayCake.classList.add("fully-cut");

  // Celebration effects.

  createCakeConfetti();

  // Show final cake photo reveal.

  setTimeout(() => {
    cakeReveal.classList.add("show");
  }, 1400);
}

/* =====================================
   CAKE CONFETTI
===================================== */

function createCakeConfetti() {
  const symbols = ["💗", "✨", "🎉", "💕", "🌸", "❤️"];

  for (let i = 0; i < 70; i++) {
    const item = document.createElement("div");

    item.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    item.style.position = "fixed";

    item.style.left = Math.random() * 100 + "vw";

    item.style.top = "-30px";

    item.style.fontSize = "22px";

    item.style.zIndex = "3000";

    item.style.pointerEvents = "none";

    document.body.appendChild(item);

    const duration = 2500 + Math.random() * 1500;

    item.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: "translateY(110vh) rotate(720deg)",
          opacity: 0,
        },
      ],
      {
        duration: duration,
        easing: "ease-in",
      },
    );

    setTimeout(() => {
      item.remove();
    }, duration);
  }
}

/* =====================================
   CONTINUE TO BIRTHDAY MESSAGES
===================================== */

cakeNextBtn.addEventListener("click", function () {
  // Switch music first, during the user's click interaction.

  switchToRomanticSong();

  // Hide cake reveal.

  cakeReveal.classList.remove("show");

  cakeScreen.classList.remove("active");

  document.body.classList.remove("cake-mode");

  // Open birthday messages.

  startSurprise();
});
