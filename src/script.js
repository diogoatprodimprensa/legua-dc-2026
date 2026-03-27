const TARGET_DATE = new Date('2026-07-04T09:30:00');
function updateCountdown() {
    const diff = TARGET_DATE - Date.now();
    if (diff <= 0) {
        [
            'cd-d',
            'cd-h',
            'cd-m',
            'cd-s2'
        ].forEach(id => {
            document.getElementById(id).textContent = '00';
        });
        return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    document.getElementById('cd-d').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-h').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(minutes).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(
            (entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('vis');
                    revealObserver.unobserve(entry.target);
                }
            }
        );
    },
    {
        threshold: 0.08
    }
);
document.querySelectorAll('.sr').forEach((el) => revealObserver.observe(el));
const sponsorsSwiper = new Swiper('.sponsors-carousel', {
    loop: true,
    loopAdditionalSlides: 4,
    slidesPerView: 'auto',
    spaceBetween: 60,
    speed: 5000,

    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },

    freeMode: {
        enabled: true,
        momentum: true,
        momentumRatio: 0.25
    },

    grabCursor: true,
    allowTouchMove: true,

    on: {
        touchEnd(swiper) {
            requestAnimationFrame(() => swiper.autoplay.start());
        }
    }
});
