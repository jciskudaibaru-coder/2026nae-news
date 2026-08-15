const clock = document.querySelector('#liveClock');

const updateClock = () => {
  if (!clock) return;
  clock.textContent = new Intl.DateTimeFormat('en-MY', {
    timeZone: 'Asia/Kuala_Lumpur',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(new Date()) + ' MYT';
};

const countdown = document.querySelector('[data-countdown]');
const updateCountdown = () => {
  if (!countdown) return;
  const remaining = new Date(countdown.dataset.countdown).getTime() - Date.now();
  if (remaining <= 0) {
    countdown.textContent = 'The Academy is now in session';
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  countdown.textContent = `${days} days · ${hours} hours · ${minutes} minutes`;
};

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#siteNav');
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('open', !isOpen);
});

navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

updateClock();
updateCountdown();
window.setInterval(updateClock, 1000);
window.setInterval(updateCountdown, 60000);
