* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --pink: #ff4f91;
  --light-pink: #ff9fbd;
  --dark-pink: #a51e55;
  --white: #fff5f8;
  --background: #100710;
}

body {
  min-height: 100vh;
  background: radial-gradient(
    circle at top,
    #351027 0%,
    #160b19 45%,
    #080509 100%
  );
  color: var(--white);
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

/* Background Decorations */

.floating-hearts,
.petals {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.heart,
.petal {
  position: absolute;
  bottom: -50px;
  animation: floatUp linear infinite;
  opacity: 0.5;
}

.heart {
  color: #ff6b9e;
  font-size: 20px;
}

.petal {
  width: 9px;
  height: 14px;
  background: #ff83ae;
  border-radius: 80% 0 80% 0;
  opacity: 0.35;
}

@keyframes floatUp {
  from {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }

  15% {
    opacity: 0.6;
  }

  to {
    transform: translateY(-110vh) rotate(360deg);
    opacity: 0;
  }
}

/* Screens */

.screen {
  min-height: 100vh;
  width: 100%;
  display: none;
  position: relative;
  z-index: 2;
  padding: 40px 20px;
}

.screen.active {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: fadeIn 0.8s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Common Text */

.small-heading {
  color: var(--light-pink);
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 15px;
}

h1 {
  font-family: "Dancing Script", cursive;
  color: #ff82ad;
  font-size: clamp(42px, 7vw, 75px);
  font-weight: 700;
  text-shadow: 0 0 25px rgba(255, 79, 145, 0.3);
}

h2 {
  color: #ffe0eb;
  font-size: clamp(20px, 4vw, 30px);
  margin-top: 10px;
}

/* Buttons */

.main-btn {
  border: none;
  outline: none;
  background: linear-gradient(135deg, #ff4f91, #d92c75);
  color: white;
  padding: 14px 30px;
  border-radius: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(255, 55, 130, 0.3);
  transition: 0.3s ease;
}

.main-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(255, 55, 130, 0.5);
}

/* Welcome Screen */

.welcome-card {
  width: min(650px, 100%);
  text-align: center;
  padding: 55px 30px;
  border: 1px solid rgba(255, 130, 173, 0.25);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.045);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 60px rgba(255, 79, 145, 0.12);
}

.welcome-heart {
  font-size: 65px;
  margin-bottom: 20px;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.15);
  }
}

.welcome-text {
  max-width: 480px;
  margin: 25px auto 10px;
  color: #f4cbd9;
  line-height: 1.9;
  font-size: 15px;
}

.welcome-subtext {
  color: #ff9fbd;
  margin-bottom: 30px;
  font-size: 14px;
}

/* Message Pages */

#messagePages {
  position: relative;
  z-index: 2;
}

.message-page {
  display: none;
  min-height: 100vh;
  padding: 50px 20px 110px;
  align-items: center;
  justify-content: center;
}

.message-page.active {
  display: flex;
  animation: fadeIn 0.8s ease;
}

.message-card,
.message-container {
  width: min(850px, 100%);
  padding: 35px;
  text-align: center;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 130, 173, 0.25);
  backdrop-filter: blur(15px);
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.3);
}

.message-photo,
.message-image {
  width: 100%;
  max-width: 420px;
  height: 350px;
  object-fit: contain;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 8px;
  border: 1px solid rgba(255, 130, 173, 0.35);
  box-shadow: 0 0 30px rgba(255, 79, 145, 0.15);
}

.photo-frame {
  margin: 0 auto 25px;
  width: fit-content;
  max-width: 100%;
}

.message-title {
  font-family: "Dancing Script", cursive;
  color: #ff91b7;
  font-size: 38px;
  margin: 15px 0;
}

.message-text {
  color: #ffe1eb;
  font-size: 16px;
  line-height: 2;
  max-width: 650px;
  margin: 15px auto;
}

.message-number {
  color: #ff8db5;
  font-size: 13px;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

/* Navigation */

#navigation {
  display: none;
  position: fixed;
  z-index: 20;
  bottom: 25px;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
}

#navigation.show {
  display: flex;
}

/* Gallery */

#galleryPage {
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
}

.section-heading {
  margin-bottom: 35px;
}

.section-heading p:last-child {
  color: #e8b9cb;
  margin-top: 12px;
  font-size: 14px;
}

.gallery-grid {
  width: min(1050px, 100%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin: 0 auto 40px;
}

.gallery-grid img {
  width: 100%;
  height: 280px;
  object-fit: contain;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border: 1px solid rgba(255, 130, 173, 0.3);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: 0.35s ease;
}

.gallery-grid img:hover {
  transform: translateY(-7px) scale(1.025);
  box-shadow: 0 12px 35px rgba(255, 79, 145, 0.25);
}

.gallery-next-btn {
  margin: 10px auto;
}

/* Final Screen */

.final-card {
  width: min(750px, 100%);
  text-align: center;
  padding: 50px 35px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 130, 173, 0.3);
  border-radius: 30px;
  backdrop-filter: blur(15px);
  box-shadow: 0 0 60px rgba(255, 79, 145, 0.12);
}

.final-heart {
  font-size: 65px;
  margin-bottom: 15px;
  animation: heartbeat 1.5s infinite;
}

.final-message {
  color: #f7d7e3;
  line-height: 2;
  font-size: 15px;
  margin: 22px auto;
  max-width: 600px;
}

.final-wish {
  color: #ff9fbd;
  font-family: "Dancing Script", cursive;
  font-size: 27px;
  line-height: 1.7;
  margin: 25px auto;
}

.signature {
  color: #f5c5d6;
  line-height: 1.8;
  margin-top: 35px;
}

.signature span {
  color: #ff82ad;
  font-family: "Dancing Script", cursive;
  font-size: 32px;
  font-weight: 700;
}

/* Responsive */

@media (max-width: 768px) {
  .screen {
    padding: 25px 15px;
  }

  .welcome-card,
  .final-card {
    padding: 40px 20px;
  }

  .message-card,
  .message-container {
    padding: 22px 15px;
  }

  .message-photo,
  .message-image {
    height: 280px;
  }

  .message-title {
    font-size: 32px;
  }

  .message-text {
    font-size: 14px;
    line-height: 1.9;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .gallery-grid img {
    height: 210px;
    padding: 6px;
  }

  .small-heading {
    letter-spacing: 2px;
  }
}

@media (max-width: 420px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid img {
    height: 260px;
  }

  .main-btn {
    padding: 13px 24px;
    font-size: 13px;
  }

  .final-wish {
    font-size: 23px;
  }
}
