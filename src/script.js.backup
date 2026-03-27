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

  document.getElementById('cd-d').textContent = String(days).padStart(2, '0');
  document.getElementById('cd-h').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-m').textContent = String(minutes).padStart(2, '0');
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
const track = document.querySelector('.sponsors-track');

if (track) {
  // Clone logos for seamless loop
  track.querySelectorAll('.sponsor-logo').forEach(logo => {
    track.appendChild(logo.cloneNode(true));
  });

  const SPEED = 1;        // px per frame — adjust to taste
  const FRICTION = 0.92;    // drag release deceleration (0–1, higher = more slide)
  const GAP = 60;           // must match CSS gap in px

  let position = 0;
  let halfWidth = 0;        // width of one set of logos (reset loop point)
  let rafId = null;

  let isDragging = false;
  let dragStartX = 0;
  let lastDragX = 0;
  let velocity = 0;
  let isUserInteracting = false;

  function calcHalfWidth() {
    // Half the track = one full set of logos
    halfWidth = track.scrollWidth / 2;
  }

  function tick() {
    if (!isUserInteracting) {
      // Auto-scroll
      velocity = -SPEED;
    } else if (!isDragging) {
      // Released — apply friction until velocity dies
      velocity *= FRICTION;
      if (Math.abs(velocity) < 0.05) velocity = 0;
    }

    position += velocity;

    // Loop: when we've scrolled one full set, reset silently
    if (position <= -halfWidth) {
      position += halfWidth;
    }
    if (position > 0) {
      position -= halfWidth;
    }

    track.style.transform = `translateX(${position}px)`;
    rafId = requestAnimationFrame(tick);
  }

  // ── Drag handling ──
  track.addEventListener('pointerdown', (e) => {
    isDragging = true;
    isUserInteracting = true;
    dragStartX = e.clientX;
    lastDragX = e.clientX;
    velocity = 0;
    track.classList.add('is-dragging');
    track.setPointerCapture(e.pointerId);
    e.preventDefault();
  });

  track.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const delta = e.clientX - lastDragX;
    velocity = delta;           // velocity = pixels moved this frame
    position += delta;
    lastDragX = e.clientX;
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    isUserInteracting = false;  // let friction take over, then auto-scroll resumes
    track.classList.remove('is-dragging');
  }

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  // Prevent click firing on logos after drag
  track.addEventListener('click', (e) => {
    if (Math.abs(dragStartX - lastDragX) > 5) {
      e.preventDefault();
    }
  });

  // Prevent image drag
  track.addEventListener('dragstart', (e) => e.preventDefault());

  // Init
  window.addEventListener('resize', calcHalfWidth);
  calcHalfWidth();
  rafId = requestAnimationFrame(tick);
}