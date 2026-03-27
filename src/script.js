/**
 * Légua Diário de Coimbra - JavaScript
 */

/* COUNTDOWN to 04 Jul 2026 09:30 */
const TARGET_DATE = new Date('2026-07-04T09:30:00');

function updateCountdown() {
  const diff = TARGET_DATE - Date.now();

  if (diff <= 0) {
    ['cd-d', 'cd-h', 'cd-m', 'cd-s2'].forEach(id => {
      document.getElementById(id).textContent = '00';
    });
    return;
  }

  const days = Math.floor(diff / 864e5);
  const hours = Math.floor((diff % 864e5) / 36e5);
  const minutes = Math.floor((diff % 36e5) / 6e4);
  const seconds = Math.floor((diff % 6e4) / 1e3);

  document.getElementById('cd-d').textContent = String(days).padStart(2, '0');
  document.getElementById('cd-h').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-m').textContent = String(minutes).padStart(2, '0');
  document.getElementById('cd-s2').textContent = String(seconds).padStart(2, '0');
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

/* SCROLL REVEAL */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.sr').forEach((el) => revealObserver.observe(el));

/* SPONSORS CAROUSEL DRAG */
const sponsorsTrack = document.querySelector('.sponsors-track');

if (sponsorsTrack) {
  let isDown = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  function startDrag(x) {
    isDown = true;
    startX = x;
    sponsorsTrack.style.cursor = 'grabbing';
    sponsorsTrack.style.animation = 'none';
  }

  function moveDrag(x) {
    if (!isDown) return;
    currentTranslate = prevTranslate + (x - startX);
    sponsorsTrack.style.transform = `translateX(${currentTranslate}px)`;
  }

  function endDrag() {
    if (!isDown) return;
    isDown = false;
    prevTranslate = currentTranslate;
    sponsorsTrack.style.cursor = 'grab';
    sponsorsTrack.style.animation = 'scroll-sponsors 40s linear infinite';
  }

  sponsorsTrack.addEventListener('pointerdown', (e) => {
    sponsorsTrack.setPointerCapture(e.pointerId);
    startDrag(e.clientX);
  });

  sponsorsTrack.addEventListener('pointermove', (e) => {
    moveDrag(e.clientX);
  });

  sponsorsTrack.addEventListener('pointerup', endDrag);
  sponsorsTrack.addEventListener('pointercancel', endDrag);

  sponsorsTrack.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });

  sponsorsTrack.style.cursor = 'grab';
}
