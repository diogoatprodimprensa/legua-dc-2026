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

  // Mouse events
  sponsorsTrack.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.clientX;
    sponsorsTrack.style.cursor = 'grabbing';
    sponsorsTrack.style.animationPlayState = 'paused';
  });

  sponsorsTrack.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.clientX;
    const walk = x - startX;
    currentTranslate = prevTranslate + walk;
    sponsorsTrack.style.transform = `translateX(${currentTranslate}px)`;
  });

  sponsorsTrack.addEventListener('mouseup', () => {
    isDown = false;
    sponsorsTrack.style.cursor = 'grab';
    prevTranslate = currentTranslate;
    sponsorsTrack.style.animationPlayState = 'running';
  });

  sponsorsTrack.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      sponsorsTrack.style.cursor = 'grab';
      prevTranslate = currentTranslate;
      sponsorsTrack.style.animationPlayState = 'running';
    }
  });

  // Touch events
  sponsorsTrack.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
    sponsorsTrack.style.animationPlayState = 'paused';
  });

  sponsorsTrack.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].clientX;
    const walk = x - startX;
    currentTranslate = prevTranslate + walk;
    sponsorsTrack.style.transform = `translateX(${currentTranslate}px)`;
  });

  sponsorsTrack.addEventListener('touchend', () => {
    isDown = false;
    prevTranslate = currentTranslate;
    sponsorsTrack.style.animationPlayState = 'running';
  });

  // Prevent dragging text/images
  sponsorsTrack.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });

  // Set initial cursor style
  sponsorsTrack.style.cursor = 'grab';
}
