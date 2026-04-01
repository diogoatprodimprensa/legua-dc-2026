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
    const seconds = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-d').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-h').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(minutes).padStart(2, '0');
    document.getElementById('cd-s2').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);
const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('vis');
            observer.unobserve(entry.target);
        });
    },
    { threshold: 0.08 }
);

document.querySelectorAll('.sr').forEach((el) => revealObserver.observe(el));

const sponsorsRoot = document.querySelector('.sponsors-carousel');

if (sponsorsRoot) {
    const autoScroll = EmblaCarouselAutoScroll({
        speed: 1.5,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true
    });

    const embla = EmblaCarousel(
        sponsorsRoot,
        {
            loop: true,
            dragFree: false,
            align: 'start'
        },
        [autoScroll]
    );

    // 👇 visibility control
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    autoScroll.play();
                } else {
                    autoScroll.stop();
                }
            });
        },
        {
            threshold: 0, // adjust when it should start
            rootMargin: '200px 0px'
        }
    );

    observer.observe(sponsorsRoot);
}