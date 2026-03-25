/**
 * Légua Diário de Coimbra - JavaScript
 */

/* COUNTDOWN to 04 Jul 2026 09:30 */
const TARGET_DATE = new Date('2026-07-04T09:30:00');

function updateCountdown() {
  const diff = TARGET_DATE - Date.now();

  const ids = ['cd-d', 'cd-h', 'cd-m', 'cd-s2'];
  const ids2 = ['cd-d-2', 'cd-h-2', 'cd-m-2', 'cd-s2-2'];

  if (diff <= 0) {
    ids.concat(ids2).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '00';
    });
    return;
  }

  const days = Math.floor(diff / 864e5);
  const hours = Math.floor((diff % 864e5) / 36e5);
  const minutes = Math.floor((diff % 36e5) / 6e4);
  const seconds = Math.floor((diff % 6e4) / 1e3);

  const values = [days, hours, minutes, seconds];

  // Update both countdowns
  [ids, ids2].forEach(idSet => {
    idSet.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(values[i]).padStart(2, '0');
    });
  });
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
